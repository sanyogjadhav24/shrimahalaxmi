import { useEffect, useState } from 'react';
import { createFileRoute, Outlet, useNavigate, Link, useLocation } from '@tanstack/react-router';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { SiteLayout } from '@/components/site/Layout';

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
});

function AdminLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        navigate({ to: '/login' });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate({ to: '/login' });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <SiteLayout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-gray-500 uppercase font-display tracking-widest text-sm">Loading Admin...</div>
        </div>
      </SiteLayout>
    );
  }

  if (!session) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navItems = [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Manage Projects', to: '/admin/projects' },
    { label: 'Add Project', to: '/admin/projects/new' },
  ];

  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 min-h-[70vh]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded">
            <h2 className="font-display font-bold uppercase text-xl mb-6 text-[#1e1e2d]">Admin Panel</h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 rounded text-sm uppercase font-display tracking-wider transition-colors"
                  activeProps={{ className: "bg-[#e07a1f] text-white" }}
                  inactiveProps={{ className: "text-gray-600 hover:bg-gray-100" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 rounded text-sm uppercase font-display tracking-wider text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </SiteLayout>
  );
}

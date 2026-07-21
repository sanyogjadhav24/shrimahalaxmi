import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [stats, setStats] = useState({ projectsCount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const { count } = await supabase.from('projects').select('*', { count: 'exact', head: true });
      setStats({ projectsCount: count || 0 });
      setLoading(false);
    }
    loadStats();
  }, []);

  return (
    <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
      <h1 className="text-2xl font-display font-bold uppercase text-[#1e1e2d] mb-6">Dashboard Overview</h1>
      
      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded border border-gray-100">
            <div className="text-gray-500 uppercase tracking-widest text-xs mb-2">Total Projects</div>
            <div className="text-4xl font-display font-bold text-[#e07a1f]">{stats.projectsCount}</div>
          </div>
          <div className="bg-gray-50 p-6 rounded border border-gray-100">
            <div className="text-gray-500 uppercase tracking-widest text-xs mb-2">System Status</div>
            <div className="text-4xl font-display font-bold text-green-500">Live</div>
          </div>
        </div>
      )}
    </div>
  );
}

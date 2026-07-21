import { createFileRoute, Link } from '@tanstack/react-router';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/admin/projects/')({
  component: AdminProjects,
});

function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    setLoading(true);
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      alert('Error deleting project: ' + error.message);
    } else {
      loadProjects();
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display font-bold uppercase text-[#1e1e2d]">Manage Projects</h1>
        <Link 
          to="/admin/projects/new" 
          className="bg-[#e07a1f] text-white px-4 py-2 rounded text-sm uppercase font-display tracking-wider hover:bg-[#c86a17] transition"
        >
          + Add Project
        </Link>
      </div>

      {loading ? (
        <div className="py-12 text-center text-gray-500 uppercase tracking-widest text-xs">Loading projects...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display">Image</th>
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display">Title</th>
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display">Category</th>
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display">Location</th>
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display">Year</th>
                <th className="py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img src={p.image_url} alt={p.title} className="w-16 h-12 object-cover rounded" />
                  </td>
                  <td className="py-3 px-4 font-bold text-[#1e1e2d]">{p.title}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{p.category}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{p.location}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{p.year}</td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => handleDelete(p.id, p.title)}
                      className="text-red-500 hover:text-red-700 text-sm uppercase tracking-wider font-display"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">No projects found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

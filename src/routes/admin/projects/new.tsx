import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { PROJECT_CATS } from '@/data/site';

export const Route = createFileRoute('/admin/projects/new')({
  component: NewProject,
});

function NewProject() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: PROJECT_CATS[1], // Default to first actual category
    location: '',
    year: new Date().getFullYear().toString(),
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!imageFile) {
      setError("Please select an image to upload.");
      setLoading(false);
      return;
    }

    try {
      // 1. Upload the image to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('project-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // 2. Get the public URL for the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

      // 3. Insert the record into the database
      const { error: dbError } = await supabase.from('projects').insert([{
        title: formData.title,
        category: formData.category,
        location: formData.location,
        year: parseInt(formData.year, 10),
        image_url: imageUrl
      }]);

      if (dbError) throw dbError;

      // 4. Redirect back to projects list
      navigate({ to: '/admin/projects' });

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-sm border border-gray-100 max-w-2xl">
      <h1 className="text-2xl font-display font-bold uppercase text-[#1e1e2d] mb-6">Add New Project</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded mb-6 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Project Title</label>
          <input 
            type="text" 
            name="title"
            required 
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]" 
            placeholder="e.g. Pune-Solapur Highway" 
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Category</label>
            <select 
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]"
            >
              {PROJECT_CATS.filter(c => c !== "All").map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Year</label>
            <input 
              type="number" 
              name="year"
              required 
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Location</label>
          <input 
            type="text" 
            name="location"
            required 
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]" 
            placeholder="e.g. Pune, MH" 
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Project Image</label>
          <input 
            type="file" 
            accept="image/*"
            required 
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f] bg-gray-50" 
          />
          <p className="text-xs text-gray-500 mt-2">Recommended size: 800x600px. Max size: 2MB.</p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex gap-4">
          <button 
            type="submit" 
            disabled={loading}
            className="bg-[#e07a1f] text-white px-8 py-3 rounded text-sm uppercase font-display tracking-wider hover:bg-[#c86a17] transition disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Save Project'}
          </button>
          <button 
            type="button" 
            onClick={() => navigate({ to: '/admin/projects' })}
            disabled={loading}
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded text-sm uppercase font-display tracking-wider hover:bg-gray-200 transition disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

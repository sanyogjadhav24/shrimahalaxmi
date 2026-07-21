import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// To avoid 'unknown file extension .jpg' errors when Node tries to import Vite assets,
// we declare the projects array directly here for seeding.
const PROJECTS = [
  { cat: "Roads & Highways", title: "Pune-Solapur Highway Expansion", location: "Maharashtra", year: "2024", image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Bridges", title: "Krishna River RCC Bridge", location: "Sangli, MH", year: "2023", image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Public Buildings", title: "District Hospital, Satara", location: "Satara, MH", year: "2023", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Water Works", title: "MIDC Water Pipeline Grid", location: "Pune, MH", year: "2022", image: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Industrial", title: "Chakan Industrial Warehouse", location: "Chakan, MH", year: "2024", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Bridges", title: "Nashik Flyover Project", location: "Nashik, MH", year: "2022", image: "https://images.unsplash.com/photo-1633363961301-4f100a78e92d?crop=entropy&cs=srgb&fm=jpg&q=85" },
];

// Note: Ensure your .env.local file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY 
// (or preferably the SERVICE_ROLE_KEY if your table has Row Level Security enabled for inserts).
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || ''; // Usually SERVICE_ROLE_KEY is required to bypass RLS policies

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase URL or Key in environment variables.");
  console.error("Please run this script with your environment variables loaded, e.g.:");
  console.error("  bun --env-file=.env.local run scripts/seed.ts");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log("🌱 Starting database seeding...");
  
  // Transform the local PROJECTS array into the format expected by the DB (if needed)
  const projectsToInsert = PROJECTS.map((p) => ({
    category: p.cat,
    title: p.title,
    location: p.location,
    year: parseInt(p.year, 10),
    image_url: p.image,
  }));

  const { data, error } = await supabase
    .from('projects')
    .insert(projectsToInsert)
    .select();

  if (error) {
    console.error("❌ Error inserting projects:", error.message);
  } else {
    console.log("✅ Successfully inserted projects!", data?.length, "rows added.");
  }
}

seed().catch(console.error);

import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-ClWdGkyA.js
var supabaseUrl = typeof import.meta !== "undefined" && "https://guqfoqyddjnubevgvjmc.supabase.co" || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "";
var supabaseAnonKey = typeof import.meta !== "undefined" && "sb_publishable_ur-oj69vbueH2Zz3mqAlOw_ejq-Hxbi" || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";
if (!supabaseUrl || !supabaseAnonKey) console.warn("[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Add them to Vercel Environment Variables.");
var supabase = createClient(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder-key");
//#endregion
export { supabase as t };

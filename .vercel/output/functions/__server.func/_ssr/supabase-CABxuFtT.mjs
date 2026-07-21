import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-CABxuFtT.js
var supabaseUrl = process.env.VITE_SUPABASE_URL || "https://guqfoqyddjnubevgvjmc.supabase.co";
var supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_ur-oj69vbueH2Zz3mqAlOw_ejq-Hxbi";
if (!supabaseUrl || !supabaseAnonKey) console.warn("Supabase URL and Anon Key are missing. Please add them to your .env file.");
var supabase = createClient(supabaseUrl, supabaseAnonKey);
//#endregion
export { supabase as t };

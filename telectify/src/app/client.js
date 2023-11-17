import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbvwcmanuobaptifekla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idndjbWFudW9iYXB0aWZla2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxNTc5NTgsImV4cCI6MTk3NzczMzk1OH0.s5dUaHo9ASAWWgmX3sSV_XKuCFNd_v7Nc5-wRjziKXo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

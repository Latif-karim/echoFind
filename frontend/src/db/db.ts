import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ysqmngclhzlofoqnqkhr.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_API_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);

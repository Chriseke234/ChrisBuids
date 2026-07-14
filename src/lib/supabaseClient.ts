import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submits a contact form entry either to Supabase or logs it to console if not configured.
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
  whatsapp?: string;
}) {
  if (isSupabaseConfigured && supabase) {
    const { data: result, error } = await supabase
      .from("contacts")
      .insert([data]);
    if (error) throw error;
    return result;
  } else {
    // Graceful fallback for demo or when env variables are not yet loaded
    console.log("Supabase not configured. Mocking form submission:", data);
    
    // Save to local storage for local demo testing
    try {
      const submissions = JSON.parse(localStorage.getItem("chrisbuilds_contacts") || "[]");
      submissions.push({ ...data, id: Date.now().toString(), created_at: new Date().toISOString() });
      localStorage.setItem("chrisbuilds_contacts", JSON.stringify(submissions));
    } catch (e) {
      console.warn("Could not save submission to localStorage:", e);
    }
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { mock: true, data };
  }
}

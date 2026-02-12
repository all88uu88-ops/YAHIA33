declare global {
  interface Window {
    createSupabaseClient: any
  }
}

const supabaseUrl = "https://your-project-id.supabase.co"
const supabaseAnonKey = "your_public_anon_key"

export const supabase = window.createSupabaseClient(
  supabaseUrl,
  supabaseAnonKey
)

declare global {
  interface Window {
    createSupabaseClient: any
  }
}

const supabaseUrl = "https://mpmcnvmjvqqpehgtabsr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wbWNudm1qdnFxcGVoZ3RhYnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTEyMjQsImV4cCI6MjA4NjI2NzIyNH0.jGRsecBY_euNmTPbGwTZSXlAj_KGRvAohgAiEqYLHcE"

export const supabase = window.createSupabaseClient(
  supabaseUrl,
  supabaseAnonKey
)

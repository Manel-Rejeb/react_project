import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eemodrgbrxsmebrjxoge.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbW9kcmdicnhzbWVicmp4b2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5MDgyODUsImV4cCI6MTk4ODQ4NDI4NX0.cnrvuQW5YO_YDb9MjA0ejwBbX1uJsypyHCPSJ1rtxtA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

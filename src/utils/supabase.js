import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://feqosmhgbbpofepfjrol.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlcW9zbWhnYmJwb2ZlcGZqcm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3Njg5MzUsImV4cCI6MjAwMDM0NDkzNX0.gW0lvsUXEv9ztvhfddnqgyJVihs0Wc7E4o6ix6rUbWM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
// const clientB = createClient(SUPABASE_URL, SUPABASE_KEY)



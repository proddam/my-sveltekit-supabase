import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pjsiapkmpyvidnryzbzx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqc2lhcGttcHl2aWRucnl6Ynp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYzNzE5NzMsImV4cCI6MTk2MTk0Nzk3M30.5f4pe4c9jIUWCDFDlv9Hm1w4sJvLw5Xs0a0XwMSFSws'

const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase
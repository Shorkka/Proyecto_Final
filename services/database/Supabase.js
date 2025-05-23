
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xgejkzmeujgtlvfrzkad.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZWprem1ldWpndGx2ZnJ6a2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NDY5NjksImV4cCI6MjA2MzUyMjk2OX0.9kbZAFJMRIqDcPwvktQqUmJO2AaWTsGtiCLFKjjhnAM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
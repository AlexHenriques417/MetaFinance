import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://pqvaoiwqyzrojhiicjae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdmFvaXdxeXpyb2poaWljamFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MzQ5MzQsImV4cCI6MjEwMjUxMDkzNH0.wBesncgytvk1ofsxH-sJTYIEBn0nIhav5cf-Y22AAvA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
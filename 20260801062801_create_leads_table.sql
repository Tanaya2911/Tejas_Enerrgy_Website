/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — submitter's phone number
  - `city` (text) — optional city
  - `property_type` (text) — optional property type (residential/commercial/etc.)
  - `message` (text) — optional inquiry message
  - `service_interest` (text) — optional which service they're interested in
  - `status` (text, default 'new') — lead status for internal tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- This is a single-tenant, no-auth marketing site. The contact form is public-facing and
  visitors submit inquiries without signing in, so inserts must be allowed for the anon role.
- INSERT policy: allow anyone (anon + authenticated) to submit a lead.
- SELECT/UPDATE/DELETE: restricted to authenticated users (site operators) so leads are
  not publicly readable or editable. Anon can only insert, never read or modify.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text,
  property_type text,
  message text,
  service_interest text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (public contact form)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated operators can read leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads" ON leads FOR SELECT
  TO authenticated USING (true);

-- Only authenticated operators can update lead status
DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads" ON leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated operators can delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads" ON leads FOR DELETE
  TO authenticated USING (true);

-- Index for sorting leads by newest first
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);

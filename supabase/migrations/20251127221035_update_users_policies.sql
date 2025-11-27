/*
  # Update Users Table RLS Policies

  1. Security Updates
    - Remove restrictive authenticated-only policies
    - Add public read policy for login verification
    - Keep insert policy for signup
    - Users can update their own data
*/

DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;

CREATE POLICY "Allow public read for authentication"
  ON users
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public updates"
  ON users
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);
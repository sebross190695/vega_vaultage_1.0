/*
  # Create Users Table

  1. New Tables
    - `users`
      - `id` (text, primary key) - User ID in format "vv_N"
      - `username` (text, unique) - User's username
      - `email` (text, unique) - User's email address
      - `password` (text) - Hashed password
      - `balance` (numeric) - User's account balance
      - `created_at` (timestamptz) - Account creation timestamp
  
  2. Security
    - Enable RLS on `users` table
    - Add policy for authenticated users to read their own data
    - Add policy for users to update their own balance and profile
*/

CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  username text UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  password text NOT NULL,
  balance numeric DEFAULT 1000,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id)
  WITH CHECK (auth.uid()::text = id);

CREATE POLICY "Allow anonymous user creation"
  ON users
  FOR INSERT
  TO anon
  WITH CHECK (true);
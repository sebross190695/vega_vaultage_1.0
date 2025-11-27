export interface User {
  id: string;
  email: string;
  username: string;
  balance: number;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

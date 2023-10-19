export type AuthResponse = {
  message?: string;
  accessToken?: string;
};

export type AuthState = {
  token: string | null | undefined;
};

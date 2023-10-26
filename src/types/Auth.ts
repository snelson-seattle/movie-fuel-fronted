export type AuthResponse = {
  statusCode?: number;
  message?: string;
  accessToken?: string;
};

export type AuthState = {
  token: string | null | undefined;
};

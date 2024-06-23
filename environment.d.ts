declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DB_API_KEY: string;
      NEXT_PUBLIC_DB_AUTH_DOMAIN: string;
      NEXT_PUBLIC_DB_PROJECT_ID: string;
      NEXT_PUBLIC_DB_STORAGE_BUCKET: string;
      NEXT_PUBLIC_DB_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_DB_APP_ID: string;
      NEXT_PUBLIC_DB_MEASUREMENT_ID: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

export {};

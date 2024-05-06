declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_HOST?: string;
      NEXT_PUBLIC_KAKAO_API_KEY?: string;
    }
  }
}

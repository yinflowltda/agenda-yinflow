const SUPABASE_BASE_URL = "https://ogbfbwkftgpdiejqafdq.supabase.co/rest/v1";

export const checkApiKey = async (apiKey: string): Promise<boolean> => {
  const response = await fetch(`${SUPABASE_BASE_URL}/ApiKey?id=eq.${apiKey}`, {
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY || "",
    },
  });

  const result = await response.json();

  return {
    response,
    result,
  };
};

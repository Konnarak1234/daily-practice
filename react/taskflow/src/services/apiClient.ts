
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not configured.");
}

// this create the custom error called ApiError
export class ApiError extends Error {
    public status: number;
  constructor(
    status: number,
    message: string
  ) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  endpoint: unknown,
  options: RequestInit = {}
): Promise<T> {
    
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers,
      },
    }
  );

  // fetch does not reject automatically on HTTP 4xx/5xx.
  if (!response.ok) {
    throw new ApiError(
      response.status,
      `API request failed: ${response.status}`
    );
  }

  // Support successful responses without a body.
  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

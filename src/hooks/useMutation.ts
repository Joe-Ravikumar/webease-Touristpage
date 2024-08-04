// src/hooks/useMutation.ts
import { useState } from "react";

interface MutationOptions<T> {
  onSuccess?: (data: T, statusCode: number) => void;
  onError?: (error: string, statusCode: number) => void;
}

interface MutationResult<T> {
  data: T | null;
  error: string | null;
  statusCode: number | null;
  isLoading: boolean;
  mutate: (variables: any) => Promise<void>;
}

function useMutation<T>(
  mutationFn: (variables: any) => Promise<T>,
  options?: MutationOptions<T>
): MutationResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (variables: any) => {
    setData(null);
    setIsLoading(true);
    setError(null);
    setStatusCode(null);
    try {
      const response = await mutationFn(variables);
      const responseData = (response as any).data;

      setData(responseData);

      let status = (response as any).status ?? 200; 

      setStatusCode(status);

      if (options?.onSuccess) {
        options.onSuccess(responseData, status);
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || err.message || "An unknown error occurred";

      const errorCode = err.response?.status || 500;

      setError(errorMessage);
      setStatusCode(errorCode);

      if (options?.onError) {
        options.onError(errorMessage, errorCode);
      }
      
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, statusCode, isLoading, mutate };
}

export default useMutation;

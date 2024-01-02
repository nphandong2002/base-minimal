import useSWR, { SWRResponse, Key, SWRConfiguration } from 'swr';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

interface Return<Data, Error>
  extends Pick<SWRResponse<Data, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
  data: Data | undefined;
  isInitializing: boolean;
  isLoading: boolean;
}

export type Config<Data = unknown, Error = unknown> = SWRConfiguration<Data, Error> & {
  revalidateWhenUndefined?: boolean;
};

export type UseAxiosSWRFetcher<Data> = (...args: any[]) => Promise<Data>;

export function useAxiosSWR<Data = unknown, Error = unknown>(
  key: Key,
  fetcher: UseAxiosSWRFetcher<Data> | null,
  { fallbackData, revalidateWhenUndefined, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  /* eslint-disable */
  const { data, isValidating, error, isLoading, mutate } = useSWR(key, fetcher, config);
  const isInitializing = !data && !error;

  useEffect(() => {
    if (revalidateWhenUndefined && typeof data === 'undefined') {
      mutate();
    }
  }, [revalidateWhenUndefined]);

  return {
    data,
    isValidating,
    isInitializing,
    isLoading,
    error,
    mutate,
  };
}

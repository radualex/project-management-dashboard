import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

export default function useLiveSearch(
  query: string,
  requestFactory: Function,
  delay = 250,
  neglectValue = ""
): any {
  const [response, setResponse] = useState(null);
  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    let isActive = true;

    if (debouncedQuery !== neglectValue) {
      requestFactory(debouncedQuery).then((res: any) => {
        if (isActive) {
          setResponse(res);
        }
      });
    } else {
      setResponse(null);
    }
  }, [neglectValue, requestFactory, debouncedQuery]);

  return response;
}

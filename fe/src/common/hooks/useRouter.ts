import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";

export function useRouter<T>() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      navigate: navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
    };
  }, [params, location, navigate]);
}

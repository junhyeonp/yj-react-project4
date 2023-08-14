// 헤더 페이지에 useQuery 요청
import { useQuery } from "react-query"
import { loginSuccess } from "../api";

export default function useUser() {
    const {isLoading, data, refetch} = useQuery(
        "loginSuccess", loginSuccess
    )
  return {
    userLoading: isLoading,
    isLoggedIn: data?.ok,
    user: data,
    refetch,
  };
}

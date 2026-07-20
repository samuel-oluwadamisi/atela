import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/getUser";


export function useGetUser(){
   return useQuery({
    queryKey: ['profile'],
    queryFn: getUser,
    staleTime: 60 * 1000,
   })
}
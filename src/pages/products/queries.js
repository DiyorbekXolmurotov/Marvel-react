import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchCharacters({ queryKey }) {
    const [{ limit, offset, nameStartsWith }] = queryKey;
  return axios.get("characters", {
    params: {
      limit,
      offset,
      nameStartsWith,
    },
  });
}

export function useCharacters({ limit, offset, nameStartsWith }) {
    return useQuery({
    queryKey: ["characters", { limit, offset, nameStartsWith }], 
    queryFn: fetchCharacters,
});
}
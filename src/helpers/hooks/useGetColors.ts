import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { IColor } from "../../interfaces";

const BASE_URL = import.meta.env.VITE_COLORS_BASE_API_URL;

const getColors = async (): Promise<IColor[]> => {
  const data = await axios.get(BASE_URL);

  return data.data;
};

interface UseGetColorsResponse {
  data: IColor[] | undefined;
  isLoading: boolean;
}

export function useGetColors(): UseGetColorsResponse {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["colors"],
    queryFn: getColors,
  });

  useEffect(() => {
    if (isError) throw new Error("ERROR!!!");
  }, [isError]);

  return { data, isLoading };
}

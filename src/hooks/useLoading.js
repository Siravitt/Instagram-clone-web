import { useContext } from "react";
import { LoadingContext } from "../contexts/loadingContext";

export default function useLoading() {
  return useContext(LoadingContext);
}

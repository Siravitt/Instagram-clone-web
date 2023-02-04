import { useContext } from "react";
import { CurrentPageContext } from "../contexts/CurrentPageContext";

export default function useCurrentPage() {
  return useContext(CurrentPageContext);
}

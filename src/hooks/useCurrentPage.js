import { useContext } from "react";
import { CurrentPageContext } from "../contexts/currentPageContext";

export default function useCurrentPage() {
  return useContext(CurrentPageContext);
}

import { useContext } from "react";

import { ViewportContext } from "@/context/viewport";

type Viewport = "mobile" | "tablet" | "desktop";

const useGetViewport = (): Viewport => {
  const viewportContext = useContext(ViewportContext);

  const viewport = viewportContext?.viewport || "mobile";

  return viewport;
};

export { useGetViewport };
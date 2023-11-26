import { getFMPReady } from "../utils/fmp";
import React, { Suspense, useEffect, useState } from "react";

export function LazyComponent({ children }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    getFMPReady().then(() => setReady(true))
  }, [])
  return <Suspense fallback={<></>}>
    {ready && children}
  </Suspense>
}
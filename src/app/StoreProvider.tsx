"use client";
import { store, AppStore } from "../redux/store";
import { Provider } from "react-redux";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}

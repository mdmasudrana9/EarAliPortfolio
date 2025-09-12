"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { AuthProvider } from "@/contexts/auth-context";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}

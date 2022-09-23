import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import App from "App";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.less";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

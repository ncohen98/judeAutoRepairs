"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient } from "@/lib/trpc";
import FontLoader from '@/components/FontLoader';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Jude Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <FontLoader>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </trpc.Provider>
        </FontLoader>
      </body>
    </html>
  );
}

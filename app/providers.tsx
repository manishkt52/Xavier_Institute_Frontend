"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId="224116271422-ap6tqtujbm8ik5l7v4j9da9gkjvjsfem.apps.googleusercontent.com">
      
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
      >
        {children}
      </ThemeProvider>

    </GoogleOAuthProvider>
  );
}
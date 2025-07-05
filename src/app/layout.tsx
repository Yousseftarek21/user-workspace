import React, { ReactNode } from "react";
import "./globals.css";

/**
 * RootLayout component wraps the entire app.
 * Sets up global HTML structure and imports fonts.
 */
export const metadata = {
  title: "Clustr",
  description: "A modern black and white freelance services homepage clone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black font-sans antialiased">{children}</body>
    </html>
  );
}

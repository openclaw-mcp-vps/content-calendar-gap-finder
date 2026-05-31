import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Calendar Gap Finder",
  description: "Find content gaps in social media calendars. Analyze posting patterns and get smart suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa3f90d0-1386-482d-88a0-2ddfb7832d6b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

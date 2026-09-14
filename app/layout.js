import "./globals.css";

export const metadata = {
  title: "TabiWilson Photography — Visual Stories",
  description: "Portraits, celebrations and brand stories. Explore TabiWilson Photography and start a conversation with @wlsnarchives.",
  robots: { index: false, follow: false },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg` },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

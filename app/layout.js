import './globals.css'

export const metadata = {
  title: 'TabiWilson Photography',
  description: 'Professional Photography Portfolio',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
};
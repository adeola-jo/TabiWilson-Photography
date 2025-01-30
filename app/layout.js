import './globals.css'

export const metadata = {
  title: 'TabiWilson Photography',
  description: 'Professional Photography Portfolio',
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
import '../globals.css';

export const metadata = {
  title: 'Interactive Workflow Portfolio',
  description: 'A showcase of interactive workflow projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
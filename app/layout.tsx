import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Rotation Bot — Automated Security for DevOps Teams',
  description: 'Automatically rotate API keys across services with zero-downtime deployment and team notifications. Built for DevOps teams and security engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8ba36c5-0d33-4089-bb8e-cc53fe11b0c5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}

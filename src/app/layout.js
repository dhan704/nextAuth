export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>NextAuth App</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  
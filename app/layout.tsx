import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR AX Drive TFT — 현대오토에버",
  description:
    "AI Transformation 으로 HR 의 미래를 그리다. 현대오토에버 HR AX Drive TFT 가 만드는 사람 중심의 지능형 인사 혁신.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Category | tawk.to Assessment",
  description: "This is the category page.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{ margin: "0", padding: "0", boxSizing: "border-box" }}
        className={lato.className}
      >
        {children}
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { Lato } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | tawk.to Assessment",
  description: "This is the homepage.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}

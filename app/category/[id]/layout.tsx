import { ReactNode } from "react";

export const metadata = {
  title: "Category | tawk.to Assessment",
  description: "This is the category page.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}

"use client";

import Searchbar from "./components/Searchbar";
import CategoryCard from "./components/CategoryCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Searchbar />
      <CategoryCard />
    </main>
  );
}

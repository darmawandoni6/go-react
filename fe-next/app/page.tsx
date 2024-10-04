"use client";
import styles from "./page.module.scss";
import Logo from "../src/images/logo.svg";

import { useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const SectionI = dynamic(() => import("./component/SectionI"), {
  ssr: false,
  loading: () => null,
});
const SectionII = dynamic(() => import("./component/SectionII"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime", {
      params: {
        page: 1,
        limit: 10,
      },
    });
    axios.get("https://api.jikan.moe/v4/manga", {
      params: {
        page: 1,
        limit: 10,
      },
    });
    axios.get("https://api.jikan.moe/v4/seasons/now", {
      params: {
        page: 1,
        limit: 10,
      },
    });
  }, []);
  return (
    <div className={styles.page}>
      <header>
        <Logo />
      </header>
      <SectionI />
      <SectionII />
    </div>
  );
}

"use client";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar/Navbar";
import Hero from "@/component/Hero/Hero";
import MissionVision from "@/component/MissionVision/MissionVision";
import TextCard from "@/component/Card/TextCard/TextCard";
import { whatSetUsApartData } from "@/utils/data";
import Footer from "@/component/Footer/Footer";
import JoinUs from "@/component/JoinUs/JoinUs";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <MissionVision />

      {/* WHAT SETS US APART */}
      <section className={styles.wsua}>
        <h3>What Sets Us Apart</h3>
        <div className={styles.cardWrap}>
          <Fade triggerOnce={true} cascade damping={0.1}>
            {whatSetUsApartData.map((item) => (
              <TextCard data={item} key={item.title} />
            ))}
          </Fade>
        </div>
      </section>

      {/* JOIN OUR FINANCIAL JOURNEY */}
      <JoinUs />

      <Footer />
    </main>
  );
}

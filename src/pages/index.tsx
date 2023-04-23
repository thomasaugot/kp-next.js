import Head from "next/head";
import Image from "next/image";
import Projects from "../components/Projects";
import Navbar from "@/components/Navbar";
import ApplySection from "@/components/ApplySection";
import Header from "@/components/Header";
import CryptoLogos from "@/components/CryptoLogos";
import CryptoSaleSection from "@/components/CryptoSaleSection";
import MintPassSection from "@/components/MintPassSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kingpad V2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Image
        className="absolute z-[-1] h-[6000px] top-[-600px]"
        alt="glow"
        src="/img/glow.png"
        width="5800"
        height="9800"
      />
      <ApplySection />
      <CryptoLogos />
      <CryptoSaleSection projects={[]} />
      <MintPassSection />
      <Projects projects={[]} />
      <Footer />
    </>
  );
}

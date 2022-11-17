import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSlides from "../components/HomeSlides";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - NFTD EARTH</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Header />

      <main>
        <section className="hero relative py-20 md:pt-32">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="img/gradient.jpg" alt="gradient" />
          </picture>
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
            <img src="img/gradient_dark.jpg" alt="gradient dark" />
          </picture>
          <div className="container">
            <div className="py-24 text-center">
              <h1 className="mb-6 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
                Collect Earth NFTs.
              </h1>
              <p className="mb-8 text-lg dark:text-jacarta-200">
                POWERED BY NFTD STABLECOIN
              </p>
              <div className="inline-flex space-x-4">
                <a
                  href="https://rad-truffle-c76806.netlify.app"
                  className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Mint NFT
                </a>
                <a
                  href="https://earthverse.netlify.app"
                  className="w-48 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Claim Free Land
                </a>
              </div>
            </div>

            <HomeSlides />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

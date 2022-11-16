/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <div>
      
      <Head>
        <title>404 Not Found - NFTD EARTH</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Header />

      <main className="pt-[5.5rem] lg:pt-24">
          {/* 404 */}
          <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                src="img/gradient_light.jpg"
                alt="gradient"
                className="h-full w-full"
              />
            </picture>
            <div className="container">
              <div className="mx-auto max-w-lg text-center">
                <img src="img/404.png" alt="" className="mb-16 inline-block" />
                <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white md:text-6xl">
                  Page Not Found!
                </h1>
                <p className="dark:text-jacarta-300 mb-12 text-lg leading-normal">
                  Oops! The page you are looking for does not exist. It might have
                  been moved or deleted.
                </p>
                <a
                  href="/"
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Navigate Back Home
                </a>
              </div>
            </div>
          </section>
          {/* end 404 */}
        </main>
  
      <Footer />

    </div>
  )
}

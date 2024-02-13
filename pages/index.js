import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "@/styles/noAuth/Home.module.scss";
import Subscribe from "@/components/Subscribe";
import Contact from "@/paymee/LandingPage/Contact";
import Partnership from "@/paymee/LandingPage/Partnership";
import HelpPayment from "@/paymee/LandingPage/HelpPayment";
import Choose from "@/paymee/LandingPage/Choose";
import Registration from "@/paymee/LandingPage/Registration";
import Testimony from "@/paymee/LandingPage/Testimony";
import Features from "@/paymee/LandingPage/Features";
import Herosection from "@/paymee/LandingPage/Herosection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Herosection />
        <Features />
        <Testimony />
        {/* <Registration /> */}
        <Choose />
        <HelpPayment />
        <Partnership />
        <Contact />
        <Subscribe />
      </Layout>
    </>
  );
}

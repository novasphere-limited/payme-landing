import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "@/styles/noAuth/Home.module.scss";
import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import Partnership from "@/components/Partnership";
import HelpPayment from "@/components/HelpPayment";
import Choose from "@/components/Choose";
import Registration from "@/components/Registration";
import Testimony from "@/components/Testimony";
import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Herosection />
        <Features />
        <Testimony />
        <Registration />
        <Choose />
        <HelpPayment />
        <Partnership />
        <Contact />
        <Subscribe />
      </Layout>
    </>
  );
}

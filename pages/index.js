import Head from "next/head";
import React, { useState, useEffect } from "react";
import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import HelpPayment from "@/components/HelpPayment";
import Choose from "@/components/Choose";
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
        <Choose />
        <HelpPayment />
        <Contact />
        <Subscribe />
      </Layout>
    </>
  );
}

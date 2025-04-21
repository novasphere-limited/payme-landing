import { useState } from "react";

export default function Legals() {
  const [showMore, setShowMore] = useState(false);
  return (
    // <div
    //   style={{
    //     backgroundImage: 'url("/asset/circ.png")',
    //     backgroundSize: "620px 620px",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "top -100px right -310px",
    //   }}
    //   className="bg-[#FAF8FE] hide-bgimg pt-[51px] pb-[123px]"
    // >
    //   <div className="xl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[35px] mx-4 ">
    //     <h1 className="font-medium text-[2rem] text-[#1F1F1F] mb-1">Legal</h1>
    //     <p className="max-w-[808px] font-normal text-base text-[#696969] mb-[1.875rem]">
    //       The terms and conditions for using PayyMe depend on where you are.
    //       Select your location below to see the specific terms that apply to
    //       you.
    //     </p>
    //     <div className="bg-white px-[1.5rem] rounded-[22px] pb-[2.75rem] pt-[3.75rem]">
    //       <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
    //       <p className="font-normal text-base text-[#333232] mb-4">
    //         Beautya@apos;s 1st revitalizing serum that concentrates the double
    //         power of the Rose de Granville from the stem to the flower to
    //         revitalize the skin twice as fast (1) and visibly rejuvenate.
    //         <br /> Created after 20 years of research, the 10,000 (2)
    //         micro-pearls rich in revitalizing rose micro-nutrients are now
    //         completed by the power of the Rose sap. The next-generation, 92%
    //         natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
    //         is twice as concentrated,(4) combining the nourishing richness of{" "}
    //         {!showMore ? (
    //           <span>...</span>
    //         ) : (
    //           <span>
    //             an oil with the deep penetration of a serum. <br />
    //             <br /> From the first application of the serum, the skin appears
    //             plumped. In 3 weeks, 2x improvement in the look or feel of skin
    //             elasticity.(5) With regular use, skin looks and feels
    //             transformed.
    //             <br /> <br /> As if replenished from within, the skin seems
    //             denser and firmer, and wrinkles appear noticeably reduced. As if
    //             lifted, facial contours appear enhanced. <br /> <br />
    //             Reveal your extraordinary beauty with Beautya Prestige.
    //             dermatologist on the evolution of the product’s performance on
    //             the skin elasticity, comparison between the effect after 7 days
    //             and 28 days on 34 women.
    //           </span>
    //         )}
    //       </p>
    //       <button
    //         className="text-[#057310] font-medium text-base"
    //         onClick={() => setShowMore(!showMore)}
    //       >
    //         <p>{!showMore ? "Read More" : "Show Less"}</p>
    //       </button>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       backgroundImage: 'url("/asset/full-circ.png")',
    //       backgroundSize: "620px 620px",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "top -10px left 58px",
    //     }}
    //     className="pt-8 xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[35px] px-4"
    //   >
    //     <div className="bg-white px-[1.5rem] rounded-[22px] mb-[2.75rem] pt-[3.75rem] pb-8">
    //       <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
    //       <p className="font-normal text-base text-[#333232] mb-4">
    //         Beautya@aposs 1st revitalizing serum that concentrates the double
    //         power of the Rose de Granville from the stem to the flower to
    //         revitalize the skin twice as fast (1) and visibly rejuvenate.
    //         <br /> Created after 20 years of research, the 10,000 (2)
    //         micro-pearls rich in revitalizing rose micro-nutrients are now
    //         completed by the power of the Rose sap. The next-generation, 92%
    //         natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
    //         is twice as concentrated,(4) combining the nourishing richness of{" "}
    //         {!showMore ? (
    //           <span>...</span>
    //         ) : (
    //           <span>
    //             an oil with the deep penetration of a serum. <br />
    //             <br /> From the first application of the serum, the skin appears
    //             plumped. In 3 weeks, 2x improvement in the look or feel of skin
    //             elasticity.(5) With regular use, skin looks and feels
    //             transformed.
    //             <br /> <br /> As if replenished from within, the skin seems
    //             denser and firmer, and wrinkles appear noticeably reduced. As if
    //             lifted, facial contours appear enhanced. <br /> <br />
    //             Reveal your extraordinary beauty with Beautya Prestige.
    //             dermatologist on the evolution of the product’s performance on
    //             the skin elasticity, comparison between the effect after 7 days
    //             and 28 days on 34 women.
    //           </span>
    //         )}
    //       </p>
    //       <button
    //         className="text-[#057310] font-medium text-base"
    //         onClick={() => setShowMore(!showMore)}
    //       >
    //         <p>{!showMore ? "Read More" : "Show Less"}</p>
    //       </button>
    //     </div>
    //     <div className="bg-white px-[1.5rem] rounded-[22px]">
    //       <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
    //       <p className="font-normal text-base text-[#333232] mb-4">
    //         Beautya@aposs 1st revitalizing serum that concentrates the double
    //         power of the Rose de Granville from the stem to the flower to
    //         revitalize the skin twice as fast (1) and visibly rejuvenate.
    //         <br /> Created after 20 years of research, the 10,000 (2)
    //         micro-pearls rich in revitalizing rose micro-nutrients are now
    //         completed by the power of the Rose sap. The next-generation, 92%
    //         natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
    //         is twice as concentrated,(4) combining the nourishing richness of{" "}
    //         {!showMore ? (
    //           <span>...</span>
    //         ) : (
    //           <span>
    //             an oil with the deep penetration of a serum. <br />
    //             <br /> From the first application of the serum, the skin appears
    //             plumped. In 3 weeks, 2x improvement in the look or feel of skin
    //             elasticity.(5) With regular use, skin looks and feels
    //             transformed.
    //             <br /> <br /> As if replenished from within, the skin seems
    //             denser and firmer, and wrinkles appear noticeably reduced. As if
    //             lifted, facial contours appear enhanced. <br /> <br />
    //             Reveal your extraordinary beauty with Beautya Prestige.
    //             dermatologist on the evolution of the product’s performance on
    //             the skin elasticity, comparison between the effect after 7 days
    //             and 28 days on 34 women.
    //           </span>
    //         )}
    //       </p>
    //       <button
    //         className="text-[#057310] font-medium text-base"
    //         onClick={() => setShowMore(!showMore)}
    //       >
    //         <p>{!showMore ? "Read More" : "Show Less"}</p>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#FAF8FE] xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[35px] px-4  pt-[51px] pb-[123px]">
      <h4>User Agreement Valid as of April 1, 2025</h4>
      <br />
      <h6>
        Welcome to{" "}
        <spa className="font-medium">
          NOVASPHERE TECHNOLOGY SOLUTIONS LTD's{" "}
        </spa>{" "}
        SMS-based mobile financial service. We're pleased to offer you our
        SMS-based financial service platform that enables convenient money
        transfers and other financial transactions right from your mobile phone
        with no internet access requirement.
      </h6>
      <br />
      <h6>
        These Terms of Use ("Terms") create a binding agreement between you (the
        "User") and NOVASPHERE TECHNOLOGY SOLUTIONS LTD ("we," "us," or "our"),
        governing your access to and use of PayyMe, our SMS-based financial
        service in Nigeria
      </h6>
      <br />
      <h6>
        This User Agreement applies to your use of PayyMe, its features,
        services and any other technologies, and/or functionalities offered by
        the Company on our website, our SMS-based platform, or through any other
        means (the “PayyMe Services”) whether as visitors, registered users, or
        account holders. The PayyMe Services are provided to you subject to this
        Agreement as well as our Privacy Policy (“Privacy Policy”) which is
        incorporated in this Agreement by this reference
      </h6>
      <br />
      <h6>
        By dialling our SMS Short code or using any of our services, you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms, along with our Privacy Policy. If you do not agree with any
        part of these Terms, please refrain from using our services.
      </h6>
      <br />
      <h4> 1 . DEFINITIONS</h4>
      <br />
      <h6>
        Throughout these Terms, certain words and phrases have specific
        meanings. Understanding these definitions will help you better
        comprehend your rights and obligations when using our services:
      </h6>
      <br />
      <h6>
        <span className="font-medium">"PayyMe" </span> refers to our SMS-based
        financial technology infrastructure that enables the provision of
        financial services
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Account" </span> refers to your
        registered profile within our system that enables you to access and use
        our SMS-based financial service, including a payment account, electronic
        money account, or any other applicable definition of an account record
      </h6>
      <br />
      <h6>
        {" "}
        <span className="font-medium"> "BVN" </span> means Bank Verification
        Number, a unique identifier issued by the Central Bank of Nigeria that
        links all your bank accounts and serves as your banking industry
        identity.
      </h6>
      <br />
      <h6>
        <span className="font-medium"> "CBN" </span>refers to the Central Bank
        of Nigeria, the primary regulatory authority overseeing financial
        services in Nigeria.
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Charges" or "Fees" </span> refer to any
        amounts payable by you for using our services, as outlined in our fee
        schedule.
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Customer" or "User" </span> refers to any
        individual or entity that has registered to use our SMS- based financial
        services.
      </h6>
      <br />
      <h6>
        <span className="font-medium"> "KYC" </span> means Know Your Customer,
        the process of verifying the identity of our users in compliance with
        regulatory requirements.
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Mobile Money Wallet" </span>"Mobile Money
        Wallet" refers to the electronic account linked to your phone number
        that holds your funds within our system
      </h6>
      <br />
      <h6>
        <span className="font-medium">"NIN" </span>means National Identification
        Number, a unique identifier issued by the National Identity Management
        Commission of Nigeria.
      </h6>
      <br />
      <h6>
        <span className="font-medium">"PIN" </span> refers to your Personal
        Identification Number, a secret numeric code you create to authorize
        transactions and access your account
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Service" or "Services"</span> refer to
        any financial or related offerings provided through PayyMe, including
        but not limited to money transfers, bill payments, airtime purchases,
        account management, and other services as contained in Clause 3
      </h6>
      <br />
      <h6>
        <span className="font-medium"> "Transaction" </span> refers to any
        activity conducted through our platform that involves the movement of
        funds or account updates.
      </h6>
      <br />
      <h6>
        <span className="font-medium">"SMS" </span> means Short Message Service
        protocol that enables text-based communication between mobile phones and
        our service platform without requiring internet access.
      </h6>
      <br />
      <h6>
        <span className="font-medium">“SMS Short Code” </span> means a short
        numerical sequence used to send and receive text messages (SMS) between
        mobile users and our platform. This SMS Short code will be used for
        authentication, customer engagement, notifications, transactions, and
        any other purpose and functionality offered by the company through
        PayyMe without requiring internet access
      </h6>
      <br />
      <h6>
        <span className="font-medium">"Wallet-to-Wallet Transfer" </span> refers
        to the movement of funds from one user's mobile money wallet to another
        user's wallet within our system.
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Applicable Law” </span> means any and all
        applicable laws, legislation, bye-laws, decisions, notices, statutes,
        orders, rules (including any rules or decisions of court), regulations,
        directives, edicts, schemes, warrants, local government rules, statutory
        instruments or other delegated or subordinate legislation and any
        directions, codes of practice issued pursuant to any legislation,
        voluntary codes, other instruments made or to be made under any statute
        and codes of conduct and mandatory guidelines (including in all cases
        those that relate to audit, accounting, or financial reporting) and
        which have legal effect, whether local, national, international or
        otherwise existing from time to time, together with any similar
        instrument having legal effect in the relevant circumstances;
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Authentication” </span>means the
        performance of operations which enable us to verify your identity;
      </h6>
      <br />
      <h6>
        {" "}
        <span className="font-medium"> “Authentication Instrument” </span>means
        an item, feature, information or other instrument that enables you to
        Authenticate yourself to us, and / or to Authorize certain operations
        for us (for example personalized security details for the App, a
        password, a one-time authentication code, a PIN, a mobile phone, a
        mobile phone number, a fingerprint or personalized security questions);
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Authorise / Authorisation” </span>means
        the performance of operations by which you give us a confirmation of
        your consent to performing certain operations, for example to make a
        payment;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Authorized Merchant” </span> means a
        merchant expressly authorized by PayyMe to receive payments in relation
        to its merchant activities via the PayyMe platform;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Authorized Merchant Payment” </span>{" "}
        means a Payment Transaction between you and an Authorized Merchant made
        via PayyMe;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Business Days” </span> means a day other
        than a Saturday, Sunday or a public holiday in Nigeria when financial
        institutions in Nigeria are open for business;
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Card” </span> means a bank, payment, or
        credit card which is denominated in a fiat currency and is not linked to
        any cryptocurrency;
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Covered Third Parties”</span> means any
        or all third party operating system providers such as Apple Inc.
        (“Apple”), Google LLC, and Microsoft Corporation, (and each of their
        respective related entities), your mobile phone or other mobile device
        manufacturer, your wireless carrier or other network provider, any other
        product or service provider related to your mobile device service.
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “E-Money” or “Electronic Money” </span>{" "}
        means monetary value, which is stored electronically for you
      </h6>
      <br />
      <h6>
        <span className="font-medium">“E-Wallet” </span> means a
        non-interest-bearing electronic account maintained for the sole purpose
        of enabling you to a make and receive transfers of Electronic Value
        issued by us and denominated in Nigerian Naira, and / or any other
        currency wallet PayyMe may offer;
      </h6>
      <br />{" "}
      <h6>
        <span className="font-medium"> “Fee Schedule” </span> means the document
        comprising all the fees payable by a user for the use and management of
        an E-Wallet available via PayyMe;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Nominated Account” </span> refers to a
        payment account opened in your name with a bank or payment account
        provider established in Nigeria or in a third-party country which
        imposes equivalent anti money laundering and terrorist financing laws;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Individual” </span> means a natural
        person;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Legal Entity” </span> means any entity
        with a legal personality that is not an Individual;
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Mobile Money Account” </span> means an
        account used to store and transfer funds held with a mobile network
        operator;
      </h6>
      <br />
      <h6>
        <span className="font-medium"> “Payment Order” </span> means any
        instruction by you to us requesting the execution of a Payment
        Transaction;
      </h6>
      <br />
      <h6>
        <span className="font-medium">“Payment Transaction” </span> means an act
        initiated by the payer or payee of placing, transferring or withdrawing
        funds, irrespective of any underlying obligations between the payer and
        the payee;
      </h6>
      <br />
      <h6>
        {" "}
        <span className="font-medium">“Website” </span> means www.payymenow.com
        as updated from time to time;
      </h6>
      <br />
      <h6>
        {" "}
        <span className="font-medium">“we”, “us”, or “our” </span> means
        Novasphere Technology Solutions Ltd., and our subsidiaries
      </h6>
    </div>
  );
}

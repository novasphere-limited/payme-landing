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
      <br />
      <h4>
        {" "}
        <spa className="font-medium"> 2 . THIRD-PARTY PROVIDER </spa>
      </h4>
      <br />
      <h6>
        By using certain PayyMe Services, you expressly acknowledge and
        authorize the company to share information with our affiliates. These
        affiliates include: (1) ERCAS Integrated Solutions Limited for seamless
        and secure payment solutions, enabling you to perform transactions
        including but not limited to online payments, mobile payments, and other
        electronic transaction processing services. ERCAS is a Payment Solutions
        Service Provider (“PSSP”), licensed by the Central Bank of Nigeria to
        provide financial upolutions and mobile payment services to a wide range
        of customers. They are also an aggregator and concentrator to the
        Nigeria Inter Bank Settlement System (NIBSS) which operates a
        shared-service infrastructure for facilitating payments finalities,
        streamlining Inter-bank payments and settlement mechanisms, to drive and
        promote Electronic Payments across the Nigerian Financial Industry
        <br />
        <br />
        Your use of these services is subject to the respective affiliates’
        terms of service and privacy policies.
        <br />
        <br />
        Pursuant to these Terms of Use you are authorizing and directing PayyMe
        to create and administer these accounts on your behalf, to consent and
        agree to necessary terms and policies (where applicable) on your behalf,
        and to carry out the transactional and investment instructions
        (transfer, buy, sell, etc.) that you may provide to us from time to
        time, with respect to these third-party accounts. You agree that PayyMe
        may access and retrieve your information from these accounts in order to
        display that information to you and facilitate your use of those
        accounts through the PayyMe Services. You also acknowledge that PayyMe
        will close all such affiliate and third-party accounts if and when you
        terminate your Account with PayyMe, and you hereby direct and authorize
        PayyMe to do so.
        <br />
        <br />
        To the extent permitted under applicable law, you understand and agree
        that PayyMe, in its capacity to act on your behalf with our third-party
        business partners, will not be liable to you for any losses, expenses,
        damages, liabilities, charges and claims of any kind or nature
        whatsoever (including without limitation any legal expenses and costs
        and expenses relating to investigating or defending any demands, charges
        and claims) (collectively, “Losses”) incurred by you with respect to any
        of the third party accounts, except to the extent that such Losses are
        actual losses proven with reasonable certainty and are the direct result
        of an act or omission taken or omitted by PayyMe during the term of this
        Agreement which constitutes wilful misfeasance, bad faith, or gross
        negligence under this Agreement. Without limitation, PayyMe shall not be
        liable for Losses resulting from or in any way arising out of
        <br />
        <br />
        ● any action of yours,
        <br />
        <br />
        ● force majeure or other events beyond the control of the company,
        including without limitation any failure, default or delay in
        performance resulting from computer or other electronic or mechanical
        equipment failure, unauthorized access, strikes, pandemics, failure of
        common carrier or utility systems, severe weather or breakdown in
        communications not reasonably within the control of the company or other
        causes commonly known as “acts of god”, or
        <br />
        <br />● general market conditions unrelated to any violation of this
        Agreement by the company. You may, at any time and at no cost to you,
        obtain a copy of this Agreement applicable to you by accessing the
        Website or other PayyMe services and downloading the version available.
        Alternatively, you may contact us at legal@novasphereltd.com and we will
        provide a copy to you via e-mail or post.
      </h6>
      <br />
      <br />
      <h6>
        {" "}
        <span className="font-medium">3. ABOUT OUR SERVICES </span>
      </h6>
      <br />
      <h4>
        PayyMe, our SMS-based financial service platform, allows you to perform
        various financial transactions directly from your mobile device without
        requiring internet access. Through simple SMS short codes, you can
        transfer money, check balances, pay bills, purchase airtime, and access
        other financial services we may introduce over time. We've designed our
        service to be accessible to all Nigerians with a mobile phone,
        regardless of whether you have a smartphone or internet connectivity.
        Our mission is to make financial services more inclusive and to bring
        the convenience of digital payments to everyone, everywhere in Nigeria.
        he services that will be provided by us under this Agreement shall
        include:
        <br />
        <br />
        ● The opening and management of an E-Wallet;
        <br />
        <br />
        ● Issuing E-Money to your E-Wallet upon receipt of cleared funds paid to
        us by an Accepted Payment Method;
        <br />
        <br />
        ● Debiting E-Money from your E-Wallet following the execution of a
        Payment Transaction or the payment of any fees pursuant to this
        Agreement;
        <br />
        <br />
        ● Crediting E-Money to your E-Wallet following the execution of a
        Payment Transaction (for example following the execution of a Payment
        Transaction where you are receiving the relevant payment); and
        <br />
        <br />● Redeeming E-Money following a request by you to redeem E-Money
        held in your E-Wallet and paying the relevant amount to your Nominated
        Account; Your E-Wallet shall not be subject to any overdraft, advance or
        credit
      </h4>
      <br />
      <br />
      <h4>
        <span className="font-medium">4. ELIGIBILITY TO USE OUR SERVICES</span>{" "}
      </h4>
      <br />
      <h6>
        To use our services, you must be at least 18 years old and legally
        capable of entering into binding contracts under Nigerian law. You must
        provide accurate, current, and complete information during the
        registration process and maintain a valid Nigerian phone number linked
        to your account.
        <br />
        <br />
        In accordance with Central Bank of Nigeria regulations and anti-money
        laundering laws, we require proper identification to verify your
        identity. This typically includes your Bank Verification Number (BVN),
        National Identification Number (NIN), or other government-issued
        identification. Depending on transaction limits and account tiers, we
        may request additional documentation to comply with Know Your Customer
        (KYC) requirements
      </h6>
      <br />
      <br />
      <h4>
        {" "}
        <span className="font-medium">
          5. ACCOUNT REGISTRATION AND SECURITY{" "}
        </span>
      </h4>
      <br />
      <h6>
        Creating an account with us is straightforward and can be completed
        entirely through SMS commands. During registration, you'll select a
        secure PIN that will protect your account and authorize transactions.
        This PIN is your digital signature, and you are responsible for
        maintaining its confidentiality.
        <br />
        <br />
        We take security seriously but need your cooperation to keep your
        account safe. Never share your PIN with anyone, including our staff
        members, who will never ask for your complete PIN. Be vigilant about
        responding to SMS prompts only after confirming you've dialled our
        official SMS short code. If you suspect unauthorized access to your
        account or if your phone is lost or stolen, contact our customer service
        immediately so we can help protect your funds.
        <br />
        <br />
        Remember that you're responsible for all activities that occur under
        your account. We've implemented multiple security layers to protect you,
        but your diligence in safeguarding your PIN and promptly reporting
        suspicious activities is essential to maintaining account security.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 6. OPENING AN ACCOUNT</span>
      </h4>
      <br />
      <h6>
        We offer the following different types of Account which operate as
        follows:
        <br />
        <br />
        We take security seriously but need your cooperation to keep your
        account safe. Never share your PIN with anyone, including our staff
        members, who will never ask for your complete PIN. Be vigilant about
        responding to SMS prompts only after confirming you've dialled our
        official SMS short code. If you suspect unauthorized access to your
        account or if your phone is lost or stolen, contact our customer service
        immediately so we can help protect your funds.
        <br />
        <br />
        Remember that you're responsible for all activities that occur under
        your account. We've implemented multiple security layers to protect you,
        but your diligence in safeguarding your PIN and promptly reporting
        suspicious activities is essential to maintaining account security.
        <br />
        <br />
        ● Personal Account – for use in person-to-person transfers with friends
        and family, and other people whom you know. Personal Accounts may also
        be used to make Authorized Merchant Payments as described in this
        Agreement where such Authorized Merchant Payments are available. Some
        features of Personal Accounts may be limited based on how you wish to
        use the Services, how much you need to send or spend, and what we know
        about you. We may also require that you provide additional information
        in order to complete a Payment Transaction. Personal Accounts may not be
        used to receive business, commercial or merchant transactions.
        <br />
        <br />
        ● Business Account – Business Accounts must be applied for and
        explicitly authorized by us once they are available. By opening a
        Business Account and accepting the terms as outlined in this Agreement,
        including, but not limited to, the Rules and Restrictions for Business
        Accounts set forth below you confirm that neither you nor your business
        is establishing a Business Account primarily for personal, family, or
        household purposes. We may reverse or place a hold on your transactions
        or place a reserve on your funds if you are in breach of this Agreement,
        including, but not limited to, if you are using a Personal Account for
        business purposes or vice versa.
        <br />
        <br />
        In accordance with Applicable Law, we are required to apply due
        diligence measures aimed at the prevention of money laundering and
        terrorist financing before you can open an Account. Among other
        measures, we are required to identify and verify your identity and
        collect information about you, your use of the services provided to you
        and any suspicions of money laundering or terrorist financing which we
        may develop with regard to you or use of the services provided to you.
        You are required to provide us with all information and documents which
        we demand from you in order to apply the due diligence measures referred
        to above or to perform any other obligations under Applicable Law and/or
        this Agreement.
        <br />
        <br />
        At a minimum, you must provide the following as part of your application
        to us to provide Services:{" "}
        <span className="font-medium">If you are an Individual: </span>
        <br />
        <br />
        ● your full name, address, date of birth, and nationality;
        <br />
        <br />
        ● your email address;
        <br />
        <br />
        ● your mobile phone number and, in certain circumstances, your mobile
        phone device’s identification number;
        <br />
        <br />
        ● as a proof of your identity, a copy of any of the following documents:
        <br />
        o a valid international passport;
        <br />
        o a valid Nigerian national identification card; or
        <br />
        o Bank verification number (BVN)
        <br />
        <br />
        ● as a proof of your address, a copy of any of the following documents:
        <br />
        o a valid Nigerian driving license;
        <br />
        o lease contract;
        <br />
        o recent bank statement;
        <br />
        o recent government issued tax statement; or
        <br />
        o recent utility bill.
        <br />
        <br />
        <span className="font-medium">If you are a Legal Entity:</span>
        <br />
        ● your full registered name,
        <br />
        <br />
        ● registered address,
        <br />
        <br />
        ● business operating address (if different to registered address),
        <br />
        <br />
        ● date of incorporation,
        <br />
        <br />
        ● business license / registration number,
        <br />
        <br />
        ● jurisdiction of establishment (if relevant and/or, in each case, any
        such analogous information),
        <br />
        <br />
        ● bank account details,
        <br />
        <br />
        ● email address,
        <br />
        <br />
        ● website address,
        <br />
        <br />
        ● telephone or mobile contact number, and
        <br />
        <br />
        ● tax identification number (TIN);
        <br />
        <br />
        ● a description of the type of business carried out by you and expected
        transaction volumes;
        <br />
        <br />
        ● the contact information for your primary representative;
        <br />
        o the full name(s),
        <br />
        o address(es),
        <br />
        o date(s) and place(s) of birth,
        <br />
        o nationality(ies),
        <br />
        o the identity documents referred to above for each of your directors
        (or relevant equivalents),
        <br />
        o any shareholders (or relevant equivalents) holding 25% or more of the
        share capital (or equivalent) in the Legal Entity, and/or any ultimate
        beneficial owner(s);
        <br />
        <br />
        ● as a proof of your address, a copy of any of the following documents:
        <br />
        o extract from your jurisdiction of the establishment of the
        establishment's relevant commercial register;
        <br />
        o lease contract;
        <br />
        o recent bank statement;
        <br />
        o recent government issued tax statement; or
        <br />
        o recent utility bill.
        <br />
        <br />
        We may request, in our sole discretion:
        <br />
        <br />
        ● you to provide one or more answers to security questions that will be
        used as part of any Authorisation under this Agreement; and
        <br />
        <br />
        ● Any additional information or documents we deem necessary and
        appropriate in line with our assessment of risks relevant to you as a
        client, both in course of review of your application and during the
        whole period of validity of this Agreement. You undertake that all
        information and documents which you present to us are true, accurate and
        up to date. If, at any point during the term of the Agreement, any of
        the information and documents presented to us should change or you
        identify that they were false, inaccurate and / or incorrect in any
        form, then you shall promptly present us with the respective updated
        information and documents. You can update the information and documents
        presented to us by email at legal@novasphereltd.com and we may ask you
        at any time to confirm the accuracy of your information and/or provide
        additional supporting documents.
        <br />
        <br />
        We may also contact third parties to collect and/or verify the
        information and documents presented by you under this Agreement. We may
        limit your E-Wallet and your access to funds held in your E-Wallet until
        such collection of information and / or verification is completed. If
        your application to open an Account is successful, we will open an
        E-Wallet in your name and send you a confirmation through the App. In
        order to use your E-Wallet, you must also provide us with details of a
        payment account opened in your name with a bank or payment account
        provider established in Nigeria or in a third-party country which
        imposes equivalent anti money laundering and terrorist financing laws (a
        “Nominated Account”). This is in addition to any other information
        requested by us. If, after being accepted by us, you wish to change your
        Nominated Account, you must notify us by submitting the new Nominated
        Account details via PayyMe or by email at Support@payymenow.com. We will
        review the new Nominated Account details and will confirm if the change
        is accepted. The change of Nominated Account will only be effective
        following the express confirmation from us. Once we have activated the
        full functionality of your Account, you may login to access your E
        Wallet via PayyMe services.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 7. HOW TO USE OUR SERVICES</span>
      </h4>
      <br />
      <br />
      <h6>
        Our service operates through SMS short codes that you can dial from your
        mobile phone. To access our main menu, dial [our SMS short code] from
        your registered phone number. You'll then navigate through menu options
        using your keypad to select the service you need.
        <br />
        <br />
        For money transfers, you'll need the recipient's phone number or account
        details. Our system will guide you through the necessary steps to
        complete your transaction securely. After confirming transaction
        details, you'll authorize the transaction using your PIN.
        <br />
        <br />
        Each transaction is confirmed with a unique transaction reference, which
        you should retain until you're certain the transaction has been
        completed successfully. This reference will help us assist you quickly
        should you need support with any transaction.
        <br />
        <br />
        We've designed our service to be available 24/7, but please understand
        that system maintenance, network issues, or regulatory requirements may
        occasionally affect service availability. We strive to provide advance
        notice of any planned downtime and to restore service promptly during
        unexpected interruptions.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 8. KEEPING YOUR ACCOUNT SAFE</span>
      </h4>
      <br />
      <br />
      <h6>
        You must take all reasonable precautions to keep your E-Wallet, any
        security information relevant to your E-Wallet and your Account linked
        to your E-Wallet safe and to prevent fraudulent use of them. You must
        use reasonable endeavours to prevent any unauthorized access to, or use
        of, your E-Wallet and should notify us immediately by email at
        Support@payymenow.com, of any such unauthorized access or use, or any
        suspicion of access or use.
        <br />
        <br />
        Your login for your Account should not be disclosed to anybody or kept
        in written form to prevent fraud and misuse of its E-Wallet. We also
        recommend that obvious passwords, such as your name or the phase
        “password”, are not used.
        <br />
        <br />
        You should also:
        <br />
        <br />
        ● take care to ensure that no one hears or sees your login details when
        you use it;
        <br />
        <br />
        ● not disclose your full login details or password to anyone, including
        the police and us;
        <br />
        <br />
        ● never write your password down, nor keep a record of it;
        <br />
        <br />
        ● comply with all reasonable instructions we issue regarding keeping
        your login details and password;
        <br />
        <br />
        ● change your login details and/or password immediately and telling us
        as soon as possible if you know, or even suspect, that someone else
        knows any of those details, or if we ask you to;
        <br />
        <br />
        ● Keep any device you use to access PayyMe secure and use up to date
        virus checking software and personal firewall software.
        <br />
        <br />
        ● never access PayyMe from any shared device (or any public internet
        access device or access point) or any device connected to a local area
        network;
        <br />
        <br />
        ● make sure you always log out of PayyMe, and never leaving your device
        unattended when you are logged in; and
        <br />
        <br />● never share any Account details or payment details on social
        media or any website. If your Account login details are lost or stolen,
        or if you suspect that someone else knows your login details or your
        verified mobile phone and/or e-mail are compromised, you must contact us
        by email at Support@payymenow.com without undue delay
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 9. FUNDING YOUR E-WALLET</span>
      </h4>
      <br />
      <br />
      <h6>
        Once your Account has been opened, E-Money can be issued to you and
        credited to your E- Wallet in exchange for a payment made by an Accepted
        Payment Method.
        <br />
        <br />
        When you wish to purchase E-Money, you must log in to PayyMe and enter
        the details of the Accepted Payment Method you wish to use to purchase
        the E-Money via a payment page dedicated for this purpose.
        <br />
        <br />
        Transfers of funds for the purchase of E-Money by Card are executed by
        the institution having issued the Card. Any dispute surrounding such a
        transfer must be notified to the Card issuer. We are not authorized to
        cancel such a purchase once you have made a payment request (although
        you may opt to redeem any E-Money purchased, subject to any applicable
        Fees (as set out in the Fee Schedule)).
        <br />
        <br />
        Acceptance by us of an order for payment by an Accepted Payment Method
        does not guarantee that you will receive the corresponding E-Money in
        your E-Wallet. The issuing of E- Money to your E-Wallet is conditional
        upon actual receipt by us of the cleared funds transferred minus any
        applicable Fees (as set out in the Fee Schedule).
        <br />
        <br />
        We will issue E-Money to your E-Wallet once we have received cleared
        funds. For some deposit methods such as Card, we will credit the E-Money
        funds to your E-Wallet as soon as possible subject to our right of
        reversal. This means if the actual amount you intended to upload does
        not reach us within a reasonable time, we may deduct such amount from
        your E-Wallet. If you do not have enough money in your E-Wallet for this
        purpose, we can demand repayment from you using other methods. You
        accept and agree that any currency other than Nigerian Naira (as your
        E-Wallet is denominated) loaded/reloaded into your E-Wallet will be
        converted into Nigerian Naira at the rate of exchange applied by our
        internal payment providers or bank plus any applicable fees.
        <br />
        <br />
        You accept that such conversion shall be entirely at your own cost and
        risk. For every currency conversion, we will apply our then current
        exchange rates which are updated regularly. The applied exchange rate
        will be provided to you before the confirmation of the Payment
        Transaction.
        <br />
        <br />
        Any E-Money issued to your E-Wallet in exchange for a payment by way of
        bank transfer must be sent from your Nominated Account.
        <br />
        <br />
        We may, in our sole discretion, place a reserve on funds held in
        E-Wallets with a high volume of Payment Transactions when we believe
        there may be a high level of risk associated with the E-Wallet. If an
        E-Wallet is subject to a reserve, we will provide notice specifying the
        terms of this reserve. These terms may require that a certain percentage
        of the amounts received into an E-Wallet is held for a certain period of
        time, or that a certain amount of E-Money is held in reserve, or
        anything else that we determine is necessary to protect against the risk
        associated with the E-Wallet. We may, subject to the terms of this
        Agreement, change the terms of this reserve at any time by giving notice
        of the new terms of reserve.
        <br />
        <br />
        If the balance of your E-Wallet is negative for any reason (or if there
        are any other past sums due to us), we may set off the negative balance
        by deducting amounts you owe us from funds you receive into your
        E-Wallet, or funds you attempt to withdraw or send from your E-Wallet.
        You agree to allow us to recover any amounts due to us by debiting your
        E-Wallet. If there are insufficient funds in your E-Wallet to cover the
        amount due, you agree to reimburse us through
        <br />
        <br />
        other means including:
        <br />
        <br />
        ● recovering the amount due from your Nominated Account;
        <br />
        <br />
        ● recovering the fees from your alternate funding sources; and / or
        <br />
        <br /> ● taking other legal actions to collect the amount due, to the
        extent allowed by Applicable Law. To secure your performance of this
        Agreement, you hereby grant to us a lien on and security interest in
        your E-Wallet and agree to execute any further documentation to perfect
        these rights of ours. We safeguard all funds that have been received in
        exchange for E-Money that has been issued in accordance with its
        obligations under Applicable Law.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 10. EXECUTING PAYMENT TRANSACTIONS</span>
      </h4>
      <br />
      <br />
      <h6>
        You can use your E-Money balance to execute Payment Transactions,
        whether by way of a transfer to your own account, or to a third party,
        by redeeming part of your E-Money balance and / or redemption of your
        balance back to your Nominated Account.
        <br />
        <br />
        You must ensure that you have sufficient available balance of E-Money in
        your E-Wallet to cover the full value of your Payment Transaction and
        the relevant fees (as set out in the Fee Schedule) when you give a
        Payment Order to us.
        <br />
        <br />
        You may choose to execute a Payment Transaction by designating a Mobile
        Money Account linked to your E-Wallet as your Nominated Account. In such
        circumstances, if your E-Wallet has insufficient available balance, we
        shall credit your E-Wallet using the selected Mobile Money Account in
        order to cover the full value of your Payment Transaction and the
        relevant fees (as set out in the Fee Schedule).
        <br />
        <br />
        If there is insufficient E-Money available in your E-Wallet to cover the
        Payment Transaction, we will block the Payment Transaction and you will
        receive a notification confirming that you have “insufficient balance”.
        <br />
        <br />
        Where any payment out of your E-Wallet is made in a currency other than
        Nigerian Naira, we are entitled to debit your E-Wallet balance in
        Nigerian Naira in the amount equivalent to the Payment Transaction
        amount, converted into Nigerian Naira using the currency exchange rate
        you agreed with us before the relevant Payment Transaction is executed.
        <br />
        <br />
        All Payment Transactions to third parties, withdrawals, and redemptions
        set out in this clause are subject to the limits set out in this
        Agreement.
        <br />
        <br />
        In order to submit a Payment Order, you must provide at least the
        following information through PayyMe:
        <br />
        <br />
        ● name of the recipient;
        <br />
        <br />
        ● address of the recipient;
        <br />
        <br />
        ● recipient’s bank / payment institution;
        <br />
        <br />
        ● recipient’s bank account number;
        <br />
        <br />
        ● name of any intermediary party(ies);
        <br />
        <br />
        ● purpose of the payment;
        <br />
        <br />
        ● any other information requested by us;
        <br />
        <br />
        and follow the on-screen instructions to confirm and submit the Payment
        Order.
        <br />
        <br />
        Where we permit you to make Payment Transactions to other holders of
        E-Wallets with us, to initiate a Payment Order on the App to such an
        E-Wallet you must provide the recipient’s account number, username, and
        the purpose of the payment and follow the on-screen instructions to
        confirm and submit the Payment Order.
        <br />
        <br />
        In order to Authorize a Payment Transaction, you must insert a one-time
        authentication code on PayyMe, which will be delivered to your verified
        mobile phone number or e-mail address, or any other Authentication
        Instrument as required by us from time to time. You are obliged to
        verify the payment amount, the payment recipient and other important
        information before providing Authorisation to a Payment Transaction.
        <br />
        <br />
        Prior to executing a Payment Order, if you are an Individual or a Micro
        Enterprise, we shall present you with at least the following information
        via PayyMe:
        <br />
        <br />
        ● the name and account number of the recipient of the payment;
        <br />
        <br />
        ● the payment amount and currency;
        <br />
        <br />
        ● the date on which your account is debited; and
        <br />
        <br />
        ● the amount payable for executing the payment order.
        <br />
        <br />
        After the execution of a Payment Order, if you are an Individual or a
        Micro Enterprise, in addition to the four items listed above, we shall
        also present you with the following information via PayyMe:
        <br />
        <br />
        ● the payment order number; and
        <br />
        <br />
        ● the date on which the payee’s account is expected to be credited (upon
        receiving a payment).
        <br />
        <br />
        If you are a Large Enterprise, we shall present such information at such
        intervals as we see fit and / or as is agreed between you and us from
        time to time.
        <br />
        <br />
        When a Payment Transaction is executed, we shall deduct the value of the
        Payment Transactions from the E-Money balance in the E-Wallet as well as
        any applicable fees as soon as they become payable as per the Fee
        Schedule.
        <br />
        <br />
        Where a Payment Transaction from the E-Wallet is reversed, the reversed
        funds will be received by us and we shall deem this as a request by the
        intended recipient to purchase E-Money. As a result, your E-Wallet will
        be issued with E-Money equivalent to the sum refunded.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 11. REDEMPTIONS</span>
      </h4>
      <br />
      <br />
      <h6>
        Any redemptions requested by you from your E-Wallet will be made to a
        Nominated Account only. E-Money held in your E-Wallet may be redeemed at
        any time, subject to any procedural restrictions and applicable Fees (as
        set out in the Fee Schedule), by initiating a Payment Transaction to
        your Nominated Account via the App.
        <br />
        <br />
        We reserve the right to request any additional documents concerning you
        or a specific Redemption or Payment Transaction
      </h6>
      <h4>
        <span className="font-medium"> 12. EXECUTION TIMEFRAMES</span>
      </h4>
      <br />
      <br />
      <h6>
        Where a Payment Order is not refused or delayed, a Payment Order is
        binding as of the moment we receive the Payment Order. The Parties deem
        that we receive a Payment Order in line with the following:
        <br />
        <br />
        ● Where you agree that execution of the Payment Transaction is to take
        place;
        <br />
        o On a specific day;
        <br />
        o On the last day of a certain period; or
        <br />
        o On the day on which you have put funds at our disposal, the time of
        receipt is deemed to be the day so agreed, unless it is not a Business
        Day in which case it will be deemed to be received on the next
        applicable Business Day.
        <br />
        <br />
        ● in all other Payment Transactions:
        <br />
        o if a Payment Order is submitted before 15:00 on a Business Day, it
        will be deemed to be received on that Business Day;
        <br />
        o if a Payment Order is submitted after 15:00 on a Business Day, it will
        be deemed to be received on the next applicable Business Day; and
        <br />
        o if a Payment Order is submitted on a day that is not a Business Day,
        it will be deemed to be received on the next applicable Business Day.
        <br />
        <br />
        If you have submitted a Payment Order which is deemed to be received on
        the same Business Day, then it is binding on you and you cannot withdraw
        the Payment Order.
        <br />
        <br />
        If you are an Individual or Micro Enterprise and have submitted a
        Payment Order which is deemed to be received on a later Business Day,
        then you can, until the Business Day before the Business Day on which
        the Payment Order is deemed to be received, withdraw the Payment Order
        via the App. After that point it will become binding on both Parties.
        <br />
        <br />
        If you are a Large Enterprise, once you have submitted a Payment Order,
        you cannot withdraw it without our explicit express consent.
        <br />
        <br />
        Payment Transactions from your E-Wallet will be executed in accordance
        with the following timescales:
        <br />
        <br />
        ● Where the recipient’s account or your Nominated Account is outside
        Nigeria - the Payment Transaction will be credited to the recipient’s
        payment service provider's account or your Nominated Account by the end
        of the Business Day following the time of receipt of the Payment Order.
        <br />
        <br />● Any other circumstances - the Payment Transaction will be
        credited to the recipient’s payment service provider's account or your
        Nominated Account by the end of the fourth Business Day following the
        time of receipt of the Payment Order.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium">
          {" "}
          13. REFUSING/DELAYING PAYMENT TRANSACTIONS
        </span>
      </h4>
      <br />
      <br />
      <h6>
        We review Account and Payment Transaction activity at various times,
        including when you initiate a transfer of funds out of your E-Wallet,
        for amongst other things, suspicious or illegal activity. If and where
        appropriate we have the right to refuse any Payment Order and / or delay
        and investigate the execution of the Payment Transaction where:
        <br />
        <br />
        ● you have not provided the information required to execute the Payment
        Order and / or any additional information we have requested about the
        Payment Transaction;
        <br />
        <br />
        ● you fail to Authorize the Payment Transaction in accordance with any
        request to do so;
        <br />
        <br />
        ● if Applicable Law prohibits the Payment Transaction from being
        executed and / or we are required to carry out further financial crime
        checks;
        <br />
        <br />
        ● if we believe or suspect that a Payment Transaction may be fraudulent
        or relate to any other criminal activity;
        <br />
        <br />
        ● you have breached the Agreement in any manner, or the carrying out of
        the Payment Transaction would result in such a breach;
        <br />
        <br />
        ● there is an insufficient E-Money balance for the full value of the
        Payment Transaction and any applicable fees;
        <br />
        <br />
        ● executing the Payment Transaction would cause a breach of a payment
        limit set under this agreement;
        <br />
        <br />
        ● if a bankruptcy order or any analogous proceedings are made against
        you;
        <br />
        <br />
        ● if a third party prevents us from making the payment (for example, one
        of the payment systems we are required to use for the Payment
        Transaction);
        <br />
        <br />
        ● the Payment Transaction can only be executed via a Payment System that
        we are not part of; and / or
        <br />
        <br />
        ● The services provided to you have been suspended (in any way). In
        addition to the actions set out above, we reserve the right to also take
        any of the following
        <br />
        <br />
        actions following a review:
        <br />
        <br />
        ● hold funds subject to a Payment Transaction;
        <br />
        <br />
        ● apply funds to a negative E-Wallet balance or use funds to offset a
        loss incurred by us;
        <br />
        <br />
        ● suspend or terminate your Account;
        <br />
        <br />
        ● seize funds to comply with a court order, warrant, and / or other
        legal process; and / or
        <br />
        <br />
        ● reverse a Payment Transaction (i.e. return funds to the payer’s
        E-Wallet).
        <br />
        <br />
        If a Payment Order is subject to an investigation, we may place a hold
        on the payment and, subject to the Applicable Laws, provide notice to
        the recipient. Following our review, we may either approve or cancel the
        Payment Order. If we approve a Payment Order, we shall provide notice to
        the recipient. If the Payment Order has been cancelled, we may, subject
        to the Applicable Laws, return the E-Money to your E-Wallet. Where an
        investigation is ongoing, we reserve the right to freeze your Account.
        <br />
        <br />
        We also reserve the right to freeze and block your Account if we deem
        any funds to have been acquired illegitimately or where you are unable
        to provide details of the original source of the funds from your
        Nominated Account to your E-Wallet.
        <br />
        <br />
        If a Payment Order is refused / Payment Transaction delayed, provided it
        is permitted by Applicable Law, you will be informed of the action taken
        and its reasons in advance or, if that is not possible, immediately
        after.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 14. PAYMENT LIMIT</span>
      </h4>
      <br />
      <br />
      <h6>
        From time to time, we may set payment limits on the value of Payment
        Transactions you may carry out:
        <br />
        <br />
        ● in respect of a single Payment Transaction; and / or
        <br />
        <br />
        ● in respect of cumulative Payment Transactions over a specified period
        of time.
        <br />
        <br />
        Applicable payment limits are available on the Website. We shall
        increase or decrease any payment limits at our sole discretion and shall
        notify you in advance of any changes made.
        <br />
        <br />
        If you wish to increase or decrease payment limit, then you should
        contact us at Support@payymenow.com
        <br />
        <br />
        We shall increase any payment limits only at our sole discretion and
        shall not be obliged to increase any payment limit. We shall have the
        right to ask you for information and documents to substantiate and
        certify the need for increasing a payment limit.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 15. UNAUTHORIZED PAYMENTS</span>
      </h4>
      <br />
      <br />
      <h6>
        <span className="underline font-medium">User Responsibility:</span> You
        are solely responsible for safeguarding your Authentication Instrument
        and ensuring its security at all times. Any Payment Transaction
        initiated using your Authentication Instrument shall be deemed to have
        been authorised by you, and you will bear full liability for any
        resulting loss or damages
        <br />
        <br />
        <span className="underline font-medium">
          Liability for Unauthorised Transactions:
        </span>{" "}
        You acknowledge and agree that the Company shall not be liable for any
        loss, damage, or financial consequence resulting from an unauthorised
        Payment Transaction, including but not limited to cases where:
        <br />
        <br />
        ● Your Authentication Instrument has been lost, stolen, misappropriated,
        or otherwise compromised;
        <br />
        <br />
        ● You have failed to implement adequate security measures to prevent
        unauthorised access;
        <br />
        <br />
        ● You have not notified the Company without undue delay upon becoming
        aware of the loss, theft, or misappropriation of your Authentication
        Instrument;
        <br />
        <br />
        ● The unauthorised Payment Transaction was processed using valid
        authentication credentials, whether or not obtained fraudulently;
        <br />
        <br />
        ● You have acted fraudulently or with negligence in handling your
        Authentication Instrument;
        <br />
        <br />
        ● The unauthorised Payment Transaction arises from third-party fraud,
        hacking, phishing, or other malicious activity outside the Company’s
        control.
        <br />
        <br />
        <span className="underline font-medium">
          No Obligation to Refund:
        </span>{" "}
        The Company shall have no obligation to refund, compensate, or indemnify
        you for any unauthorised Payment Transactions. You expressly waive any
        claim against the Company in respect of such transactions, regardless of
        the cause.
        <br />
        <br />
        <span className="font-medium">User’s Burden of Proof:</span> In the
        event that you deny authorising a Payment Transaction, it shall be your
        sole responsibility to provide conclusive evidence that:
        <br />
        <br />
        ● The transaction was not initiated or authorised by you; and
        <br />
        <br />
        ● The transaction was the direct result of a technical failure or
        service deficiency solely attributable to the Company.
        <br />
        <br />
        <span className="font-medium underline">
          Notification and Risk Mitigation:
        </span>{" "}
        You are required to notify the Company immediately upon discovering any
        unauthorised use of your Authentication Instrument. Failure to do so may
        result in continued fraudulent transactions, for which you shall bear
        full liability.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium">
          {" "}
          16. UNEXECUTED AND INCORRECTLY EXECUTED PAYMENTS
        </span>
      </h4>
      <br />
      <br />
      <h6>
        We will not be liable for any loss or costs you may suffer as a result
        of us acting on your instructions (regardless of whether or not that
        loss / costs could have been foreseen).
        <br />
        <br />
        If you are an Individual or Micro Enterprise, in cases where we have not
        executed or have incorrectly executed a Payment Transaction, you shall
        have the right to claim an immediate refund from us of the respective
        payment amount without any deductions being made from the payment
        amount. In case we charge a service fee from you upon executing the
        Payment Transaction then you shall have the right to claim a refund from
        us of the respective service fee together with interest for late payment
        calculated from the service fee in accordance with the statutory rate
        for interest for late payment. If we have, upon executing the Payment
        Transaction, made any unjustified deductions from the payment amount,
        then we are obliged, without delay, to forward such unjustifiably
        deducted amounts to the recipient of the payment.
        <br />
        <br />
        You shall not have the rights stipulated above in cases where we have
        executed your Payment Order in full accordance with the payment
        information submitted by you to us. In such case you shall have the
        right to request that we help you to retrieve the payment amount and we
        shall have the right to charge you any fee indicated in the Fee
        Schedule.
        <br />
        <br />
        If you are a Large Enterprise, the clause immediately above (within this
        section) shall not apply to you, and we shall have no liability to you
        in respect of an immediate refund of the respective payment amount. If a
        Payment Transaction has been incorrectly executed, and you notify us of
        this, you may request that we help you to retrieve the payment amount.
        In such case we shall have the right to charge you any fee indicated in
        the Fee Schedule.
      </h6>
      <br />
      <br />
      <h4 className="font-medium">17. TERM AND TERMINATION</h4>
      <br />
      <br />
      <h6>
        Term: Once this Agreement is effective, there is no minimum contract
        period. This Agreement shall continue until it is terminated.
        Termination shall be effected in accordance with this clause.
        <br />
        <br />
        Termination by notice
        <br />
        <br />
        You may terminate this Agreement at any time, subject to you emailing us
        at Support@payymenow.com and requesting that we close your Account. It
        may take up to 30 days for your Account closure to be complete.
        <br />
        <br />
        If you are an Individual or Micro Enterprise, we may terminate this
        Agreement at any time, subject to providing you with a period of two
        months’ notice.
        <br />
        <br />
        If you are a Large Enterprise, we may terminate the Agreement at any
        time on notice.
        <br />
        <br />
        Where you have a Business Account, you may not terminate this Agreement
        to evade any investigation or review pursuant to clause 13 above. If you
        attempt to terminate this Agreement while we are conducting an
        investigation or review, we may hold your funds for up to 180 days to
        protect us or a third party against the risk of reversals, chargebacks,
        claims, fees, fines, penalties, and other liability. You will remain
        liable for all obligations related to your Account even after the
        Account is closed.
        <br />
        <br />
        Termination by us and right to refuse to provide services
        <br />
        <br />
        In connection with our obligations under Applicable Law, we reserve the
        right to refuse to provide any services to you and the right to
        immediately terminate this Agreement entered into with you, in the
        occurrence of one or several of the following circumstances:
        <br />
        <br />
        a) You are not:
        <br />
        <br />
        If you are an Individual;
        <br />
        <br />
        ● at least 18 years of age;
        <br />
        <br />
        ● capable of entering into legally binding contracts;
        <br />
        <br />
        ● a resident of a country in which we operate; and / or
        <br />
        <br />
        If you are a Legal Entity:
        <br />
        <br />
        ● where relevant, validly incorporated / registered (as appropriate);
        <br />
        <br />
        ● capable of entering into legally binding contracts;
        <br />
        <br />
        ● incorporated / registered (as appropriate) in a country in which we
        operate; and / or
        <br />
        <br />
        ● incorporated / registered (as appropriate) in Nigeria
        <br />
        <br />
        b) We are unable to apply one or several due diligence measures to you
        to its full satisfaction, including being unable:
        <br />
        <br />
        ● to identify your purpose on using our services;
        <br />
        <br />
        ● to verify your identity and, where relevant, that of any beneficial
        owners we consider relevant; and / or
        <br />
        <br />
        ● to obtain sufficient understanding supported by relevant documents and
        / or information on the origin of your funds, source of your wealth or
        other proof of your financial situation;
        <br />
        <br />
        c) You do not, regardless of our demand, present us with additional
        information and / or documents, which we are obliged to collect under
        Applicable Law;
        <br />
        <br />
        d) You carry out any activity in breach of Applicable Laws, or which we
        consider harmful (either to the App or to another person) or immoral;
        <br />
        <br />
        e) You have:
        <br />
        <br />
        ● presented us with incorrect or insufficient information and / or
        documents;
        <br />
        <br />
        ● not performed an obligation under this Agreement; or
        <br />
        <br />
        ● caused damage to us or created a threat giving rise to such damage;
        <br />
        <br />
        f) We suspect that you may be involved with or that the services
        provided to you may be used for money laundering, terrorist financing,
        fraud or any other illegal activity and we are unable to remove such
        suspicions;
        <br />
        <br />
        g) There are circumstances related to you or a person affiliated with
        you which indicates to a higher risk of money laundering, terrorist
        financing, fraud or any other illegal activity and, in connection
        thereof, we do not wish to provide services to you;
        <br />
        <br />
        h) You or a person affiliated with you are or has been the subject of an
        international financial sanction;
        <br />
        <br />
        i) You have overdue payables to us for which we have the right to claim
        from you for interest for late payment;
        <br />
        <br />
        j) a competent public authority or another competent authority,
        including any competent law enforcement authority, supervision
        authority, tax authority, court or bailiff, has given us a lawful order
        to terminate your Account or to restrict the services provided to you in
        any other way;
        <br />
        <br />
        k) an administrator of an international clearing system, including an
        international card organization, a correspondent bank working with us or
        any other intermediary to the services provided to you demands that we
        restrict the services provided to you; and / or
        <br />
        <br />
        l) We may not provide services to you under Applicable Law and / or we
        have the right under Applicable Law to refuse from providing services to
        you and / or we have the right under Applicable Law to immediately
        terminate the Agreement entered into with you.
        <br />
        <br />
        If we have exercised our right stipulated in clause 13.6 to refuse to
        provide services to you or to terminate an Agreement entered into with
        you it shall not be liable to you for any costs, losses, claims, and
        expenses caused to you as a result of it taking this action.
        <br />
        <br />
        Consequences of termination
        <br />
        <br />
        Upon termination of this Agreement for any reason, we have the right to
        prohibit your access to the Services, including without limitation by
        deactivating your Account, and to refuse future access to the Services
        by you or if a business entity, its parent, affiliates or subsidiaries
        or its or their successors.
        <br />
        <br />
        Upon the termination of this Agreement, we shall:
        <br />
        <br />
        ● reject any Payment Transactions that have not yet been deemed to be
        received;
        <br />
        <br />
        ● close your E-Wallet; and
        <br />
        <br />
        ● redeem any remaining E-Money held in your E-Wallet to your Nominated
        Account, less any fees due and payable to us.
        <br />
        <br />
        Following the transfer set out in this Agreement, we will have no
        further obligations towards you in respect of this Agreement.
        <br />
        <br />
        If we are unable (for whatever reason) to redeem any remaining E-Money
        held in your E-Wallet to your Nominated Account following a termination,
        we will retain the credit balance in a segregated account until notified
        of a valid payment account (which would be capable of satisfying the
        requirements of a Nominated Account) to which it can transfer the funds.
        <br />
        <br />
        Where there is an insufficient balance of E-Money to satisfy all fees
        due and payable to us, you will be required to transfer any outstanding
        amounts (after the amounts due and payable have been offset against the
        E-Wallet balance) to an account nominated by us within 5 Business Days.
        <br />
        <br />
        We are not required to redeem any E-Money from your E-Wallet where you
        made a request for redemption more than six years after the date of
        termination of this Agreement.
      </h6>
      <br />
      <br />
      <h4>
        <span className="font-medium"> 18. STATEMENTS</span>
      </h4>
      <br />
      <br />
      <h6>
        You may at any time view or download a statement of E-Money issuances,
        Payment Transactions and Redemptions made to or from your E-Wallet via
        PayyMe in a section labelled “Account History” and we shall make
        available to you a monthly account statement for the previous 12 months
        from the date of your request. If this statement shows any transaction
        which was not made by you, please report this by reaching out to us at
        Support@payymenow.com.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 19. FEES</h4>
      <br />
      <br />
      <h6>
        You are obliged to pay us the fees outlined in the Fee Schedule for the
        services provided to you by us under this Agreement.
        <br />
        <br />
        If there is a Fee included in the Fee Schedule for a service provided to
        you, we will debit the funds from the corresponding currency wallet in
        your account. Fees are collected in the currency associated with the
        transaction or product. If there are insufficient funds, we will auto
        deduct from any e-value/funds held by the user on the app without
        notifying you.
        <br />
        <br />
        In case there is monthly fee included in the Fee Schedule for a service
        provided to you, then we shall debit the respective amount from your
        E-Wallet in advance on the Business Day that the relevant service was
        first provided to you and then the same Business Day in each subsequent
        month, unless the Agreement or the Fee Schedule indicates otherwise.
        <br />
        <br />
        Following a Payment Transaction, you are liable to us for the full
        amount of the payment plus any additional fees incurred if the payment
        is later invalidated for any reason. This means that, in addition to any
        other liability, you will be responsible for the sum of the Payment
        Transaction, plus applicable fees if you make an unsuccessful claim or a
        chargeback, or if there is a reversal of the Payment Transaction. You
        agree to allow us to recover any amounts due to us by deducting the
        relevant sum your E-Wallet. If there are insufficient funds in your
        E-Wallet to cover the amount due, you agree to reimburse us through the
        other means including those set out in this Agreement.
        <br />
        <br />
        If we make a payment to you for a claim, reversal, or chargeback that
        you file with us against a recipient of your payment, you agree that we
        assume your rights against the recipient and third parties related to
        the payment, and may pursue those rights directly or on your behalf, in
        our discretion.
      </h6>
      <br />
      <br />
      <h4 className="font-medium">
        {" "}
        20. TRANSACTION LIMITS AND REGULATORY COMPLIANCE
      </h4>
      <br />
      <br />
      <h6>
        o ensure security and comply with Nigerian financial regulations,
        different account tiers have different transaction limits. These limits
        apply to daily transfers, monthly transaction volumes, and maximum
        account balances in accordance with Central Bank of Nigeria guidelines.
        <br />
        <br />
        Your initial account tier is determined during registration based on the
        level of identification provided. You can upgrade your account tier by
        providing additional verification documents through our customer service
        channels or authorized agents.
        <br />
        <br />
        We implement strict anti-money laundering measures as required by the
        Money Laundering (Prohibition) Act and CBN regulations. This includes
        monitoring transactions for suspicious patterns and reporting certain
        transactions to regulatory authorities as legally required. We may
        request additional information about particular transactions to fulfil
        our regulatory obligations.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 21. AMENDING THIS AGREEMENT</h4>
      <br />
      <br />
      <h6>
        The valid versions of this Agreement and the Fee Schedule shall be
        deemed to be the newest versions of the documents available on the
        Website.
        <br />
        <br />
        As our services evolve and regulations change, we may update these
        Terms. We shall have the right to unilaterally amend this Agreement
        including the Fee Schedule. We'll notify you of any material changes
        through SMS notifications, or other appropriate channels at least 30
        days before they take effect.
        <br />
        <br />
        Your continued use of our services after such notifications constitutes
        acceptance of the modified Terms. If you do not agree with the updated
        Terms, you should discontinue using our services and contact our
        customer service to close your account.
        <br />
        <br />
        If you are an Individual or Micro Enterprise, we will notify you at
        least two months in advance of the amendments entering into force,
        unless stipulated otherwise. If you do not accept the amendments, then
        you may, at any time prior to the entry into force of the amendments,
        terminate the Agreement without any additional fees effective
        immediately by notifying us via the Website or other PayyMe services or
        by email to Support@payymenow.com. If you have not, prior to the entry
        into force of the amendments, notified us that you do not agree to the
        amendments, then it shall be deemed that you have agreed to the
        amendments and you will no longer be able to terminate the Agreement
        under this clause.
        <br />
        <br />
        If you are a Large Enterprise, we will use reasonable endeavours to
        notify you of any amendment in advance, but are not obliged to do so.
        <br />
        <br />
        If you are a Large Enterprise, any amendments to interest rates shall be
        carried out in accordance with the above clauses.
        <br />
        <br />
        If it becomes apparent that any provision of any Agreement is void under
        Applicable Law, then subject to Applicable Law we shall have the right
        to unilaterally amend the Agreement by replacing the void provision with
        a valid provision so that the purpose of the valid provision would, as
        much as possible, serve the purpose of the void provision. In such case
        we shall notify you about the amendment via PayyMe or by email. In such
        case you do not have the right to terminate the Agreement in accordance
        with the above clause.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 22. NOTICES</h4>
      <br />
      <br />
      <h6>
        General All notices / communications made in respect of the Agreement,
        and any provided under it by us, will be in English.
        <br />
        <br />
        Notices to You
        <br />
        <br />
        We may provide you with notices/communications in connection with the
        services provided to you via:
        <br />
        <br />
        ● PayyMe – when you access our SMS service;
        <br />
        <br />
        ● Post – to the most recent postal address you provided to us; or
        <br />
        <br />
        ● E-mail – to the most recent e-mail address you provided to us.
        <br />
        <br />
        ● SMS Text Messaging - to the most recent phone you provide to us.
        <br />
        <br />
        ● Telephone - to the most recent phone you provide to us.
        <br />
        <br />
        You undertake that the contact details provided to us are up to date and
        that you can be reached using these contact details. If the contact
        details should change, then you shall without delay provide us with your
        updated contact details. You can update your contact details as set out
        in clause below.
        <br />
        <br />
        Notices sent to you by us are deemed to have been received by you when:
        <br />
        <br />
        ● sent by post – three Business Days after being posted;
        <br />
        <br />
        ● sent by E-Mail – on the Business Day it is sent;
        <br />
        <br />
        ● you access any PayyMe service
        <br />
        <br />
        Notices to us
        <br />
        <br />
        Any notice to us must be sent by post to: FAO: Legal Department, Abuja
        FCT Nigeria or by email to legal@novasphereltd.com.
        <br />
        <br />
        If you notify us of any event orally, we may require that you send us
        written confirmation within 10 Business Days. During the course of our
        investigation of such an event, we may request additional information
        from you.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 23 . PRIVACY AND DATA PROTECTION</h4>
      <br />
      <br />
      <h6>
        Protecting your privacy is very important to us. Please review our
        Privacy Policy in order to better understand our commitment to
        maintaining your privacy and protecting your data, as well as our use
        and disclosure of your information.
        <br />
        <br />
        If you receive information about another PayyMe customer through the
        Services, you must keep the information confidential and only use it in
        connection with the service. You may not disclose or distribute a PayyMe
        user’s information to a third party or use the information for marketing
        purposes without that user’s express consent.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 24 . RESPONSIBILITIES AND RESTRICTIONS</h4>
      <br />
      <br />
      <h6>
        While using our services, you agree to use them only for lawful purposes
        and in accordance with these Terms. You are responsible for ensuring
        that information you provide, particularly recipient details for
        transfers, is accurate. We cannot be held responsible for transfers to
        incorrect recipients resulting from information you provided.
        <br />
        <br />
        Our service is for personal or authorized business use only. You agree
        not to use our platform for any illegal activities, including money
        laundering, fraud, terrorism financing, or any violation of Nigerian
        laws. You also agree not to attempt to reverse-engineer our SMS short
        codes or bypass any security measures we've implemented.
        <br />
        <br />
        We respect your privacy and expect you to respect others' privacy as
        well. You agree not to use our service to collect information about
        other users or to send unsolicited commercial messages. Our commitment
        to protecting your information is detailed in our Privacy Policy, which
        forms part of these Terms
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 25 . PAYYME</h4>
      <br />
      <br />
      <h6>
        <span className="font-medium">SMS SERVICE INFRASTRUCTURE</span>
        <br />
        <br />
        Our financial services are delivered through Short Message Service (SMS)
        technology, which operates across various mobile networks and devices in
        Nigeria. We recognize that our service relies on multiple external
        infrastructure components to function effectively. These robust
        infrastructures designed to ensure secure, efficient, and reliable
        message transmission. By using our services, you acknowledge and agree
        that:
        <br />
        <br />
        <span className="font-medium">Network Reliance: </span> Our SMS services
        depend on mobile network operators (MNOs) and third- party SMS gateway
        providers for message delivery. These network providers are responsible
        for:
        <br />
        <br />
        ● Providing and maintaining cellular network connectivity for SMS
        transmission
        <br />
        <br />
        ● Ensuring basic connectivity
        <br />
        <br />
        ● Transmitting SMS session data
        <br />
        <br />
        We do not guarantee real-time delivery of messages, as transmission may
        be affected by network congestion, carrier limitations, or technical
        disruptions beyond our control.
        <br />
        <br />
        <span className="font-medium">SMS Gateways & Aggregators:</span> We may
        utilize SMS gateways and aggregators to facilitate message routing,
        optimize delivery, and enhance service reliability. These intermediaries
        help ensure that messages reach users promptly and securely.
        <br />
        <br />
        Short Message Service Centre (SMSC): Messages sent through our platform
        are processed via SMSCs, which manage message storage, forwarding, and
        retries in case of temporary delivery failures. While we strive to
        ensure timely delivery, we are not liable for delays or non- delivery
        caused by third-party service failures.
        <br />
        <br />
        Security & Encryption: We implement industry-standard security measures
        to protect SMS communications. However, SMS is inherently less secure
        than other communication channels. Users are advised not to share
        sensitive financial information via SMS unless explicitly instructed
        through secure verification processes.
        <br />
        <br />
        Service Availability & Restrictions: Our SMS services may be subject to
        regional carrier regulations, fair usage policies, and
        government-mandated restrictions. We reserve the right to suspend or
        terminate SMS-based services in compliance with legal and regulatory
        requirements.
        <br />
        <br />
        User Network and Device Responsibilities: As a user, you are responsible
        for ensuring that the mobile number linked to your account is accurate
        and up to date. We are not responsible for messages sent to incorrect or
        outdated numbers due to user error. As a user, you acknowledge and agree
        that:
        <br />
        <br />
        ● You are responsible for any charges imposed by your mobile network
        operator for SMS sessions
        <br />
        <br />
        ● Different network operators may have varying SMS access fees
        <br />
        <br />
        ● Device compatibility is your responsibility
        <br />
        <br />
        ● Network connectivity issues are not grounds for service liability
        claims
        <br />
        <br />
        <span className="font-medium">
          {" "}
          THIRD-PARTY SERVICE DEPENDENCIES & LIMITATIONS
        </span>
        <br />
        <br />
        PayyMe, our SMS-based financial service, relies on external service
        providers, including mobile network operators (MNOs), SMS gateways,
        aggregators, and device manufacturers. While we strive to provide a
        secure and reliable SMS-based financial service, you acknowledge and
        accept the following limitations, risks associated with the SMS service
        infrastructure, and third-party dependencies:
        <br />
        <br />
        <span className="font-medium">
          Role of Mobile Network Operators (MNOs) & Device Manufacturers:
        </span>{" "}
        MNOs and device manufacturers facilitate SMS transmission but do not
        manage or control our financial services. As such, they are not
        responsible for:
        <br />
        <br />
        ● The performance, availability, or reliability of PayyMe.
        <br />
        <br />
        ● Financial transaction processing, authorization, or financial service
        delivery.
        <br />
        <br />
        ● PayyMe customer support, dispute resolution, or service-related
        inquiries.
        <br />
        <br />
        All support requests must be directed to our official customer service
        channels.
        <br />
        <br />
        <span className="font-medium">
          SMS Infrastructure Limitations & Risks:{" "}
        </span>
        Due to the nature of SMS technology and third- party dependencies, you
        acknowledge that:
        <br />
        <br />
        ● Network & Delivery Failures – SMS delivery is subject to mobile
        network availability, signal strength, carrier restrictions, third-party
        service disruptions, device compatibility, network operator technical
        configurations, temporary network interruptions, etc. Messages may be
        delayed, undelivered, or out of order due to factors beyond our control.
        We cannot guarantee uninterrupted service due to factors outside our
        direct control.
        <br />
        <br />
        ● Security & Interception Risks – SMS messages are not end-to-end
        encrypted and may be intercepted, spoofed, or accessed by unauthorized
        third parties. You are advised to exercise caution when sending or
        receiving financial information via SMS.
        <br />
        <br />
        ● User Device & Number Issues – If you lose access to your registered
        mobile number, fail to keep accurate or update your contact details,
        experience device malfunctions, or the registered number becomes
        inactive, you may not receive critical messages or transaction alerts.
        We are not responsible for any resulting inconvenience or financial
        loss.
        <br />
        <br />
        ● Third-Party Service Dependencies – Our platform relies on external SMS
        gateways, aggregators, and mobile network operators to facilitate
        communication. Service disruptions, maintenance, or compliance
        requirements imposed by these third parties may impact the availability
        of our SMS services.
        <br />
        <br />
        ● Fraud & Unauthorized Access – Phishing scams, social engineering
        attacks, and unauthorized SIM swaps pose risks to SMS-based
        authentication and notifications. We will never request sensitive
        financial details via SMS, and users must remain vigilant against
        fraudulent messages.
        <br />
        <br />
        ● Regulatory & Compliance Restrictions – Our SMS services may be subject
        to government regulations, carrier policies, or regional restrictions
        that impact availability.
        <br />
        <br />
        <span className="font-medium">Limitation of Liability</span>
        <br />
        <br />
        To the fullest extent permitted by law, we are not liable for any
        direct, indirect, incidental, special, or consequential damages arising
        from:
        <br />
        <br />
        ● SMS service disruptions, delays, or inaccuracies in SMS delivery due
        to network issues, technical disruptions, or third-party service
        failures,
        <br />
        <br />
        ● Unauthorized access to your messages resulting from interception, SIM
        swap fraud, or other security breaches beyond our control.
        <br />
        <br />
        ● User negligence, errors, omissions, or failure to keep registered
        contact information accurate and up to date.
        <br />
        <br />
        ● Regulatory or carrier-imposed restrictions that limit the
        functionality or availability of our SMS-based services.
        <br />
        <br />
        By using PayyMe, you acknowledge these limitations and agree that we,
        along with mobile network operators and device manufacturers, shall not
        be held responsible for any losses, damages, liabilities, or disruptions
        resulting from the inherent limitations of the SMS service
        infrastructure, third-party service dependencies, or user actions.
        <br />
        <br />
        <span className="font-medium">REGULATORY COMPLIANCE</span>
        <br />
        <br />
        PayyMe, our SMS-based financial service, operates in accordance with
        applicable laws, regulations, and industry standards governing mobile
        communications, financial transactions, and data protection. By using
        our services, you acknowledge and agree to the following:
        <br />
        <br />
        <span className="font-medium">
          1. Compliance with Telecommunications and Financial Regulations
        </span>{" "}
        – We adhere to regulatory requirements set by the Nigerian
        Communications Commission (NCC), the Central Bank of Nigeria (CBN), and
        other applicable regulatory bodies. These regulations may affect service
        availability, transaction limits, and message content.
        <br />
        <br />
        <span className="font-medium">2. Data Protection and Privacy</span> – We
        comply with the Nigerian Data Protection Act, and other relevant data
        protection laws including obligations related to the collection,
        processing, and storage of user information. SMS communications may be
        monitored, logged, or retained as required by law or regulatory
        authorities.
        <br />
        <br />
        <span className="font-medium">
          3. Government and Regulatory Requests
        </span>{" "}
        – We may be required to disclose certain user data or transaction
        records to regulatory agencies, law enforcement, or other authorized
        entities in compliance with legal obligations. Such disclosures will be
        made in accordance with applicable laws and due process.
        <br />
        <br />
        <span className="font-medium">
          4. Regional and International Restrictions
        </span>{" "}
        – Our SMS services may be subject to country-specific regulations,
        including restrictions on international messaging, financial
        transactions, or mobile service provider policies. We reserve the right
        to suspend or modify services in response to regulatory changes.
        <br />
        <br />
        <span className="font-medium">5. User Compliance Obligations</span> –
        You are responsible for ensuring that your use of PayyMe complies with
        all applicable laws and regulations in your jurisdiction. Any
        <br />
        <br />
        misuse, fraudulent activity, or violation of regulatory requirements may
        result in service suspension or legal consequences.
        <br />
        <br />
        <span className="font-medium">Limitation of Liability</span>
        <br />
        <br />
        To the fullest extent permitted by law, we are not liable for any
        direct, indirect, incidental, special, or consequential damages arising
        from:
        <br />
        <br />
        ● Regulatory changes, restrictions, or compliance requirements that
        impact the availability, functionality, or terms of PayyMe.
        <br />
        <br />
        ● Delays or disruptions caused by government-imposed service
        suspensions, security measures, or policy updates.
        <br />
        <br />
        ● User failure to comply with applicable laws, leading to penalties,
        service termination, or legal consequences.
        <br />
        <br />
        By using PayyMe, you acknowledge that regulatory requirements may affect
        service delivery and agree that we shall not be held responsible for any
        losses, liabilities, or limitations resulting from compliance
        obligations or legal mandates. Mobile network operators, device
        manufacturers, and other third-party service dependencies have no legal
        obligation to support or maintain our financial service infrastructure
        beyond providing the required SMS service infrastructure.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 26 . NTELLECTUAL PROPERTY</h4>
      <br />
      <br />
      <h6>
        Our SMS service design, workflows, and proprietary technologies are
        exclusively owned by NOVASPHERE TECHNOLOGY SOLUTIONS LTD. Mobile network
        operators and device manufacturers have no claim to our service
        infrastructure or intellectual property.
        <br />
        <br />
        All aspects of our service, including our SMS interface, workflows,
        designs, and related content, are protected by intellectual property
        laws. Our service is licensed, not sold, to you for your personal use
        only. Nothing in these Terms transfers any ownership rights to you.
        <br />
        <br />
        The NOVASPHERE TECHNOLOGY SOLUTIONS LTD. and PayyMe (including other
        PayyMe services) name, logo, and all related products, and services
        described on any other operated by the company (including the Website)
        and any mobile application operated by the company (including PayyMe)
        are either trademarks or registered trademarks of the company or its
        affiliates or licensors. You may not copy, imitate, or use them without
        the company’s prior written consent. In addition, all page headers,
        custom graphics, button icons, and scripts are service marks,
        trademarks, and / or trade dress of the company. You may not copy,
        imitate, or use them without our prior written consent. You may use HTML
        logos provided by the company through our vendor services, SMS tools,
        promotional tools, or affiliate programs without prior written consent
        for the purpose of directing web and SMS traffic to the service. You may
        not alter, modify or change these HTML logos in any way, use them in a
        manner that is disparaging to the company, PayyMe, or PayyMe Service or
        display them in any manner that implies the company’s sponsorship or
        endorsement. All right, title, and interest in and to any website or
        service operated by the company and any content thereon is the exclusive
        property of the company and its licensors. Certain other product or
        service names, brand names and company names may be trademarks of their
        respective owners.
        <br />
        <br />
        PayyMe and all PayyMe services (and any other website or application
        operated by us) may feature third party offers and enable product
        searches. We do not warrant that product descriptions, pricing, search
        results, user ratings and reviews or any other content on the any such
        website is accurate, complete, reliable, or current. This information is
        provided for informational purposes only and does not constitute an
        endorsement by us of any product, service, or vendor.
        <br />
        <br />
        License Grant
        <br />
        <br />
        Certain of the PayyMe Services require the use of software and software
        applications provided to you through the company (collectively
        “Software”) owned by the company (“Novasphere Technology Solutions
        Ltd.”) and its licensors grant you a limited, nonexclusive license to
        use the company’s Software that we provide to you solely in accordance
        with this Agreement and any user documentation we may provide, including
        all updates, upgrades, new versions and replacements of the Software
        (all of which become part of the “Software”) for your personal use only
        in accordance with this Agreement. If the Software will be downloaded to
        a mobile device, this license extends to your use of the Software on a
        device that you own or control, as long as your use is permitted by the
        usage rules set forth for your particular device (for example, the Apple
        App Store Terms of Use). You may not rent, lease or otherwise transfer
        your rights in the Parent Software to a third party. You must comply
        with the implementation and use requirements for the Parent Software
        contained in this Agreement or in any Services documentation we provide
        to you. If you do not comply with such implementation and use
        requirements, you will be liable for all resulting damages suffered by
        you, us, or any third parties. You agree not to alter, reproduce, adapt,
        distribute, display, publish, reverse engineer, translate, disassemble,
        decompile or otherwise attempt to create any source code which is
        derived from the software. You acknowledge that all rights, title and
        interest to the Software are owned by the company. Your rights to use
        the Software cease immediately upon termination of this Agreement and
        you must delete all of your copies of the Software.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 27 . LIABILITY</h4>
      <br />
      <br />
      <h6>
        If we incur any damages because you violate our policies, break any
        laws, or otherwise cause us to suffer any damages or incur any expenses
        then we may hold your funds up to 180 days, we may recover from you the
        damages incurred from each violation and take legal action against you
        to recover additional losses, investigation costs, fines, or legal fees
        we may incur.
        <br />
        <br />
        Unless otherwise prohibited by Applicable Law, you assume all
        responsibility for your use of the Services and use them at your own
        risk. To the fullest extent permissible under Applicable Law, all such
        representations, warranties, guarantees and conditions are disclaimed,
        including, but not limited to, any implied warranties of
        merchantability, fitness for a particular purpose, title,
        noninfringement of intellectual property rights, or other terms which
        might otherwise be implied by statute, common law or in equity. We do
        not warrant that the services will be uninterrupted or error-free, that
        defects will be corrected, or that the services, or the servers that
        process information for the services, are free of viruses, bugs or other
        harmful components.
        <br />
        <br />
        On behalf of us, Covered Third Parties, and each of our respective
        affiliates, vendors, agents and suppliers, we make the following
        disclaimers set forth in this clause: the Services are provided on an
        “as is”, “as available” and “with all faults” basis, without any
        representations, warranties, guarantees, or conditions of any kind,
        express, implied or statutory, including, but not limited to, any
        warranty as to the use or operation of the services, or the information,
        content or other materials related to the services, whether provided by
        us, any third party, or any of the Covered Third Parties. Neither we,
        nor any third party, nor any of the Covered Third Parties warrant nor
        make any representations regarding the use or the results of the
        services in terms of correctness, accuracy, timeliness, reliability, or
        otherwise.
        <br />
        <br />
        You assume the entire cost of all necessary maintenance, repair, or
        correction to any equipment you use in accessing any of the services,
        including, but not limited to, your mobile phone or other device.
        <br />
        <br />
        Neither we, nor any third party (including any Covered Third Parties),
        nor any of their respective affiliates, vendors, agents or suppliers
        will be liable for, and you agree not to seek against any of the
        foregoing, any damages of any kind arising from the use of the services,
        including, but not limited to, indirect, special, incidental, punitive,
        exemplary, consequential damages or damages resulting from the use of
        Services, loss of use of the Services, lost data, lost profits, or
        business interruption arising out of or in any way connected with the
        use of the services, any delays in the services, or the inability to use
        the services, or any portion thereof, whether based on contract, tort,
        negligence, strict liability or otherwise, even if all or any of us have
        been advised of the possibility of such damages and even if any remedy
        fails of its essential purpose.
        <br />
        <br />
        <span className="font-medium">Limitations on Liability</span>
        <br />
        <br />
        Except as otherwise expressly provided in this Agreement, and to the
        extent permissible under Applicable Law, our (including our officers,
        employees or agents) cumulative liability to you for any claims or
        damages arising out of or related to your use of the Services shall not
        exceed the Fees you paid to us for the Services provided under this
        Agreement. Indemnification Except to the extent that any loss is due to
        a Party’s (the “Non-Breaching Party”) negligence, wilful default or
        fraud or that of the Non-Breaching Party’s employees or Non-Breaching
        Party’s affiliated companies, the other Party will indemnify the
        Non-Breaching Party against all costs, losses, claims and expenses which
        may be incurred or made by the Non-Breaching Party arising as a result
        of or in connection with this Agreement.
        <br />
        <br />
        <span className="font-medium">Release</span>
        <br />
        <br />
        If you have a dispute with one or more other PayyMe customers relating
        to payment, we are not responsible for any such dispute and you hereby
        release us (and our officers, directors, agents, joint ventures and
        employees) from any and all claims, demands and damages (actual and
        consequential) of every kind and nature arising out of or in any way
        connected with such disputes.
      </h6>
      <br />
      <br />
      <h4 className="font-medium">
        {" "}
        28 . APPLICABLE LAW AND DISPUTE RESOLUTION
      </h4>
      <br />
      <br />
      <h6>
        his Agreement will be governed by Nigerian law and the courts of Nigeria
        will have exclusive jurisdiction over any claim, dispute or matter.
        <br />
        <br />
        You shall have the right to submit any complaints about the services
        provided to you by e-mail to us. We will handle all complaints in
        accordance with our Complaints Handling Procedures, a summary of which
        is set out on the Website.
        <br />
        <br />
        If you are an Individual or Micro Enterprise and we have not replied to
        a duly submitted customer complaint within 15 days, then you may have a
        right to seek recourse from the Public Complaints Commission in Nigeria.
        The terms for seeking recourse from the Public Complaints Commission are
        stipulated in more detail on the website of the Public Complaints
        Commission at https://pcc.org.ng/jsst-add-ticket
        <br />
        <br />
        If we cannot resolve your issue through our customer service channels,
        disputes shall be resolved through mediation in accordance with the
        Arbitration and Conciliation Act of Nigeria. The mediation shall take
        place in Abuja FCT, Nigeria, in the English language.
        <br />
        <br />
        For regulatory complaints regarding our financial services, you have the
        right to escalate unresolved issues to the Consumer Protection
        Department of the Central Bank of Nigeria after attempting to resolve
        them directly with us.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 29 . SURVIVAL AND FORCE MAJEURE</h4>
      <br />
      <br />
      <h6>
        In the event of termination of this Agreement or the Services, the terms
        in this Agreement that by their nature are continuing shall survive such
        termination, including but not limited to clauses 1, 13, 15, 17, 19 to
        30.
        <br />
        <br />
        We shall not be liable for any delay or failure in the performance or in
        delivery or shipment of materials, or for any damages suffered by you by
        reason of such delay or failures, directly or indirectly caused by or in
        any manner arising from or connected with acts of God, acts of public
        enemies, riots, disease (including pandemics and/or epidemics), strikes,
        acts of governmental agencies, labour difficulties, failure of our
        power, telecommunications or other suppliers, delays in securing or
        shortages of raw materials, breakdown or destruction of any system or
        equipment, or any other cause or causes beyond our control, whether or
        not similar to those enumerated herein.
      </h6>
      <br />
      <br />
      <h4 className="font-medium"> 30 . GENERAL PROVISIONS</h4>
      <br />
      <br />
      <h6>
        You acknowledge and agree that this Agreement is between you and us, not
        with any third party (including, but not limited to, any Covered Third
        Party), and that we are solely responsible for the Services. Your use of
        the Services may be subject to separate agreements you may enter into
        with a Covered Third Party. You agree to comply with all applicable
        Covered Third-Party terms of agreement when using the Services. We are
        not a party to agreements with a Covered Third Party and have no
        responsibility for the products and services provided by such Covered
        Third Parties.
        <br />
        <br />
        It is your responsibility to determine what, if any, taxes apply to any
        Payment Transaction you make or receive, and it is your responsibility
        to collect, report and remit the correct tax to the appropriate tax
        authority. We are not responsible for determining whether taxes apply to
        your transaction, or for collecting, reporting or remitting any taxes
        arising from any transaction.
        <br />
        <br />
        This Agreement and other documents (including but not limited to the
        Privacy Policy) referenced in or linked to this Agreement, which are
        hereby incorporated herein and made a part of this Agreement by this
        reference, contain yours and our entire Agreement regarding your use of
        the Services.
        <br />
        <br />
        If any provision of this Agreement is deemed to be illegal or
        unenforceable, such provision shall be enforced to the extent possible,
        and any remaining illegality or unenforceability will not affect the
        validity or enforceability of any other provisions of this Agreement,
        which together will be construed as if such illegal or unenforceable
        provision had not been included in this Agreement.
        <br />
        <br />
        Unless the right of enforcement is expressly granted, it is not intended
        that any provision of this Agreement shall be enforceable by any person
        who is not a party to this Agreement.
        <br />
        <br />
        The clause headings in this Agreement are for convenience of reference
        only and are not to be considered as parts, provisions or
        interpretations of this Agreement.
        <br />
        <br />
        You may not transfer, assign, mortgage, charge, subcontract, declare a
        trust over or deal in any other manner with any or all of your rights
        and obligations under this Agreement without our prior written consent.
        We shall have the right to assign, transfer or novate the Agreement or
        any rights and obligations under any Agreement to a third party without
        your consent.
        <br />
        <br />
        We reserve the right to transfer or assign this Agreement or any right
        or obligation under this Agreement at any time.
        <br />
        <br />
        Our delay or failure to act with respect to a breach by you or others
        does not waive our right to act with respect to that breach or
        subsequent or similar breaches.
        <br />
        <br />
        Nothing in this Agreement shall be deemed to create any form of
        partnership, joint venture or any other similar relationship between you
        and us, and / or other individuals or entities involved with providing
        the services under this Agreement.
        <br />
        <br />
        The Company may arrange for Bank PLC ("BANK") to provide you with access
        to a debit card (a PayyMe Card”). By using the PayyMe Card, you agree to
        the bank’s Prepaid Card Terms and Conditions, as applicable (each the
        “PayyMe Card Terms”). For avoidance of doubt, the applicable PayyMe Card
        Terms are between you and the bank, not the Company, and in the event of
        any inconsistency between this Agreement and the applicable PayyMe Card
        Terms, the applicable PayyMe Card Terms shall govern your use of the
        PayyMe Card and your relationship with the bank.
        <br />
        <br />
        <span className="font-medium">Service Update: </span>The Service is
        designed to facilitate secure and efficient financial transactions via
        SMS-based technology. The Company may, at its discretion, expand the
        scope of the Service to include additional platforms such as mobile
        applications, web-based portals, or other digital interfaces.
        Furthermore, the Company reserves the right to extend the Service beyond
        the current jurisdiction, enabling cross-border or international
        transactions, subject to applicable regulatory approvals. Any such
        expansion may introduce new features, terms, and conditions, which will
        be communicated to Users in advance. Continued use of the Service after
        such modifications shall constitute acceptance of the updated scope.
        <br />
        <br />
        <span className="font-medium">HOW TO CONTACT US</span>
        <br />
        If you are dissatisfied with any aspect of the Services that you have
        received from PayyMe, you can send a complaint to
        legal@novasphereltd.com, or lodge a complaint using the PayyMe service
        or website customer support chat.
      </h6>
    </div>
  );
}

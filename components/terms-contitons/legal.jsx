import { useState } from "react";

export default function Legals() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      style={{
        backgroundImage: 'url("/asset/circ.png")',
        backgroundSize: "620px 620px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -100px right -310px",
      }}
      className="bg-[#FAF8FE] hide-bgimg pt-[51px] pb-[123px]"
    >
      <div className="xl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[35px] mx-4 ">
        <h1 className="font-medium text-[2rem] text-[#1F1F1F] mb-1">Legal</h1>
        <p className="max-w-[808px] font-normal text-base text-[#696969] mb-[1.875rem]">
          The terms and conditions for using PayyMe depend on where you are.
          Select your location below to see the specific terms that apply to
          you.
        </p>
        <div className="bg-white px-[1.5rem] rounded-[22px] pb-[2.75rem] pt-[3.75rem]">
          <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
          <p className="font-normal text-base text-[#333232] mb-4">
            Beautya's 1st revitalizing serum that concentrates the double power
            of the Rose de Granville from the stem to the flower to revitalize
            the skin twice as fast (1) and visibly rejuvenate.
            <br /> Created after 20 years of research, the 10,000 (2)
            micro-pearls rich in revitalizing rose micro-nutrients are now
            completed by the power of the Rose sap. The next-generation, 92%
            natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
            is twice as concentrated,(4) combining the nourishing richness of{" "}
            {!showMore ? (
              <span>...</span>
            ) : (
              <span>
                an oil with the deep penetration of a serum. <br />
                <br /> From the first application of the serum, the skin appears
                plumped. In 3 weeks, 2x improvement in the look or feel of skin
                elasticity.(5) With regular use, skin looks and feels
                transformed.
                <br /> <br /> As if replenished from within, the skin seems
                denser and firmer, and wrinkles appear noticeably reduced. As if
                lifted, facial contours appear enhanced. <br /> <br />
                Reveal your extraordinary beauty with Beautya Prestige.
                dermatologist on the evolution of the product’s performance on
                the skin elasticity, comparison between the effect after 7 days
                and 28 days on 34 women.
              </span>
            )}
          </p>
          <button
            className="text-[#057310] font-medium text-base"
            onClick={() => setShowMore(!showMore)}
          >
            <p>{!showMore ? "Read More" : "Show Less"}</p>
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url("/asset/full-circ.png")',
          backgroundSize: "620px 620px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top -10px left 58px",
        }}
        className="pt-8 xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[35px] px-4"
      >
        <div className="bg-white px-[1.5rem] rounded-[22px] mb-[2.75rem] pt-[3.75rem] pb-8">
          <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
          <p className="font-normal text-base text-[#333232] mb-4">
            Beautya's 1st revitalizing serum that concentrates the double power
            of the Rose de Granville from the stem to the flower to revitalize
            the skin twice as fast (1) and visibly rejuvenate.
            <br /> Created after 20 years of research, the 10,000 (2)
            micro-pearls rich in revitalizing rose micro-nutrients are now
            completed by the power of the Rose sap. The next-generation, 92%
            natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
            is twice as concentrated,(4) combining the nourishing richness of{" "}
            {!showMore ? (
              <span>...</span>
            ) : (
              <span>
                an oil with the deep penetration of a serum. <br />
                <br /> From the first application of the serum, the skin appears
                plumped. In 3 weeks, 2x improvement in the look or feel of skin
                elasticity.(5) With regular use, skin looks and feels
                transformed.
                <br /> <br /> As if replenished from within, the skin seems
                denser and firmer, and wrinkles appear noticeably reduced. As if
                lifted, facial contours appear enhanced. <br /> <br />
                Reveal your extraordinary beauty with Beautya Prestige.
                dermatologist on the evolution of the product’s performance on
                the skin elasticity, comparison between the effect after 7 days
                and 28 days on 34 women.
              </span>
            )}
          </p>
          <button
            className="text-[#057310] font-medium text-base"
            onClick={() => setShowMore(!showMore)}
          >
            <p>{!showMore ? "Read More" : "Show Less"}</p>
          </button>
        </div>
        <div className="bg-white px-[1.5rem] rounded-[22px]">
          <h6 className="text-[#0C0C0C] text-xl mb-4">Product Details</h6>
          <p className="font-normal text-base text-[#333232] mb-4">
            Beautya's 1st revitalizing serum that concentrates the double power
            of the Rose de Granville from the stem to the flower to revitalize
            the skin twice as fast (1) and visibly rejuvenate.
            <br /> Created after 20 years of research, the 10,000 (2)
            micro-pearls rich in revitalizing rose micro-nutrients are now
            completed by the power of the Rose sap. The next-generation, 92%
            natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum
            is twice as concentrated,(4) combining the nourishing richness of{" "}
            {!showMore ? (
              <span>...</span>
            ) : (
              <span>
                an oil with the deep penetration of a serum. <br />
                <br /> From the first application of the serum, the skin appears
                plumped. In 3 weeks, 2x improvement in the look or feel of skin
                elasticity.(5) With regular use, skin looks and feels
                transformed.
                <br /> <br /> As if replenished from within, the skin seems
                denser and firmer, and wrinkles appear noticeably reduced. As if
                lifted, facial contours appear enhanced. <br /> <br />
                Reveal your extraordinary beauty with Beautya Prestige.
                dermatologist on the evolution of the product’s performance on
                the skin elasticity, comparison between the effect after 7 days
                and 28 days on 34 women.
              </span>
            )}
          </p>
          <button
            className="text-[#057310] font-medium text-base"
            onClick={() => setShowMore(!showMore)}
          >
            <p>{!showMore ? "Read More" : "Show Less"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

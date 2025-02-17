export default function Perks() {
  return (
    <div className="xl:pb-[100px] pb-8 md:pb-[75px] lg:pb-[80px] text-[#444444] xl:mx-[100px] lg:mx-[65px] md:mx-[48px] sm:mx-8 mx-6">
      <div className="lg:flex gap-6">
        <div className="sm:grid hidden grid-cols-3 xl:gap-6 gap-3 text-white flex-1">
          <div className="mb-[45px] md:mb-0">
            <h2 className="text-[1.875rem] font-medium text-[#444444] mb-6">
              Perks:
            </h2>
            <p className="text-sm font-normal text-[#000000]">
              In addition to a competitive salary, here are some of the benefits
              you enjoy when you join{" "}
              <span className="text-[#0DA168]">PayyMe.</span>
            </p>
          </div>
          <div className="py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
            HMO With Dependents
          </div>
          <div className="py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
            Paid Time Off
          </div>
          <div className="py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
            Hybrid Work set up
          </div>
          <div className="py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
            Pension Plan
          </div>
          <div className="py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
            Value Recognition & Awards
          </div>
        </div>
        <div className="hidden mt-6 lg:mt-0 h-auto sm:flex items-center text-white w-[292px] py-[2.75rem] px-[2rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem] md:text-[1.5rem] leading-[2rem]">
          Opportunity For Growth And Learning
        </div>
      </div>
      <div className="block sm:hidden text-white">
        <div className="flex gap-4 mb-6">
          <div className="py-[2rem] px-[1.75rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
            HMO With Dependents
          </div>
          <div className="py-[2rem] px-[1.75rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
            Paid Time Off
          </div>
        </div>
        <div className="mb-6 flex items-center text-white py-[3rem] px-[2.5rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
          Opportunity For Growth And Learning
        </div>
        <div className="flex gap-4 mb-6">
          <div className="py-[2rem] px-[1.75rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
            Hybrid Work set up
          </div>
          <div className="py-[2rem] px-[1.75rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
            Pension Plan
          </div>
        </div>
        <div className="flex items-center text-white py-[3rem] px-[2.5rem] bg-[#0F0F0F] rounded-[10px] font-medium text-[1.25rem]">
          Value Recognition & Awards
        </div>
      </div>
    </div>
  );
}

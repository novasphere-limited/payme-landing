import Image from "next/image";

export default function PaginationComponent({
  curPaginatedValue,
  onPaginatedChange,
}) {
  const total = 100;
  const handleBtnDecrement = () => {
    onPaginatedChange((curState) => {
      if (curState !== 1) return curState - 1;
      return 1;
    });
  };
  const handleBtnIncrement = () => {
    onPaginatedChange((curState) => {
      if (curState !== total) return curState + 1;
      return 100;
    });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="w-1/2 flex items-center">
          <button onClick={handleBtnDecrement}>
            <Image
              src="/favicon_io/arrow_back.svg"
              width={36}
              height={36}
              alt="Left arrow icon"
            />
          </button>
          <h6 className="label-4_regular w-full text-center">
            {curPaginatedValue} of {total}
          </h6>
          <button onClick={handleBtnIncrement}>
            <Image
              src="/favicon_io/arrow_front.svg"
              width={36}
              height={36}
              alt="Left arrow icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

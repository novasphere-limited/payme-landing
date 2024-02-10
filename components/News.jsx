import { NewsOneList, NewsThreeList, NewsTwoList } from "@/contants";
import Image from "next/image";

export default function News() {
  return (
    <div className="main-container">
      <h1 className="label-1_bold mb-4 grnSec">News</h1>

      <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        {NewsOneList.map((news) => (
          <>
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={news.imgSrc}
                  width={424}
                  height={380}
                  alt={news.author}
                  className="rounded-lg w-full"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">{news.title}</h4>
                <p className="text-1_regular mb-3">{news.text}</p>
                <p className="text-1_medium mb-3">{news.author}</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <h1 className="label-1_bold mb-4 grnSec">News</h1>

      <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        {NewsTwoList.map((news) => (
          <>
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={news.imgSrc}
                  width={424}
                  height={380}
                  alt={news.author}
                  className="rounded-lg w-full"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">{news.title}</h4>
                <p className="text-1_regular mb-3">{news.text}</p>
                <p className="text-1_medium mb-3">{news.author}</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <h1 className="label-1_bold mb-4 grnSec">News</h1>

      <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        {NewsThreeList.map((news) => (
          <>
            <div className="w-100 rounded-md shadow-md p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={news.imgSrc}
                  width={424}
                  height={380}
                  alt={news.author}
                  className="rounded-lg w-full"
                />
              </div>
              <div>
                <h4 className="label-1_medium mb-3">{news.title}</h4>
                <p className="text-1_regular mb-3">{news.text}</p>
                <p className="text-1_medium mb-3">{news.author}</p>
                <p className="text-1_regular">May 20, 2023. 2 mins read</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

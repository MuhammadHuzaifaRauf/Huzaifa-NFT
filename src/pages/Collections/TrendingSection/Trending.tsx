import Box from "../../../components/trendingBox/Box";
import { useAppSelector } from "../../../redux/hooks/hooks";

export default function Trending() {
  const collections = useAppSelector((state) => state.collections.data);
  const randomNumber = Math.random() * collections?.length;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-[1046px] md:w-[768px] sm:w-[375px]">
          <div className="text-white py-5 text-[28px] font-semibold capitalize leading-[39.20px] ms-5 md:ms-10">
            Trending Collection
          </div>
          <div className="text-white text-base font-normal font-['Work Sans'] leading-snug ms-5 md:ms-10">
            Checkout our weekly updated trending collection.
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          {collections.slice(randomNumber, randomNumber + 3).map((e, i) => (
            <Box
              key={i}
              item={e}
              display={
                i === 0
                  ? "m-3"
                  : i === 1
                  ? "m-3 hidden md:block"
                  : "m-3 hidden lg:block"
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

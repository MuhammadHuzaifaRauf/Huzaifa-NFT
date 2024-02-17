// import DiscoverCard from "../../../components/discoverCard/DiscoverCard";
// import { useAppSelector } from "../../../redux/hooks/hooks";

// export default function Discover() {
//   const collections = useAppSelector((state) => state.collections.data);
//   const randomNumber = Math.random() * collections?.length;

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center  px-12 md:px-16 lg:px-18 sm:justify-center sm:items-center mt-40 ">
//         <div className="flex flex-col lg:w-[1040px] md:w-[315px] sm:w-[375px] justify-center sm:items-start ">
//           <div className=" text-white py-3 text-[32px] font-semibold capitalize leading-[39.20px] sm:ms-[-150px] lg:ms-4  ">
//             Discover More NFT's
//           </div>
//           <div className=" text-white text-base font-normal font-['Work Sans'] leading-snug mb-3 sm:ms-[-150px] lg:ms-4">
//             Explore new trending NFT's
//           </div>
//         </div>
//         <div className="w-100 flex flex-col sm:flex-row md:flex-row md:ms-4 ">
//           {collections.slice(randomNumber, randomNumber + 3).map((e, i) => (
//             <DiscoverCard
//               key={i}
//               item={e}
//               display={
//                 i === 0
//                   ? "m-3"
//                   : i === 1
//                   ? "m-3 hidden md:block"
//                   : i === 2
//                   ? "m-3 hidden lg:block"
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import DiscoverCard from "../../../components/discoverCard/DiscoverCard";
import { useAppSelector } from "../../../redux/store";

export default function Discover() {
  const collections = useAppSelector((state) => state.collections.data);
  const randomNumber = Math.random() * collections?.length;

  return (
    <>
      <div className="flex flex-col justify-center items-center  px-12 md:px-16 lg:px-18 sm:justify-center sm:items-center mt-40 ">
        <div className="flex flex-col lg:w-[1040px] md:w-[315px] sm:w-[375px] justify-center sm:items-start ">
          <div className=" text-white py-3 text-[32px] font-semibold capitalize leading-[39.20px] sm:ms-[-150px] lg:ms-4  ">
            Discover More NFT's
          </div>
          <div className=" text-white text-base font-normal font-['Work Sans'] leading-snug mb-3 sm:ms-[-150px] lg:ms-4">
            Explore new trending NFT's
          </div>
        </div>
        <div className="w-100 flex flex-col sm:flex-row md:flex-row md:ms-4 ">
          {collections.slice(randomNumber, randomNumber + 3).map((e, i) => (
            <DiscoverCard
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

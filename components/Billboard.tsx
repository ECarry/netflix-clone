import useBillboard from "@/hooks/useBillboard";
import React from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai'


const Billboard = () => {
  const { data, isLoading } = useBillboard();

  console.log('data', data);
  
  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="relative h-[56.25vh]">
      <video
        className="
          w-full
          h-[56.25vh]
          object-cover
          brightness-[60%]
        "
        autoPlay
        muted
        loop
        poster="http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg" 
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4">
      </video>
      <div
        className="
          absolute
          top-[30%]
          md:top-[40%]
          ml-4
          md:ml-16
        "
      >
        {/* TITLE */}
        <p 
          className="
            text-white
            text-xl
            md:text-5xl
            h-full
            w-[50%]
            lg:text-6xl
            font-bold
            drop-shadow-xl
          "
        >
          {data?.title}
        </p>
        {/* DESCRIPTION  */}
        <p
          className="
            text-white
            text-[8px]
            md:text-lg
            mt-3
            md:mt-8
            w-[90%]
            md:w-[80%]
            lg:w-[50%]
            drop-shadow-xl
          "
        >
          {data?.description}
        </p>
        {/* BUTTON  */}
        <div
          className="
            flex
            flex-row
            items-center
            mt-3
            md:mt-4
            gap-3
          "
        >
          <button
            className="
              flex
              flex-row
              items-center
              bg-white
              text-white
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              w-auto
              text-xs lg:text-lg
              font-semibold
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard;

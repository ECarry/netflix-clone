import React from "react";
import { useRouter } from "next/router";

import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;

  const { data } = useMovie(movieId as string)

  return (
    <div
      className="
        w-screen
        h-screen
        bg-black
      "
    >
      <nav
        className="
          fixed
          w-full
          p-4
          z-10
          flex
          flex-row
          items-center
          gap-8
          bg-black
          bg-opacity-80
          text-white
        "
      >
        <AiOutlineArrowLeft className="cursor-pointer" onClick={() => router.push('/')} size={30} />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="mr-1 font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        className="
          h-full
          w-full
        "
        autoPlay
        controls
        src={data?.videoUrl}
      >

      </video>
    </div>
  )
}

export default Watch;

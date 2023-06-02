import React from 'react';
import Image from 'next/image';

const YouTubeCard = ({
  videoUrl,
  imgSrc,
  imgAlt,
  videoTitle,
  guest,
  guestTitle,
  videoTime
}) => {
  return (
    <a href={videoUrl} target="_blank">
      <div class="py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
        <Image
          class="block mx-auto h-24 sm:mx-0 sm:shrink-0"
          src={imgSrc}
          alt={imgAlt}
          width={170}
          height={96}
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{videoTitle}</p>
            <p class="text-slate-500 font-medium">{guest}</p>
            <p class="text-slate-500 font-medium">{guestTitle}</p>
            <div class="px-4 py-1 text-sm whitespace-nowrap max-w-min text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
              &#9658; Watch ({videoTime})
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default YouTubeCard;

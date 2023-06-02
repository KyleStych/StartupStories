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
      <div class="p-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:space-y-0 sm:space-x-6 m-4 h-full">
        <div class="sm:flex justify-between h-full">
          <Image
            class="mx-auto h-24 sm:mx-0 sm:shrink-0"
            src={imgSrc}
            alt={imgAlt}
            width={170}
            height={96}
          />
          <div class="text-center sm:text-left ml-4 flex flex-col sm:h-full">
            <div class="flex flex-col">
              <p class="text-lg text-black font-semibold min-h-[50px]">
                {videoTitle}
              </p>
              <p class="text-slate-500 font-medium">{guest}</p>
              <p class="text-slate-500 font-medium">{guestTitle}</p>
            </div>
            <div class="flex justify-center sm:justify-start mt-3 sm:mt-auto">
              <div class="px-4 py-1 text-sm whitespace-nowrap max-w-min text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
                &#9658; Watch ({videoTime})
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default YouTubeCard;

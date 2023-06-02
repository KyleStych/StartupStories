import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ name, imgSrc, title, url, bio }) => {
  return (
    <div class="bg-slate-50 py-8 px-4 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-start sm:space-y-0 sm:space-x-6 m-4">
      <div class="text-center sm:text-left h-full">
        <div class="flex flex-col sm:flex-row h-full">
          <Image
            class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 bg-slate-400"
            src={imgSrc}
            alt="Tyler Hilbert Computer Engineering"
            width={96}
            height={96}
          />
          <div class="flex flex-col gap-y-1 sm:w-2/5 md:w-1/5 lg:w-2/5 sm:pl-4 mb-4 sm:mb-0 sm:h-3/5 ">
            <p class=" text-slate-700 font-semibold text-lg leading-none pt-4">
              {name}
            </p>
            <p class="text-slate-400 font-medium text-sm leading-none pt-0.5 pl-1">
              {title}
            </p>
            <div class="sm:ml-0 mt-auto pt-2">
              <a
                href={url}
                class="mt-3 sm:mt-0 px-4 py-1 mx-auto sm:ml-0 max-w-max text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Linked In
              </a>
            </div>
          </div>
          <div class="sm:w-3/5 text-justify px-5 sm:px-0 md:pl-2">{bio}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

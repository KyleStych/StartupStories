'use client';
import ProfileCard from './Components/ProfileCard';
import YouTubeCard from './Components/YouTubeCard';
import { useEffect, useState } from 'react';
import { profileData } from '../assets/profileData';
// import { youTubeData } from '../assets/youTubeData';
import sampleGetData from '../helpers/sampleGetData';

export default function Home() {
  const [youTubeData, setYouTubeData] = useState([]);

  useEffect(() => {
    const youTubeResponse = sampleGetData();
    setYouTubeData(youTubeResponse);
  }, [youTubeData]);

  return (
    <main className="max-w-screen-xl m-auto px-3">
      <h1 class="text-3xl font-bold m-4 text-center">Startup Stories</h1>

      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {profileData.map(p => (
          <ProfileCard
            name={p.name}
            imgSrc={p.imgSrc}
            title={p.title}
            url={p.url}
            bio={p.bio}
            key={p.name}
          />
        ))}

        <div class="bg-slate-50 py-8 px-4 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
          <div class="text-center sm:text-left">
            <div class="flex sm:flex-row flex-col">
              <div class="flex flex-col gap-y-1 sm:px-8 mb-4">
                <h2 class=" text-slate-700 font-semibold text-xl leading-none mt-4">
                  Learn how to acquire your first customer
                </h2>
                <p class="text-slate-400 font-medium text-md leading-none text-justify px-2">
                  The Startup Stories podcast is hosted by Tyler Hilbert and
                  Molly Hoying. These budding entrepreneurs have the goal to
                  give successful founders the opportunity to share lessons
                  they&apos;ve learned to those aspiring to follow in their
                  footsteps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-3xl font-bold m-4 pt-12 pb-0 pl-4 mb-0">Episodes</h3>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-12">
        {youTubeData.map(v => (
          <YouTubeCard
            videoUrl={v.videoUrl}
            imgSrc={v.imgSrc}
            imgAlt={v.imgAlt}
            videoTitle={v.videoTitle}
            guest={v.guest}
            guestTitle={v.guestTitle}
            videoTime={v.videoTime}
            key={v.guest}
          />
        ))}
      </div>
    </main>
  );
}

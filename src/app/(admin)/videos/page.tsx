import React from 'react';
import Image from 'next/image'
import pic8 from '../../../../public/pic8.jpg'


const VideoPage = () => {
  const video = [
    {
      id: 1,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
    {
      id: 2,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
    {
      id: 3,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
    {
      id: 4,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
    {
      id: 5,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
    {
      id: 6,
      src: "/pic8.jpg",
      title: "You should know(Behind the scenes)"
    },
  ]

  return (
    <>
      <div className='flex  flex-row  gap-x bg-black color-white text-white m-16 w-40 h-10 rounded justify-center'>
        <span className='mt-2 mr-3 font-bold'>+</span>
        <button className='font-bold'>Add new video</button>
      </div>
      
      <p className='font-bold m-16 top-0 '>List of posted videos</p>

      <div className='grid grid-cols-3 gap-4 ml-16'>
        {video.map((video, index) => (
          <div key={index} className='relative'>
            <Image src={video.src} alt="id" width={300} height={200} className='rounded-[12px] relative bg-black  z-1' />
            <div className='absolute inset-x-0 bottom-0 flex flex-col justify-center items-center bg-grey w-[300px] h-[100px] rounded-b-[12px] z-0'>
              <p className='text-white text-center pt-2 pr-11 font-bold font-size'>{video.title}</p>
              <button></button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoPage;

import React from 'react';
import Image from 'next/image'
import pic8 from '../../../../public/pic8.jpg'

const VideoPage = () => {
  const video = [
    {
      id: 1,
      video: pic8,
      title: "you should know"
      }
  ]
  return (
    <>
      <div className='flex  flex-row  gap-x bg-black color-white text-white m-16 w-40 h-10 rounded justify-center'>
        <span className='mt-2 mr-3 font-bold'>+</span>
        <button className='font-bold'>Add new video</button>
      </div>
      
      <p className='font-bold m-16 top-0 '>List of posted videos</p>
      {video.map((video, index) => (
        <div className='ml-16 relative w-auto' key={index}>
          <Image src="/pic8.jpg" alt="id" width={250} height={10} className='rounded-[12px] relative bg-black  z-1' />
          <div className='absolute  z-0 h-50%  bottom-10 flex items-center justify-center relative bg-grey'>
          <p className=' mt-30  text-align-center absolute text-white'>You should know</p>
        </div>
        </div>
      
      ))}
       
      
    </>
  );
};

export default VideoPage;


// relative z-1 transform -translate-x-1/2 -translate-y-1/2  left-1/2 pt-96 h-1/2 text-sm  ml-2/3 mr-1/2
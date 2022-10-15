import React from 'react';
import Image from 'next/image.js';

export const Section = (
  {color,height,text,title,subTitle,reverb,box,img,alt}
  ) => {
  return (
    <div className={
    `${box ?'w-[85%]':'w-[100%]'} 
      min-h-[500px] px-[20px] py-[24] pb-[color=='#084526' ? '20px' : '90px']
      mx-[auto] my-0 font-sans-serif bg-[${color}]
      shadow-sm shadow-[${color=='#084526'? '0px 4px 10px #1d1d1d':'none'}]
      z-[${color=='#084526'? '2':'0'}]`
      }>

      <div className={`
          flex
          w-[${color=='#084526' ? '300px':'400px'}]
          decoration-[${color=='#084526' ? 'white':'#4d4b4b'}]   
          flex-[${reverb?'row-reverse':'row'}]
          border-t border-b border-[#D7B34C]
          justify-around self-center text-left gap-8
          md:flex-column !h-auto
        `}>
          <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <div>{text}</div>
          </div>
        {color=='#084526' ? '' :
        <div className='shadow h-80 w-[820]
          rounded-sm justify-between bg-white
          bg-center bg-cover relative md:w-80
        '>
          <Image
            src={img}
            objectFit={'cover'}
            layout='fill'
            className='!relative rounded-sm'
            alt={alt}
          />
        </div>}
      </div>
    </div>
  )
}

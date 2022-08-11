import Link from 'next/link'
import React from 'react'

export default function CourseCard({data}) {
  console.log(data)
  console.log(data.subCategoryAccent.hex)
  return (
    <div className='col-span-1 relative bg-white p-5 shadow-sm rounded-md'>
      <div className='h-50 overflow-hidden'>
        <img className='hover:scale-[110%] transition-all' width='100%' src={data.thumbnail?.url}/>
      </div>
      <div className='relative'>
        <Link href={`/course/${data.slug}`}>
          <div className='bg-[#f16126] hover:cursor-pointer hover:shadow-lg transition-all border-4 border-white font-[Barlow] absolute h-16 w-16 rounded-full -top-8 right-5 flex justify-center items-center font-bold text-white text-xl'>
            <i className="icofont-download"></i>
          </div>
        </Link>
        <div className='px-4 pt-8'>
          <div className='space-x-3'>
            <span style={{backgroundColor: data.subCategoryAccent.hex}} className={` text-white px-2 py-1 rounded-md`}><span><i className="icofont-diamond"></i></span> </span>
            <span className='text-[#f16126]'>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
              <i className="icofont-star"></i>
            </span>
            <span>{data.reviews} Reviews</span>
          </div>
          <Link href={`/course/${data.slug}`}>
            <h1 className='font-bold text-2xl my-2 text-[#101115] hover:text-[#f16126] transition-all cursor-pointer'>{data.title}</h1>
          </Link>
          <div className='flex justify-between'>
            <span><i className="icofont-video-alt mr-2 text-[#f16126]"></i>{data.lesson} Lesson</span>
            <span><i className="icofont-signal mr-2 text-[#f16126]"></i>Online Class</span>
          </div>
          <div className='border-t my-4 '></div>
          <div className='flex justify-between items-center'>
            <Link href={`/author/${data.author?.slug}`}>
              <div className='flex items-center'>
                <img src={data.author.photo?.url} className='h-10 rounded-full'/>
                <h2 className='ml-3 text-lg font-medium'>{data.author.name}</h2>
              </div>
            </Link>
            <Link href={`/course/${data.slug}`}>
              <span className='font-medium hover:text-[#f16216] transition-all cursor-pointer'>
                Read More<i className="icofont-external-link text-[#f16216] ml-2"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

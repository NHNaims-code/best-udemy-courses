import React from 'react'
import Link from 'next/link'

export default function AuthorCard({data}) {
  return (
    <div>
      <div className="shadow rounded p-4 bg-white flex flex-col md:flex-row items-center md:items-start border-r-8 border-[#f16126]">
        <div>
          <img className='rounded-lg' src={data.author?.photo.url}/>
        </div>
        <div className='ml-0 md:ml-4'>
          <h1 className='text-2xl'>{data.author.name}</h1>
          <div className='md:space-x-4 mt-4 flex flex-col justify-start md:block'>
            <Link href='#'>
              <span  className='hover:shadow-md hover:cursor-pointer transition-all bg-green-500 text-white px-4 py-2 rounded-sm'><i className="icofont-web"></i> Website</span>
            </Link>
            <Link href='#'>
              <span className='hover:shadow-md hover:cursor-pointer transition-all bg-blue-500 text-white px-4 py-2 rounded-sm'><i className="icofont-facebook"></i> Facebook</span>
            </Link>
            <Link href='#'>
              <span className='hover:shadow-md hover:cursor-pointer transition-all bg-blue-400 text-white px-4 py-2 rounded-sm'><i className="icofont-twitter"></i> Twitter</span>
            </Link>
            <Link href='#'>
              <span  className='hover:shadow-md hover:cursor-pointer transition-all bg-red-500 text-white px-4 py-2 rounded-sm'><i className="icofont-youtube-play"></i> Youtube</span>
            </Link>
          </div>
          <div className='mt-4'>
            <div><i className="icofont-group-students text-blue-500"></i> Total Students: <b>{parseInt(data.author.totalStudents || 0).toLocaleString()}</b></div>
            <div><i className="icofont-star text-orange-500"></i> Total Reviews: <b>{parseInt(data.author.totalReviews || 0).toLocaleString()}</b></div>
          </div>
          <div className='mt-8'>
            <span className='bg-[#f16126] text-white font-semibold px-4 py-1 rounded-lg'><i className="icofont-crown"></i> Author</span>
          </div>
        </div>
      </div>
    </div>
  )
}

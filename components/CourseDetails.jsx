import React from 'react'
import parse from 'html-react-parser'

export default function CourseDetails({data}) {
  const content = parse(data?.content.html)
  return (
    <div>
      <h1 className='text-3xl md:text-5xl'>{data.title}</h1>
      <h2>by <span className='underline'>{data.author.name}</span></h2>
      <img className='my-4' width='100%' src={data.thumbnail.url}/>
      <div id='content'>{content}</div>
    </div>
  )
}

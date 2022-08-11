import React from 'react'
import { AuthorCard, CourseDetails } from '../../components'
import { getPostDetails, getPosts } from '../../services'

export default function PostPage({post}) {
  console.log({post})
  return (
    <div className='grid grid-cols-3 gap-8 px-4 md:px-0'>
      <div className='col-span-3 md:col-span-2'>
        <CourseDetails data={post}/>
        <AuthorCard data={post}/>
        <div className='mt-8 flex justify-center'>
          <span className='bg-green-500 text-center shadow-md text-white w-full px-4 py-2'>Get Access</span>
        </div>
      </div>
      <div className="col-span-1">
        Ads
      </div>
    </div>
  )
}


export async function getStaticProps({ params }) {
  console.log(params.slug)
  const data = await getPostDetails(params.slug)
  console.log(data)

  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(post => ({params: {slug: post.node.slug}})),
    fallback: false
  }
}
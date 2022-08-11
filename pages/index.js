import Head from 'next/head'
import Image from 'next/image'
import { CourseCard, Header } from '../components'
import { getPosts } from '../services'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {
        posts.map((post, index) => (
          <CourseCard key={index} data={post.node}/>
        ))
      }
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || []
  return {
    props: {
      posts
    }
  }
}
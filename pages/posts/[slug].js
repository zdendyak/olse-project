import { createClient } from 'contentful'
import Post from '../component/Post'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: 'post'
  })

  const paths = response.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context) {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': context.params.slug
  })

  return {
    props: {
      post: items[0]
    }
  }

}

export default function PostDetails({ post }) {
  
  return (
    <Post post={post} />
  )
}

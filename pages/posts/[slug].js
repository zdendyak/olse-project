import { createClient } from 'contentful'
import Fallback from '../../components/Fallback'
import Post from '../../components/Post'
import Sidebar from '../../components/Sidebar'

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
        slug: item.fields.slug,
        items: response.items
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps (context) {
  const { items } = await client.getEntries({
    content_type: 'post',
    // 'fields.slug': context.params.slug
  })

  const post = items.find(item => item.fields.slug === context.params.slug)

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      post,
      items
    },
    revalidate: 60
  }

}

export default function PostDetails({ post, items }) {
  if (!post) return <Fallback />

  return (
    <div className="blog-page-wrapper">
      <div className="primary">
        <div className="primary-content">
          <Post post={post} />
        </div>
      </div>
      <div className="secondary">
        <Sidebar items={items} current={post.fields.slug} />
      </div>

      <style jsx>{`
        .blog-page-wrapper {
          border-radius: 3px;
          margin: 0 auto;
          position: relative;
          width: 870px;
        }

        .primary {
          float: right;
          margin: 0 0 0 -282px;
          width: 100%;
        }

        .primary-content {
          margin: 0 0 0 282px;
        }

        .secondary {
          float: left;
          padding: 71px 30px 30px;
          width: 222px;
          background-color: #030930;
          height: 100%;
        }

      `}</style>
    </div>
  )
}

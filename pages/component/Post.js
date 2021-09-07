import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Post({ post }) {
  const { title, slug, thumbnail, content, tags } = post.fields
  const date = new Date(post.sys.createdAt).toLocaleString('uk-UA')

  return (
    <article className="post">
      <header className="post-header">
        <div className="post-meta">{date}</div>
        <div className="post-title">
          <Link href={'/posts/' + slug}>
            <a>{title}</a>
          </Link>
        </div>
      </header>
      <div className="post-body">
        <Image
          className="post-thumb"
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt=''
        />
        <div className="post-content">{documentToReactComponents(content)}</div>
      </div>
      <footer className="post-meta">
        { Array.isArray(tags) ? tags.map(tag => (
          <span key={tag}>{tag}</span>
        )) : null }
      </footer>

      <style jsx>{`
        .post {
          border-top: 1px solid #ccc;
          padding: 0 0 59px;
        }
        .post:first-child {
          border-top: none;
        }
        .post-header {
          border-left: 6px solid #497ca7;
          margin: 0 0 47px 24px;
          padding: 0 30px 0 14px;
        }
        .post-meta {
          letter-spacing: 1px;
          line-height: 1em;
          margin: 0 0 2px;
          padding: 55px 0 0;
          text-transform: uppercase;
          clear: both;
          color: #777;
          display: block;
          font-size: 11px;
          line-height: 22px;
          text-shadow: 1px 1px 0 #fff;
        }
        .post-title {
          color: #0b0e18;
          font: 300 22px/22px Ubuntu,sans-serif;
          text-shadow: 1px 1px 0 rgb(255 255 255);
          word-wrap: break-word;
        }
        .post-body {
          padding: 0 30px 0 44px;
          width: 474px;
        }
      `}</style>
    </article>
  )
}

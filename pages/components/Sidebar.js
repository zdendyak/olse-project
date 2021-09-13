import Link from "next/link";

export default function Sidebar({ items, current }) {
  return (
    <div className="sidebar">
      <div className="sidebar-blog-entries">
        <div className="sidebar-title">Posts</div>
        <ul className="sidebar-items">
          {items.map(item => (
            <li className="sidemenu-item" key={item.sys.id}>
              <Link href={'/posts/' + item.fields.slug}>
                <a className={current === item.fields.slug ? 'active' : ''}>{item.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>

      </div>
      <style jsx>{`
        .sidebar {
          
        }

        .sidebar-blog-entries {
          color: #ccc;
          display: block;
          font-size: 11px;
          line-height: 22px;
          margin: 0 0 25px;
        }

        .sidebar-title {
          border-bottom: 1px solid #252832;
          color: #fff;
          font: 700 13px/22px Ubuntu,sans-serif;
          margin: 0 0 11px;
          padding: 0 0 11px 18px;
          text-transform: uppercase;
        }

        .sidebar-items {
          list-style: disc;
          margin: 0 0 22px 0;
        }

        .sidebar-items a {
          color: #497ca7;
          text-decoration: none;
          font-weight: 600;
          font-size: 12px;
        }

        .sidebar-items a.active {
          font-weight: 900;
        }

      `}</style>
    </div>
  )
}

import Link from 'next/link';

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <header className="page-header">
        <Link href="/">
          <a><h1>OLSE Project</h1></a>
        </Link>
        <div className="page-links">
          <Link href="/">
            <a><h3>Blog</h3></a>
          </Link>
          <Link href="/about">
            <a><h3>About</h3></a>
          </Link>
        </div>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021</p>
      </footer>
    <style jsx>{`
      .layout {
        border-radius: 3px;
        margin: 0 auto;
        position: relative;
        width: 870px;
      }
      .page-header {
        display: flex;
        justify-content: space-between;
      }

      .page-links {
        display: flex;
      }

      .page-links a {
        margin: 0.67em 10px;
        line-height: 2.0em;
      }
    `}</style>
    </div>
  );
}
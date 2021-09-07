import Link from 'next/link';

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <header className="page-header">
        <Link href="/">
          <a><h1>OLSE Blog</h1></a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  );
}

export default function Fallback() {
  return (
    <article className="fallback">
      <div className="fallback-meta"></div>
      <div className="fallback-title"></div>
      
      <div className="fallback-content"></div>
      <div className="fallback-content"></div>
      <div className="fallback-meta"></div>

      <style jsx>{`
      .fallback {
        border-top: 1px solid #ccc;
        padding: 0 0 59px;
        max-width: 600px;
      }

      .fallback > div {
        background-color: #ccd;
        border-radius: 4px;
        margin: 20px 0;
      }
    
      .fallback-meta {
        padding: 20px 0 0;
      }
      
      .fallback-title {
        max-width: 474px;
        padding: 30px 0;
      }
      .fallback-content {
        padding: 100px 0;
      }
      `}</style>
    </article>
  )
}

import pages from './../assets/pages.json';
import './../home.css'; // importar css

function Content({ pindex }) {
  const spage = pages[pindex];
  return (
    <div className="content-container">
      <h2 className="content-title">{spage.title}</h2>
      <p className="content-text">{spage.text}</p>
    </div>
  );
}

export default Content;

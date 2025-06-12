import pages from './../assets/pages.json';
import './../home.css'; // importar css



function Content({ pindex }) {
  const spage = pages[pindex];
  function Image({img}) {
    if (spage.img!='') {
      return (<img src={spage.img} alt="" className='content-image' />)
    }
  }

  return (
    <div className="content-container">
      <h2 className="content-title">{spage.title}</h2>
      <Image />
      {spage.text.split('\n\n').map((paragraph, i) => (
        <p key={i} style={{ marginBottom: '1em' }} className='content-text'>{paragraph}</p>
      ))}
      
    </div>
  );
}

export default Content;

import pages from './../assets/pages.json';
import Header from './../components/header.jsx';
import Content from './../components/content.jsx';

function Home({ pindex }) {
  return (
    <>
      <Header />
      <Content pindex={pindex} />
    </>
  );
}

export default Home;

import pages from './../assets/pages.json';
import { useNavigate } from 'react-router-dom';
import './../home.css'; // importar css

function Header() {
  const navigate = useNavigate();

  function Navigate(link) {
    navigate('/' + link);
  }

  return (
    <>
      <h1 className="header-title">Citologia</h1>
      <nav className="navButtons">
        {pages.map((page, index) => (
          <button
            key={index}
            className="header-button"
            onClick={() => Navigate(page.link)}
          >
            {page.title}
          </button>
        ))}
      </nav>
      <hr />
    </>
  );
}

export default Header;

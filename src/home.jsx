import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import pages from './assets/pages.json';

function App() {
  return (
    <Routes>
      {pages.map((page, index) => (
        <Route
          key={index}
          path={'/' + page.link}
          element={<Home pindex={index} />}
        />
      ))}
    </Routes>
  );
}

export default App;

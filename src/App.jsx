import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/views/Home.jsx';
import APOD from './components/views/APOD.jsx';
import Asteroids from './components/views/Asteroids.jsx';
import GeomagneticStorm from './components/views/GeomagneticStorm.jsx';


function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<APOD />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/storm" element={<GeomagneticStorm />} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
  
}

export default App

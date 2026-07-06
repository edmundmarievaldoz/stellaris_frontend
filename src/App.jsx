import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';


function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/apod" element={<div>APOD Page</div>} />
          <Route path="/asteroids" element={<div>Asteroids Page</div>} />
          <Route path="/mars" element={<div>Mars Page</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
  
}

export default App

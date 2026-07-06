import Layout from './components/views/Layout.jsx';
import Header from './components/views/Header.jsx';

function App() {
  return (

    <Layout>
      <Header />

        <main>
          <p>This is the main content area.</p>
        </main>

        <footer>
          <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>

      </Layout>
  )
  
}

export default App

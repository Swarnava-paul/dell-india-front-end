
import './App.css'

// allroute
import AllRoutes from './routes/Allroutes';

//components -->
import { 
  Navbar ,
  Footer } 
from './components/Exports.components';
// <-- components

function App() {

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App

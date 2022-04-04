 
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import TeachersScreen from './screens/TeachersScreen'
import StudentsScreen from './screens/StudentsScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
           <Route path='/'component= {HomeScreen} exact/>
           <Route path='/teachers'component= {TeachersScreen} />
           <Route path='/students'component= {StudentsScreen} />
        </Container>
      </main>
 
     <Footer/>
     </Router>
  );
}

export default App;

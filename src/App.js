 
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import TeachersScreen from './screens/TeachersScreen'
import StudentsScreen from './screens/StudentsScreen'
import LoginScreen from './screens/LoginScreen'
import MainScreen from'./screens/MainScreen'
import OneStudentForm from './screens/OneStudentForm'
import EnrollStudent from './screens/EnrollStudent'
import OneAddTeacher from './screens/OneAddTeacher'
import TwoAddTeacher from './screens/TwoAddTeacher'
import FinalizeEnrollment from './screens/FinalizeEnrollment'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen}/>
           <Route path='/teachers'component= {TeachersScreen} />
           <Route path='/students'component= {StudentsScreen} />
           <Route path='/dashboard'component= {MainScreen} exact />
           <Route path='/onestudentform'component= {OneStudentForm} exact />
           <Route path='/enrollstudent'component= {EnrollStudent} exact />
           <Route path='/oneaddteacher'component= {OneAddTeacher} exact />
           <Route path='/twoaddteacher'component= {TwoAddTeacher} exact />
           <Route path='/finalize_enrollment'component= {FinalizeEnrollment} exact />
           <Route path='/'component= {HomeScreen} exact/>
        </Container>
      </main>
 
     <Footer/>
     </Router>
  );
}

export default App;

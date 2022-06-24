import React from 'react'
import {Row,Col} from 'react-bootstrap'
///import students from '../students'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import BootstrapTable from 'react-bootstrap-table-next'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar} = Search;
 

const StudentsScreen = ({history}) => {
  const dispatch=useDispatch()
  const [students,setStudents] = useState([])
  const userDetails=useSelector((state)=>state.userDetails)
  const {loading , error, user} = userDetails

//  const {loading , error, user} = userDetails
  const userLogin = useSelector((state)=>state.userLogin )
  const {userInfo} = userLogin

  useEffect(()=>{
    const fetchStudents= async () => { 
      const {data} = await axios.get('/api/students')

     setStudents(data) 
    }
   fetchStudents()
  },[])

  useEffect(()=>{
    if(!userInfo){
        history.push ('/login')
    }else{
        if(!user.name){
            dispatch(getUserDetails('profile'))
        }else{

        }
    }
},[dispatch,history,userInfo ])
 
  const columns =[
    {
      dataField:"_id",
      text:"id"

    },
    {
      dataField:"firstName",
      text:"First Name"

    },

    {
    dataField:"lastName",
    text:"Last Name"

    },
    {
        dataField:"grade",
        text:"Grade"
    
        }
  ]

  return (
    <>
    <h1>Students</h1>
      
    <ToolkitProvider
      keyField="id"
      data={ students }
      columns={ columns }
      search ={ {defaultSearch:''}}
    >
          {
              props => (
                <div>
                  
                  <SearchBar { ...props.searchProps } />
                  {/* <ClearSearchButton { ...props.searchProps } /> */}
                  <hr />
                  <BootstrapTable
                    { ...props.baseProps }
                  />
                </div>
              )
            }
      </ToolkitProvider>


    </>
  )
}

export default StudentsScreen
import React from 'react'
import {Row,Col} from 'react-bootstrap'
///import students from '../students'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar} = Search;
 

const StudentsScreen = () => {
 
  const [students,setStudents] = useState([])

  useEffect(()=>{
    const fetchStudents= async () => { 
      const {data} = await axios.get('/api/students')

     setStudents(data) 
    }
   fetchStudents()
  },[])
 
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
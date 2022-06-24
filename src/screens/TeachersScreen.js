import React from 'react'
import {Row,Col} from 'react-bootstrap'
import teachers from '../teachers'
import axios from 'axios'
import {useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch,useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar} = Search;



const TeachersScreen = ({history}) => {
  const dispatch=useDispatch()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   getData()
  // },[])
  
  // const getData=()=>{
  //   axios(teachers).then((res)=>{setData(res.data)
  // });
  const userDetails=useSelector((state)=>state.userDetails)
  const {loading , error, user} = userDetails

 
  const columns =[
    {
      dataField:"_id",
      text:"id"

    },
    {
      dataField:"firstName",
      text:"Name"

    }
  ]
  const userLogin = useSelector((state)=>state.userLogin )
  const {userInfo} = userLogin
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
  return (
    <>
    <h1>Teachers</h1>
      
    <ToolkitProvider
      keyField="id"
      data={ teachers }
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

export default TeachersScreen
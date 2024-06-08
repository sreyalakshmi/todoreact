import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const[todos,changetodos]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          console.log(response.data)
          changetodos(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">complete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(
        (value,index)=>{
            return <tr>
            <td scope="row"></td>
            <td>{value.userId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.completed}</td>
          </tr>
        }
    )}
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll
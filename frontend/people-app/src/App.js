import React,{useState, useEffect} from 'react'
import People from './components/People'
import apiConnection from './api/connect'
import AddPerson from './components/AddPerson'

const App = () => {

  let peopleList = [{
    owner_name: "Alice",
    age: 28,
    location: "New York",
    pet_id: 5
  },
  {
    owner_name: "Bob",
    age: 34,
    location: "San Francisco",
    pet_id: 3
  },
  {
    owner_name: "Charlie",
    age: 45,
    location: "Los Angeles",
    pet_id: 1
  },
  {
    owner_name: "David",
    age: 29,
    location: "Chicago",
    pet_id: 2
  },
  {
    owner_name: "Eva",
    age: 50,
    location: "Miami",
    pet_id: 4
  }]

  let [list,setList] = useState([])

  useEffect(()=>{
    getPeople()
  }, [])

  function getPeople(){

    apiConnection.get('/people')
    .then(response =>{
      console.log(response.data)
      setList(response.data)
    })
    .catch( error =>{
      console.log(error)
    })

  }

  function addPeople(info){

    apiConnection.post('/people', info)
    .then(response =>{
      console.log(response)
      getPeople()
    })
    .catch(error =>{
      console.log(error)
    })
  }

  function deletePeople(id){

    apiConnection.delete(`/people/${id}`)
    .then(response =>{
      console.log(response)
      getPeople()
    })
  }

  function editPerson(id, info){

    apiConnection.put(`/people/${id}`, info)
    .then(response =>{
      console.log(response)
      getPeople();
    })
    .catch(error =>{
      console.log(error)
    })

  }

  return (
    <>
    
    <h1>Welcome to my People's App</h1>

    <AddPerson addPeople={addPeople}/>
    <People peopleList={list} deletePeople={deletePeople} editPerson={editPerson}/>

    
    </>
  )
}

export default App
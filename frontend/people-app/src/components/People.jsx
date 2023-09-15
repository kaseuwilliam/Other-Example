import React from 'react'
import DeleteButton from './DeleteButton'
import EditPerson from './EditPerson'; 

const People = ({peopleList, deletePeople, editPerson }) => {
  return (
    <>
    
    {peopleList.map(person =>{

        return (
            <div key={peopleList.id}>
            
            <h2>Name: {person.owner_name}</h2>
            <h3>Location: {person.location}</h3>
            <p>The person's age is {person.age}, their ID is {person.id} and their pet's ID is {person.pet_id}</p>
            <DeleteButton deletePeople={deletePeople} id={person.id}/>
            <br />
            <br />
            <EditPerson person={person} editPerson={editPerson} id={person.id}/>  {/* Add the edit component here */}
            <hr />
            </div>
        )
    })}
    
    
    </>
  )
}

export default People
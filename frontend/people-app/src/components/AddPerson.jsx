import React, {useState} from 'react'

const AddPerson = ({addPeople}) => {
  
    const [person, setPerson] = useState({
        owner_name: "",
        age: "",
        location: "",
        pet_id: ""
    })
  
    function handleChange(e){

        setPerson(previous =>{

            return {...previous, owner_name:e.target.value}
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        addPeople(person)
        setPerson({
            owner_name: "",
            age: "",
            location: "",
            pet_id: ""
        })
    }

    return (
    <>
    
    <h2>Please add a person to this list of people</h2>
    <form onSubmit={handleSubmit}>

        <input 
        type="text"
        placeholder="Name"
        value={person.owner_name}
        onChange={handleChange} />

        <input 
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={e=>{ setPerson(previous =>{
            return {...previous, age: e.target.value}
        })}} />

        <input 
        type="text"
        placeholder="Location"
        value={person.location}
        onChange={e=>{ setPerson(previous =>{
            return {...previous, location: e.target.value}
        })}}/>

        <input 
        type="number"
        placeholder="Pet ID"
        value={person.pet_id}
        onChange={e=>{ setPerson(previous =>{
            return {...previous, pet_id: e.target.value}
        })}} />

        <button>Add Person</button>

    </form>
    
    </>
  )
}

export default AddPerson
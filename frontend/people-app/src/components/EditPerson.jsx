// EditPerson.jsx

import React, { useState } from 'react';

const EditPerson = ({ person, editPerson, id }) => {
  const [info, setInfo] = useState({
    id: id,
    owner_name: person.owner_name,
    age: person.age,
    location: person.location,
    pet_id: person.pet_id
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editPerson(person.id, info);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="owner_name"
        value={info.owner_name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="age"
        type="number"
        value={info.age}
        onChange={handleInputChange}
        placeholder="Age"
      />
      <input
        name="location"
        value={info.location}
        onChange={handleInputChange}
        placeholder="Location"
      />
      <input
        name="pet_id"
        type="number"
        value={info.pet_id}
        onChange={handleInputChange}
        placeholder="Pet ID"
      />
      <button type="submit">Edit Person</button>
    </form>
  );
}

export default EditPerson;

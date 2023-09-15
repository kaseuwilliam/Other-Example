import React from 'react'

const EditButton = ({boolean, setBoolean}) => {

function handleOnClick(){
    setBoolean(!boolean)
}

  return (
    <button onClick={handleOnClick}>Edit Person</button>
  )
}

export default EditButton
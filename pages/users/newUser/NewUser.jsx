import React, { useState } from 'react'

const NewUser = ({createNewUser}) => {

  const [newUserState, setNewUserState] = useState({nombre:'',ident: 0,fechanacimiento:''})

  const cambioValor = (event) => {
    setNewUserState({...newUserState, [event.target.name]:event.target.value})
  }
  const addUser = (e, {nombre,ident,fechanacimiento}) => {
    e.preventDefault();
    const infoPost = {data:{nombre, identificacion:(Number(ident)),fechanacimiento }}
    createNewUser(infoPost);
  }
  return (
    <>
    <h1 className='titulo'>Nuevo usuario</h1>
      <div className='containerGetUsers'>
        <input type="text" name="nombre" className='inputNewUser' value={newUserState.nombre} onChange={cambioValor} />
        <input type="number" name="ident" className='inputNewUser' value={newUserState.ident} onChange={cambioValor} />
        <input type="date" name="fechanacimiento" className='inputNewUser' value={newUserState.fechanacimiento} onChange={cambioValor} />
        <button className='inputNewUser' onClick={(e)=>addUser(e, newUserState)}>Crear</button>
      </div>
    </>
  )
}
export default NewUser;
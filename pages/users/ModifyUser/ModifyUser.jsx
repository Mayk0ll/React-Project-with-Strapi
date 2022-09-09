import React, { useState } from 'react'

const ModifyUser = ({modifyUsers, modifyUser}) => {

  const [modifyUserState, setModifyUserState] = useState({nombre:modifyUsers.attributes.nombre, ident: Number(modifyUsers.attributes.identificacion), fechanacimiento:modifyUsers.attributes.fechanacimiento})


  const cambioValor = (event) => {
    setModifyUserState({...modifyUserState, [event.target.name]:event.target.value})
  }
  const changeinfo = (e, {nombre,ident,fechanacimiento}) => {
    e.preventDefault();
    const id = modifyUsers.id;
    const infoPost = {data:{nombre: nombre, identificacion:(Number(ident)), fechanacimiento:fechanacimiento }}
    modifyUser(id, infoPost);
  }
  return (
    <>
    <h1 className='titulo'>Modificar usuario</h1>
      <div className='containerGetUsers'>
        <input type="text" name="nombre" className='inputNewUser' value={modifyUserState.nombre} onChange={cambioValor} />
        <input type="number" name="ident" className='inputNewUser' value={modifyUserState.ident} onChange={cambioValor} />
        <input type="date" name="fechanacimiento" className='inputNewUser' value={modifyUserState.fechanacimiento} onChange={cambioValor} />
        <button className='inputNewUser' onClick={(e)=>changeinfo(e, modifyUserState)}>Modificar</button>
      </div>
    </>
  )
}
export default ModifyUser;
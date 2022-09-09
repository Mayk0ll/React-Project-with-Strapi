import React from 'react'
import '../../../styles/Home.module.css'

const GetUsers = ({users, deleteUser, modifyUs}) => {

  const deleteUs = (id) => {
    // console.log(id)
    deleteUser(id)
  }
  const modifyUser = (info) =>{
    modifyUs(info)
  }

  return (
    <>
      <h1 className='titulo'>Lista de usuarios</h1>
      <div className='containerGetUsers'>
        {        
          users?.map((element) => {
            return (
              <div key={element.id} className='containerUser'>
              <p>Nombre: {element.attributes.nombre}</p>
              <p>Identificacion: {element.attributes.identificacion}</p>
              <p>Fecha nacimiento: {element.attributes.fechanacimiento}</p>
              <div>
                <button className='btnUser' onClick={() => modifyUser(element)}>Modificar</button>
                <button className='btnUser' onClick={() => deleteUs(element.id)}>Eliminar</button>
              </div>
            </div>
          )})
        }
      </div>
    </>
  )
}

export default GetUsers
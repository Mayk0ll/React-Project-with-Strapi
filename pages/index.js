import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GetUsers from './users/getUsers/GetUsers.jsx'
import NewUser from './users/newUser/NewUser.jsx'
import ModifyUser from './users/ModifyUser/ModifyUser.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Home() {

  const [allUsers, setAllUsers] = useState([])
  const [modifyUsers, setModifyUsers] = useState('')

  const modifyUs = (info) => {
    setModifyUsers({...info})
  }

  const getAllUsers = async () => {
    try {
      const result = await axios.get('http://localhost:1337/api/usuarios');
      setAllUsers([...result.data.data])
    } catch (error) {
      console.log(error);
    }
    
  }

  const createNewUser = async (info) => {
    try {
      await axios.post('http://localhost:1337/api/usuarios', info)
      getAllUsers()
    } catch (error) {
      console.log(error)
    }
  }

  const modifyUser = async (id, info) => {
    try {
      await axios.put(`http://localhost:1337/api/usuarios/${id}`, info)
      setModifyUsers('');
      getAllUsers();
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/usuarios/${id}`)
      getAllUsers()
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=> {
    getAllUsers();
  },[])

  return (
    <>
    <NewUser createNewUser={createNewUser} />
    {modifyUsers?<ModifyUser modifyUsers={modifyUsers} modifyUser={modifyUser} />:null}
    {allUsers.length != 0?<GetUsers users={allUsers} deleteUser={deleteUser} modifyUs={modifyUs}/>:null}
    </>
  )
}

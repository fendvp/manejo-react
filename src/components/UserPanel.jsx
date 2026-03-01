import { useEffect, useState } from "react";
import { UserFilters } from "./UserFilter";
import { UserList } from "./UserList";
import { UserForm } from "./UserForm";

export const UserPanel = () => {
  
// Objeto config
const config = {
    showOnlyActive: true,
    highlightRole: "Frontend",
    sortBy: "name" // "name" | "seniority"
};

// Lista de usuarios
const users = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Frontend",
    active: true,
    seniority: 3
  },
  {
    id: 2,
    name: "Bruno Gómez",
    role: "Backend",
    active: false,
    seniority: 5
  },
  {
    id: 3,
    name: "Carla López",
    role: "Frontend",
    active: true,
    seniority: 1
  },
  {
    id: 4,
    name: "Diego Fernández",
    role: "Backend",
    active: true,
    seniority: 7
  },
  {
    id: 5,
    name: "Elena Ruiz",
    role: "Backend",
    active: true,
    seniority: 4
  },
  {
    id: 6,
    name: "Facundo Pérez",
    role: "Frontend",
    active: false,
    seniority: 2
  },
  {
    id: 7,
    name: "Gabriela Torres",
    role: "Frontend",
    active: true,
    seniority: 6
  },
  {
    id: 8,
    name: "Hernán Silva",
    role: "Frontend",
    active: true,
    seniority: 8
  }
];

// Desestructuraciond de config
const { showOnlyActive, highlightRole, sortBy} = config

// Estados
const [active, setActive] = useState(showOnlyActive)
const [role, setRole] = useState(highlightRole)
const [sort, setSort] = useState(sortBy)
const [usersArray, setUsersArray] = useState(users)
const [newName, setNewName] = useState("")
const [newRol, setNewRol] = useState("")
const [newSeniority, setNewSeniority] = useState(0)





// Array de prueba para gestion de usuario
const [prueba, setPrueba] = useState([])

// Funcion de creacion de usuarios
const createUser = (e) =>{
  e.preventDefault()
  let newUser = {
    id : 9,
    name: newName,
    role: newRol,
    active: true,
    seniority: newSeniority
  }
  console.log("Usuario creado correctamente")
  console.log(newUser)
  setUsersArray([...usersArray, newUser])

}

  useEffect(()=>{
    console.log(usersArray)
  })




// Declaracion de filtrado de usuarios
const applyFilters = (data, active, role, sort) =>{
  let copy = [...data]

  if(active == true){
    copy = copy.filter(user=> user.active)
  }
  
  if(role == "Frontend"){
    copy = copy.filter(user => user.role == "Frontend")
  } else if(role == "Backend"){
    copy = copy.filter(user =>user.role == "Backend")
  }

  if(sort == "name"){
    copy.sort()
  } else if (sort == "seniority"){
    copy.sort((a,b) => a.seniority-b.seniority)
  }

  return copy
  }

// Ejecucion de filtrado de usuarios
const filteredUsers = applyFilters(usersArray,active, role, sort)

return (
<>
{/* Formulario de creacion de usuarios */}
  <UserForm
  createUser = {createUser}
  newName = {newName}
  setNewName = {setNewName}
  newRol = {newRol}
  setNewRol = {setNewRol}
  newSeniority = {newSeniority}
  setNewSeniority = {setNewSeniority}
  />

{/* Interfaz de config y sus estados */}
  <UserFilters 
    {...config}
    active = {active}
    setActive = {setActive}
    role = {role}
    setRole = {setRole}
    sort = {sort}
    setSort = {setSort}
  />
  <br />

 {/* /*Renderizado implementando el filtro de usuarios activos */}
  <UserList
  filteredUsers = {filteredUsers}
  />
</>
)}

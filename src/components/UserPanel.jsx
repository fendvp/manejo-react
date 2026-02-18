import { useState } from "react";
import { UserFilters } from "./UserFilter";
import { UserList } from "./UserList";

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
const filteredUsers = applyFilters(users,active, role, sort,)

return (
<>
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

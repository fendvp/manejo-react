import { useState } from "react";
import { UserFilters } from "./UserFilter";


export const UserPanel = () => {
  
const config = {
    showOnlyActive: true,
    highlightRole: "Frontend",
    sortBy: "name" // "name" | "seniority"
  };

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
    role: "DevOps",
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
    role: "QA",
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

const filterActive = (data,showOnlyActive) =>{
    if(!showOnlyActive) return data;
    return data.filter(user => user.active)
}

const sortUsers = (data,sort) =>{
    const copy = [...data]
  
    // console.log(sort)
    if(sort === "name") return copy.sort()
    if(sort === "seniority") return copy.sort((a,b) => a.seniority-b.seniority)
}


const filteredUsers = filterActive(users,showOnlyActive)

// console.log(sortUsers(users,sortBy))

return (
<>
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




  { /*Renderizado implementando el filtro de usuarios activos

   {filteredUsers.map(user =>(
    <p key ={user.id}>
        {user.name} - {user.role}
    </p>
))} */}
</>
)
}

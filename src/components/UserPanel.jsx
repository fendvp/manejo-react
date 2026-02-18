import { useState } from "react";
import { UserFilters } from "./UserFilter";
import { UserList } from "./UserList";
import { UserCard } from "./UserCard";



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


const sortUsers = (data, active, rol, sort) =>{
    let copy = [...data]
    console.log(copy)

    if(active == true){
      copy = copy.filter(user=> user.active)
    }
    console.log(copy)
    
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

    // if(sort === "name") return copy.sort()
    // if(sort === "seniority") return copy.sort((a,b) => a.seniority-b.seniority)
    
    }


const filteredUsers = sortUsers(users,active, role, sort,)


console.log(sortUsers(users,active,role,sort))

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




 {/* /*Renderizado implementando el filtro de usuarios activos */}
  <UserList
  filteredUsers = {filteredUsers}
  
  />
   {/* {filteredUsers.map(user =>(

    <p key ={user.id}>
        {user.name} - {user.role} - {user.seniority}
    </p>
))} */}
</>
)
}

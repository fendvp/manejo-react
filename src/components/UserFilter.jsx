import { useEffect, useState } from "react"

export const UserFilters = ({ active,setActive, role, setRole, sort,setSort }) => {



const activeToggle = () =>{
      console.log(active)
      active ? setActive(false) : setActive(true)
      console.log(active)
}



const roleToggle = () =>{
      console.log(role)
      role == "Frontend" ? setRole("Backend") : setRole("Frontend")
}

const sortToggle = () =>{
      console.log(sort)
      sort == "name" ? setSort("seniority") : setSort("name")
}


return (
<>
<h3>Configuracion</h3>
<ul>
      <li>
            <span>Solo activos: {active ? "Sí  " : "No  "}</span>
            <button onClick={(activeToggle)}>🔁</button>
      </li>
      <li>
            <span>Rol destacado: {role}  </span>
            <button onClick={(roleToggle)}>🔁</button>
      </li>
      <li>
            <span>Ordenar por: {sort}   </span>
            <button onClick={(sortToggle)}>🔁</button>
      </li>      
</ul>
</>
)
}

export const UserFilters = ({ showOnlyActive, highlightRole, sortBy }) => {



const activeToggle = () =>{
      
}


return (
<>
<h3>Configuracion</h3>
<ul>
      <li>
            <span>Solo activos: {showOnlyActive ? "Sí  " : "No  "}</span>
            <button onClick={(activeToggle())}>cambiar</button>
      </li>
      
      
      <p>Rol destacado: {highlightRole}</p>
      <p>Ordenar por: {sortBy}</p>
</ul>
</>
)
}
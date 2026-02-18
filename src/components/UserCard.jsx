export const UserCard = ({id,name,role,active,seniority}) => {
  console.log(id)
  return (
<>
  <div>
    <p>Nombre: {name} {active ? "🟢": "🔴"}</p>
    <p>Rol: {role}</p>
    <p>Seniority: {seniority}</p>
  </div>
  <br /><br />
</>
)
}

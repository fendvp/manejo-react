export const UserCard = ({name,role,active,seniority}) => {
  return (
<>
  <div>
    <p>Nombre: {name} {active ? "🟢": "🔴"}</p>
    <p>Rol: {role}</p>
    <p>Seniority: {seniority}</p>
  </div>
  <br />
</>
)
}

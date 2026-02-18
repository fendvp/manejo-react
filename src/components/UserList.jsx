import { UserCard } from "./UserCard"



export const UserList = ({filteredUsers}) => {
  console.log(filteredUsers)

  return (
<>

  {filteredUsers.map(user =>(
    <UserCard
      key = {user.id}
      id = {user.id}
      name = {user.name}
      role = {user.role}
      active = {user.active}
      seniority = {user.seniority}
    />
  ))}

  <br /><br /><br /><br />

</>
)
}

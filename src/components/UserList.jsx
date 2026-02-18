import { UserCard } from "./UserCard"

export const UserList = ({filteredUsers}) => {

  return (
<>
  {filteredUsers.map(user =>(
    <UserCard
      key = {user.id}
      name = {user.name}
      role = {user.role}
      active = {user.active}
      seniority = {user.seniority}
    />
  ))}
</>
)
}

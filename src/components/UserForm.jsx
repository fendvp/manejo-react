export const UserForm = ({createUser,newName,setNewName,newRol,setNewRol,newSeniority,setNewSeniority}) => {


return (
<>
<form action="" onSubmit={createUser}>
    <label htmlFor="">Crear usuario nuevo</label>
    <br /><br />
    
    <input 
    type="text" 
    placeholder="Nombre y Apellido"
    value={newName}
    onChange={(e)=>{
        setNewName(e.target.value)
    }}
    /><br /><br />

    
    <input 
    type="text"
    placeholder="Rol"
    value={newRol}
    onChange={(e)=>{
        setNewRol(e.target.value)
    }}
    /><br /><br />

    <input 
    type="number" 
    placeholder="Seniority"
    value={newSeniority}
    onChange={(e)=>{
        setNewSeniority(e.target.value)
    }}
    /><br /><br />    

    <button type="submit">Crear</button>


</form>
<br /><br />

</>
)
}

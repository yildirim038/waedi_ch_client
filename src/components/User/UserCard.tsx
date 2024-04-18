import  UpdateIcon  from "../../img/arrow 5.png";
import  DeleteIcon  from "../../img/bin 6.png";
import { deleteUserData, userData2 } from "../../services/authService";

const UserCard :React.FC<any>= ({user, index,setAllUser,setClickedUser, openModal}) => {

    const handleUpdateUser = () => {
        setClickedUser(user)
        openModal()
    }   
    const handleDeleteUser = async() => {
     await deleteUserData(user.id)
     userData2(setAllUser)
    }

    return (
        <tr key={user.id} >
            <th scope="row">{index+1}</th>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.waediEmail}@waedi.ch</td>
            <button className="update-delete-button" ><img src={UpdateIcon} onClick={handleUpdateUser} alt="update" /></button>
            <button className="update-delete-button" onClick={handleDeleteUser}><img src={DeleteIcon} alt="delete" /></button>
        </tr>
    )
}

export default UserCard;
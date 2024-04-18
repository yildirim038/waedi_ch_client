import { useState } from "react";
import { user } from "../../type/dataType";
import { updateUser, userData2 } from "../../services/authService";

type UserUpdateType = {
    clickedUser:user;
    closeModal: () => void;
    setAllUser:React.Dispatch<React.SetStateAction<any>>;
}

const UserUpdate:React.FC<UserUpdateType> = ({clickedUser, closeModal,setAllUser}) => {

    const [values, setValue] = useState({
        firstname:clickedUser.firstname,
        lastname:clickedUser.lastname,
        email:clickedUser.email,
        password:clickedUser.password,
        waediEmail:clickedUser.waediEmail,
        role:clickedUser.role
      });
      const handleUpdateUser = async () => {
        try {
            await updateUser(values, clickedUser.id);
            userData2(setAllUser)
            closeModal();
          } catch (error) {
            alert("Event could not be updated.");
          }
      }

    return(
        <div>
            <div className='form-main-container'>
                <div className='login-register-container'>
                    <h2>Update</h2>
                    <div className='form-input-element'>
                        <label>Vorname:</label>
                        <input type="text" value={values.firstname} onChange={e => setValue({...values, firstname: e.target.value})} />
                    </div>
                    <div className='form-input-element'>
                        <label>Nachname:</label>
                        <input type="text" value={values.lastname} onChange={e => setValue({...values, lastname: e.target.value})} />
                    </div>
                    <div className='form-input-element'>
                        <label>Email:</label>
                        <input type="email" value={values.email} onChange={e => setValue({...values, email: e.target.value})} />
                    </div>
                    <div className='form-input-element'>
                        <label>Role:</label>
                        <input type="text" value={values.role} onChange={e => setValue({...values, role: e.target.value})} />
                    </div>
                    <div className='form-input-element form-flex-input-element'>
                        <input type="text" value={values.waediEmail} onChange={e => setValue({...values, waediEmail: e.target.value})}/>
                        <label>@waedi.ch</label>
                    </div>
                    <div className='row'>
                        <button className='form-button col-4' onClick={handleUpdateUser}>Update User</button>
                        <button className='form-button form-close-button offset-4 col-4' onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default UserUpdate;
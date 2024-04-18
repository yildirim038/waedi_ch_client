import { useEffect, useState } from "react";
import { userData2 } from "../../services/authService";
import UserCard from "./UserCard";
import HeaderComponent from "../Header/HeaderComponents";
import Footer from "../Footer/Footer";
import UserUpdate from "./UserUpdate";
import { user } from "../../type/dataType";
import { token } from "../../untils/untils";



const UserUpdatePage = () => {
   const [allUser, setAllUser] = useState<user[]>([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [clickedUser ,setClickedUser] = useState<user>({
      id:"",
      firstname:"",
      lastname:"",
      email:"",
      role:"",
      password:"",
      waediEmail:"",
      })
   const openModal  = () => setIsModalOpen(true)
   const closeModal = () => setIsModalOpen(false)

   useEffect(() => {
      userData2(setAllUser)
   },[])

   const role = JSON.parse(token).role;

 return (
  
    <div className="user-table-container">
      <HeaderComponent/>
      { role === "admin" && (
         <>
            {!isModalOpen && (
               <table className="table">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">weadi Email</th>
                     </tr>
                  </thead>
                  <tbody>
                  {allUser.map((user,index) => (
                           <UserCard key={index} user={user} index={index} setAllUser={setAllUser} setClickedUser={setClickedUser} openModal={openModal}/>
                        ))}
                  </tbody>
               </table>
            )}
            {isModalOpen && (
               <UserUpdate clickedUser={clickedUser} closeModal={closeModal} setAllUser={setAllUser}/>
            )}  
         </>
      )}
      {role !== "admin" && role !=="" && (
         <h3 className="m-5">Sie haben keine Berechtigung, auf diese Seite zuzugreifen.</h3>
      )}
       {!role && (
         <h3 className="m-5">Bitte loggen Sie sich ein</h3>
      )}
      
      <Footer/>
   </div>
 )
}

export default UserUpdatePage;
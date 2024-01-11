import plusIcon from '../img/plus-svgrepo-com 1.png'
import { useEffect, useState } from "react";
import InterviewCard  from "../components/Interview/InterviewCard";
import './Interview.css'
import { InterviewFormState } from "../type/interviewTypes";
import { getInterviewData} from "../services/interviewService";
import { useNavigate } from 'react-router-dom';
import InterviewPage from '../components/Interview/InterviewPage';
import HeaderComponent from '../components/Header/HeaderComponents';
import Footer from '../components/Footer/Footer'
import UpdateInterviewForm from '../components/Interview/UpdateInterviewForm';
import { closeInterviewModals } from '../untils/untils';

const Interviews: React.FC = () => {
  const [interviewList, setInterviewList] = useState<InterviewFormState[]>([]);
  const [isModalOpen,setIsModalOpen] = useState (false)
  const [isUpdateModalOpen,setIsUpdateModalOpen] = useState (false)
  
  const [clickUpdateInterview, setClickUpdateInterview] = useState<InterviewFormState>({
    title: '',
    author: '',
    coverText: '',
    imageTitel: '',
    descriptionOfImage: '',
    image: '',
    datum: '',
  })
  
  useEffect(()=>{
    if(clickUpdateInterview.title !== ''){
      setIsUpdateModalOpen(true)
     }
  },[clickUpdateInterview])

  const [clickInterview, setClickInterview] = useState<InterviewFormState>({
    title: '',
    author: '',
    coverText: '',
    imageTitel: '',
    descriptionOfImage: '',
    image: '',
    datum: '',
  })
  
  useEffect(()=>{
    if(clickInterview.title !== ''){
      setIsModalOpen(true)
     }
  },[clickInterview])


  function closeInterviewModal() {
   closeInterviewModals(setIsModalOpen,setClickInterview)
  }

  function closeUpdateInterviewModal() {
    closeInterviewModals(setIsUpdateModalOpen,setClickUpdateInterview)
  }

  let  role = false

  if(localStorage.getItem("role")==="admin"){
    role = true   
   }
    else {
    role = false
  } 
  const navigate = useNavigate();

  const handleAddInterview = async () => {
    try {
      navigate('/addInterview');
    } catch (error) {
      alert("Event could not be add.");
    }
  }

  useEffect(() => {
    getInterviewData(setInterviewList)
  }, []);

  return (
    <div className="interview-container">
    
      {!isModalOpen && !isUpdateModalOpen &&(
        <div>
            <HeaderComponent/>  
            <div className='interview-header'>
              <h2>Interviews</h2>
              {  role ? (
                  <button >{!isModalOpen && (<img src={plusIcon}  onClick={handleAddInterview} alt="add interview"/>)}</button>
              ):(<></>)}
            </div>
            <div className="interview-card-container">
              {interviewList.map((interview) => (
                  <InterviewCard key={interview.id} interview={interview} setClickInterview={setClickInterview} 
                  setClickUpdateInterview={setClickUpdateInterview} setInterviewList={setInterviewList}/>
              ))}
            </div>
              <Footer/>
        </div>
        )}  

      {isModalOpen && (
        <div className="read-interview">
          <InterviewPage interview={clickInterview} closeInterviewModal={closeInterviewModal}/>
        </div>
      )} 
      {isUpdateModalOpen && (
          <UpdateInterviewForm  setInterviewList={setInterviewList} clickInterview={clickUpdateInterview} 
          closeUpdateInterviewModal={closeUpdateInterviewModal}/>
      )}
         
    </div>    
  );
};

export default Interviews;
import plusIcon from '../img/plus-svgrepo-com 1.png'
import { useEffect, useState } from "react";
import InterviewCard  from "../components/Interview/InterviewCard";
import './Interview.css'
import Header from "../components/Header/Header";
import { logout } from "../services/authService";
import { useAuth } from "../auth/AuthContext";
import { InterviewFormState } from "../type/dataType";
import { getInterviewData, getQuestionData } from "../services/interviewService";
import { useNavigate } from 'react-router-dom';
import InterviewPage from '../components/Interview/InterviewPage';


interface Question {
  id: string;
  interviewId: string;
  question: string;
  antwort: string;
}


const Interviews: React.FC = () => {
  const { authInfo, setAuthInfo } = useAuth();
  const [interviewList, setInterviewList] = useState<InterviewFormState[]>([]);
  const [question, setQuestion] = useState<Question[]>([]);
  const [isModalOpen,setIsModalOpen] = useState (false)
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
console.log(clickInterview)
  function closeInterviewModal() {
    setIsModalOpen(false)
    setClickInterview({ title: '',
    author: '',
    coverText: '',
    imageTitel: '',
    descriptionOfImage: '',
    image: '',
    datum: '',})
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
    getInterviewData(setInterviewList);
    getQuestionData(setQuestion);
  }, []);
console.log(question)
const handleLogout = async () => {
  await logout();
  setAuthInfo({
    isAuthenticated: false,
    role: '',
  });
};
  return (
    <div className="interview-container">
      <Header isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
      <div className='interview-header'>
        <h2>Interviews</h2>
        {  role ? (
            <button >{!isModalOpen && (<img src={plusIcon}  onClick={handleAddInterview} alt="add interview"/>)}</button>
        ):(<></>)}
      </div>
   
      {!isModalOpen && (
               <div className="interview-card-container">
               {interviewList.map((interview) => (
                    <InterviewCard key={interview.id} interview={interview} setClickInterview={setClickInterview} setInterviewList={setInterviewList}/>
                ))}
              </div>
        )}  
      {isModalOpen && (
            <div className="read-interview">
                <InterviewPage interview={clickInterview} closeInterviewModal={closeInterviewModal}/>
            </div>
        )}  
    </div>
          
  );
};

export default Interviews;
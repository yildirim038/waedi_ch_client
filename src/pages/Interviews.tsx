import axios from "axios";
import { useEffect, useState } from "react";
import Update from '../img/arrow 5.png'
import Delete from '../img/bin 6.png'
import image from '../img/img_home.png'
import plusIcon from '../img/plus-svgrepo-com 1.png'
import './Interview.css'
import Header from "../components/Header/Header";
import { logout } from "../services/authService";
import { useAuth } from "../auth/AuthContext";

const API_URL = 'http://localhost:3001';

interface Interview {
  id: string;
  title: string;
}

interface Question {
  id: string;
  interviewId: string;
  question: string;
  antwort: string;
}

const Interviews: React.FC = () => {
  const { authInfo, setAuthInfo } = useAuth();
  const [interviewList, setInterviewList] = useState<Interview[]>([]);
  const [question, setQuestion] = useState<Question[]>([]);

  const getInterviewData = async (pSetInterview: React.Dispatch<React.SetStateAction<Interview[]>>) => {
    try {
      const response = await axios.get<Interview[]>(`${API_URL}/interviews`);
      pSetInterview(response.data.reverse());
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };

  const getInterviewDataById = async (pSetEvent: React.Dispatch<React.SetStateAction<Question[]>>, pEventId: string) => {
    try {
      const response = await axios.get<Question[]>(`${API_URL}/questions/${pEventId}`);
      pSetEvent(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const getQuestionData = async (pSetQuestion: React.Dispatch<React.SetStateAction<Question[]>>) => {
    try {
      const response = await axios.get<Question[]>(`${API_URL}/question`);
      pSetQuestion(response.data.reverse());
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

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
      <div><h2>Interviews</h2></div>
      <div className="interview-card-container">
        <div className="interview-card row">
          <div className="col-12 col-sm-4 col-md-2">
            <img src={image} className="col-12" alt="" />
          </div>
          <div className="col-12 col-sm-8 col-md-10">
            <div className="interview-title">
              <div>
                <h3>Title</h3>
                <h6>19/05/2023</h6>
              </div>
              <div>
                <button ><img src={Update}  alt="update"/></button>
                <button><img src={Delete} alt="delete" /></button>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
              <a href="./interviews">Weiter lesen ...</a>
            </div>
          </div>
        </div>
        <div className="interview-card row">
          <div className="col-12 col-sm-4 col-md-2">
            <img src={image} className="col-12" alt="" />
          </div>
          <div className="col-12 col-sm-8 col-md-10">
            <div className="interview-title">
              <div>
                <h3>Title</h3>
                <h6>19/05/2023</h6>
              </div>
              <div>
                <button ><img src={Update}  alt="update"/></button>
                <button><img src={Delete} alt="delete" /></button>
              </div>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <a href="./interviews">Weiter lesen ...</a>
            </div>
          </div>
        </div>
        <button className="interview-plus-icon col-12">
          <img src={plusIcon} alt="add Event" />
        </button>

      </div>

      
      {interviewList.map((interview) => (
        <div key={interview.id}>
          <div>{interview.title}</div>
          <div>
            {question
              .filter((q) => q.interviewId === interview.id)
              .map((q) => (
                <div key={q.id}>
                 <h6>{q.question}</h6> 
                 <p>{q.antwort}</p> 
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Interviews;
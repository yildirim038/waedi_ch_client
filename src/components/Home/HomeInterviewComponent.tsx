import React, { useEffect, useState } from 'react';
import { getInterviewData } from '../../services/interviewService';
import { useNavigate } from 'react-router-dom';


const HomeInterviewComponent: React.FC = () => {
  const [interviewList, setInterviewList] = useState([{
    id:'',
    title:'',
    imageTitel:'',
    descriptionOfImage:'',
    coverText:'',
    author:'',
    datum:'',
    image:'',
  }]);

  useEffect(() => {
    getInterviewData(setInterviewList);
  }, []);

  const navigate = useNavigate();
  const goInterview = () =>navigate('/interviews');

  return (
    <div className='container'>
      <section className="row">
        <h2 className='home-header'>Interview</h2>
      <div key={interviewList[0].id}  className="home-interview row">
           <div className="col-12 col-sm-4 col-md-3">
             <img src={`http://localhost:3001/images/${interviewList[0].image}`}  className="col-12" alt={interviewList[0].imageTitel} />
           </div>
           <div className="col-12 col-sm-8 col-md-9">
             <div className="interview-title">
               <div>
                 <h4>{interviewList[0].title}</h4>
                 <h6 className="interview-card-datum">{interviewList[0].datum}</h6>
               </div>                 
             </div>
             <div>
               <p>{interviewList[0].coverText}</p>
             </div>
             <div>
               <button className='all-interview-button' onClick={goInterview}>All Interviews</button>
             </div>
           </div>
         </div>       
      </section>
    </div>
  );
};

export default HomeInterviewComponent;
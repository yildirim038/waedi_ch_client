import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterviewFormState, addInterviewControlerType } from "../../type/interviewTypes";
import { addInterview, getInterviewData } from "../../services/interviewService";

const AddInterviewForm : React.FC <addInterviewControlerType>  = ({addInterviewControler, setInterviewList}) => {
  const [interview, setInterview] = useState<InterviewFormState>({
      title: '',
      imageTitel: '',
      descriptionOfImage: '',
      coverText: '',
      author: '',
      datum: '',
      image: null,
  });
  const navigate = useNavigate();
  const closeInterviewForm = () => navigate('/interviews');
  const handleAddInterview = async () => {
      try {
        const formData = new FormData();
        formData.append('title', interview.title);
        formData.append('imageTitel', interview.imageTitel);
        formData.append('descriptionOfImage', interview.descriptionOfImage);
        formData.append('coverText', interview.coverText);
        formData.append('author', interview.author);
        formData.append('datum', interview.datum);
        formData.append('image', interview.image || ''); 
        console.log(formData)
        await addInterview(formData);
        navigate('/addInterview');
        addInterviewControler()
        getInterviewData(setInterviewList);
      } catch (error) {
        alert("Interview could not be added.");
      }
    };
  return (
      <div className='form-main-container'>
        <div className='add-event-container'>
          <h2>Add Interview</h2>
          <div className="add-event-input-container">
            <div className='event-input-element'>
              <label>Title:</label>
              <input type="text" value={interview.title} onChange={e => setInterview({ ...interview, title: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>Image Titel:</label>
              <input type="text" value={interview.imageTitel} onChange={e => setInterview({ ...interview, imageTitel: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>coverText:</label>
              <input type="text" value={interview.coverText} onChange={e => setInterview({ ...interview, coverText: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>Description Of Image:</label>
              <input type="text" value={interview.descriptionOfImage} onChange={e => setInterview({ ...interview, descriptionOfImage: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>Author:</label>
              <input type="text" value={interview.author} onChange={e => setInterview({ ...interview, author: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>Datum:</label>
              <input type="date" value={interview.datum} onChange={e => setInterview({ ...interview, datum: e.target.value })} />
            </div>
            <div className='event-input-element'>
              <label>Image:</label>
              <input type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                      setInterview({...interview,image: e.target.files[0],
                    });
                  }
                }}
              />
            </div>
            <button className='form-button' onClick={handleAddInterview}>Add Interview</button>
            <button className='form-button form-close-button' onClick={closeInterviewForm}>Close</button>
          </div>
        </div>

      </div>
    );
}

export default AddInterviewForm
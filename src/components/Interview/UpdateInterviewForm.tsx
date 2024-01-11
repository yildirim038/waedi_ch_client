import React, { useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import { InterviewFormState, addInterviewControlerType } from "../../type/interviewTypes";
import { getInterviewData, updateInterview } from "../../services/interviewService";

type interviewControlerType = {
  setInterviewList: Dispatch<SetStateAction<any>>;
  clickInterview: any;
  closeUpdateInterviewModal:() => void;
};

const UpdateInterviewForm: React.FC<interviewControlerType> = ({ setInterviewList,clickInterview, closeUpdateInterviewModal }) => {

  const [values, setValue] = useState<InterviewFormState>({
    title: clickInterview.title,
    imageTitel: clickInterview.imageTitel,
    descriptionOfImage: clickInterview.descriptionOfImage,
    coverText: clickInterview.coverText,
    author: clickInterview.author,
    datum: clickInterview.datum,
    image: null,
});

  const handleUpdateInterview = async () => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('imageTitel', values.imageTitel);
      formData.append('descriptionOfImage', values.descriptionOfImage);
      formData.append('coverText', values.coverText);
      formData.append('author', values.author);
      formData.append('datum', values.datum);
      formData.append('image', values.image || ''); 
      
      await updateInterview(formData,clickInterview.id);
 
      getInterviewData(setInterviewList)
      closeUpdateInterviewModal()
    } catch (error) {
      alert("Event could not be updated.");
    }
  };
   return (
    <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Update Interview</h2>
        <div className="add-event-input-container">
          <div className='event-input-element'>
            <label>Title</label>
            <input type="text" value={values.title} onChange={e => setValue({ ...values, title: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image Titel:</label>
            <input type="text" value={values.imageTitel} onChange={e => setValue({ ...values, imageTitel: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Description of image:</label>
            <input type="text" value={values.descriptionOfImage} onChange={e => setValue({ ...values, descriptionOfImage: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Cover Text:</label>
            <input type="text" value={values.coverText} onChange={e => setValue({ ...values, coverText: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Author:</label>
            <input type="text" value={values.author} onChange={e => setValue({ ...values, author: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Datum:</label>
            <input type="date" value={values.datum} onChange={e => setValue({ ...values, datum: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue({
                    ...values,
                    image: e.target.files[0],
                  });
                }
              }}
            />
          </div>
          <div className='event-input-element'></div>
          <button className='form-button' onClick={handleUpdateInterview}>Update Event</button>
          <button className='form-button form-close-button' onClick={closeUpdateInterviewModal} >Close</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateInterviewForm;

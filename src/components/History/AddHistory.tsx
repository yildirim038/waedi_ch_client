import React, { useState } from "react";
import { addArticle, deleteArticleData, deleteHistoryData, getArticleData, getHistoryData, updateHistory } from "../../services/infoService";
import { AddHistoryType } from "../../type/historyType";

const AddHistory: React.FC<AddHistoryType> = ({ closeModal, history, setAllHistory, setAllArticle, allArticle }) => {
  const [article, setArticle] = useState({ article: "", historyId:history.id});
  const [newHistory, setNewHistory] = useState({ history: history.history });
  const close = async() =>   {
    await deleteHistoryData(history.id)
    await getHistoryData(setAllHistory)
    closeModal()
  }
  const handleDeleteArticle = async (pId:string) =>{
    await deleteArticleData(pId)
    getArticleData(setAllArticle);
  }

  const handleAddArticle = async () => {
    try {
      await addArticle(article);
      setArticle({ article: "", historyId:history.id})
      getArticleData(setAllArticle);
    } catch (error) {
      alert("Article could not be added.");
    }
  };
  const filteredArticles = allArticle.filter(article => article.historyId === history.id)
  const handleAddHistory = async () => {
    try {
      await updateHistory(newHistory, history.id);
      getHistoryData(setAllHistory)
      closeModal();
    } catch (error) {
      alert("History could not be added.");
    }
  };

  return (
    <div className="form-main-container">
      <div className="add-event-container">
        <h2>Add History</h2>
        <div className="add-event-input-container">
          <div className="event-input-element">
            <label>Title</label>
            <input type="text" value={newHistory.history} onChange={(e) => setNewHistory({ ...newHistory, history: e.target.value })} />
          </div> 
          <div className="event-input-element d-flex">
            <div className="add-image row">
              <div className="event-input-element">
                <label>Text</label>
                <input type="text" value={article.article} onChange={(e) => setArticle({ ...article, article: e.target.value })} />
              </div>
              <div>
                <ul>
                  {filteredArticles.map(article => <li>{article.article} <button onClick={()=> handleDeleteArticle(article.id)}>Delete</button></li>)}
                </ul>
              </div>
              <button className="col-12 col-sm-6 col-md-2" onClick={handleAddArticle}>Add Article</button>
            </div>
          </div>
          <button className="form-button" onClick={handleAddHistory}>Add History</button>
          <button className="form-button form-close-button" onClick={close}>Close</button>
        </div>
      </div>      
    </div>
  );
};
export default AddHistory;
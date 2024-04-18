import { useState } from "react";
import { addArticle, deleteArticleData, getArticleData, getHistoryData, updateHistory } from "../../services/infoService";
import { UpdateHistoryType } from "../../type/historyType";

const UpdateHistory:React.FC<UpdateHistoryType> = ({clickedHistory,allArticle,setAllArticle,setAllHistory, closeUpdateModal}) => {
  const [newHistory, setNewHistory] = useState({ history: clickedHistory.history });
  const [article, setArticle] = useState({ article: "", historyId: clickedHistory.id });
  const filteredArticles = allArticle.filter(article => article.historyId === clickedHistory.id);

  const handleDeleteArticle = async (pId:string) =>{
    await deleteArticleData(pId)
      getArticleData(setAllArticle);
  }

  const handleAddArticle = async () => {
  try {
      await addArticle(article);
      getArticleData(setAllArticle);
    } catch (error) {
      alert("Article could not be added.");
    }
  };

  const handleUpdateHistory = async () => {
    try {
      await updateHistory(newHistory, clickedHistory.id);
      getHistoryData(setAllHistory)
      closeUpdateModal();
    } catch (error) {
      alert("History could not be added.");
    }
  };
    
  return (
    <div className="form-main-container">
      <div className="add-event-container">
        <h2>Update History</h2>
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
          <button className="form-button" onClick={handleUpdateHistory}>
            Update History
          </button>
          <button className="form-button form-close-button" onClick={closeUpdateModal}>
            Close
          </button>
        </div>
      </div>      
    </div>
  )
}

export default UpdateHistory;
import { deleteArticleData, deleteHistoryData, getArticleData, getHistoryData } from "../../services/infoService";
import { token } from "../../untils/untils";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { HistoryPageType } from "../../type/historyType";


const HistoryCard: React.FC<HistoryPageType> = ({ history ,allArticle, setClickedHistory,setAllHistory,setAllArticle,openUpdateModal}) => {
    const filteredArticles = allArticle.filter(article => article.historyId === history.id);
    const role = JSON.parse(token).role=== "admin";

    const handleUpdateHistory = () => {
        setClickedHistory(history);
        openUpdateModal()
    }

    const handleDeleteHistory = async() => {
        filteredArticles.map(async(article) => await deleteArticleData(article.id))
        await deleteHistoryData(history.id)
        getArticleData(setAllArticle)
        getHistoryData(setAllHistory)
    }

    return(
        <div className="row history-header-container">       
            <div className='col-12 col-sm-3 history-header'>
                <h3 className="text-center">{history.history}</h3>
            </div>
            <div className="col-12 col-sm-7">
                <ul>
                    {filteredArticles.map(article => (
                        <li key={article.id}>{article.article}</li>
                    ))}
                </ul>        
            </div>
            {role && (
                <div className="col-sm-2">
                  <button className="update-delete-button" ><img src={Update} onClick={handleUpdateHistory} alt="update" /></button>
                  <button className="update-delete-button" onClick={handleDeleteHistory}><img src={Delete} alt="delete" /></button>
                </div>
                )
            }
            <hr />
        </div>
    );    
}

export default HistoryCard;

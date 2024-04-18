import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import HeaderComponent from '../components/Header/HeaderComponents';
import './History.css'
import HistoryCard from '../components/History/HistoryCard';
import { addHistory, getArticleData, getHistoryData } from '../services/infoService';
import { token } from '../untils/untils';
import plusIcon from '../img/plus-svgrepo-com 1.png';
import AddHistory from '../components/History/AddHistory';
import UpdateHistory from '../components/History/UpdateHistory';
import { ArticleType, HistoryType } from '../type/historyType';

const History = () => {
    const [allHistory, setAllHistory] = useState<HistoryType[]>([]);
    const [allArticle, setAllArticle] = useState<ArticleType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const role = JSON.parse(token).role=== "admin";
    const [isUpdateModalOpen,setIsUpdateModalOpen] = useState(false)
    const openUpdateModal = () => setIsUpdateModalOpen(true);
    const closeUpdateModal = () => setIsUpdateModalOpen(false)
    const [clickedHistory, setClickedHistory] = useState<HistoryType>();    
    
    const openModal = async () => {
        await addHistory({ history: "" })
        await getHistoryData(setAllHistory);
        setIsModalOpen(true);   
    };
     const closeModal = async () => {
        setIsModalOpen(false);
     };  
  
    useEffect(()=> {
        getHistoryData(setAllHistory);
        getArticleData(setAllArticle);
    },[])

    return (
        <>
         
            {!isModalOpen && !isUpdateModalOpen && (
                <>
                   <HeaderComponent />
                   <div className='row'>
                    <h1 className='col-10 text-center align-self-center'>Wädi Geschichte</h1>   
                    {role && (
                        <button onClick={openModal} className="col-1 event-plus-icon">
                            <img className="mb-3"src={plusIcon} alt="add History" />
                        </button>
                    )}
                        
                   </div>
                    {allHistory.map(history =>  
                        <HistoryCard key={history.id} history={history}  allArticle={allArticle} setClickedHistory={setClickedHistory} 
                        setAllHistory={setAllHistory} setAllArticle={setAllArticle} openUpdateModal={openUpdateModal}/>
                    )}
                    
                 <Footer/>
               </>
                   
            )}
            {
                isModalOpen && (
                   <AddHistory closeModal={closeModal} setAllHistory={setAllHistory} setAllArticle={setAllArticle} history={allHistory[0]} allArticle={allArticle}/>
           ) }
            {
                isUpdateModalOpen && (
                    <UpdateHistory clickedHistory={clickedHistory} allArticle={allArticle}  setAllHistory={setAllHistory} setAllArticle={setAllArticle} closeUpdateModal={closeUpdateModal}/>
                )
            } 
            
        </>
    )
}

export default History;
export type HistoryType = {
    history: string;
    id: string;
};

export type ArticleType = {
    article: string;
    id: string;
    historyId: string;
}

export type AddHistoryType = {
    closeModal: () => void;
    setAllHistory: React.Dispatch<React.SetStateAction<any>>;
    setAllArticle: React.Dispatch<React.SetStateAction<any>>;
    history: HistoryType;
    allArticle:ArticleType[]
};

export type HistoryPageType = {
    history: HistoryType;
    allArticle:ArticleType[];
    setClickedHistory:React.Dispatch<React.SetStateAction<any>>;
    setAllHistory: React.Dispatch<React.SetStateAction<any>>;
    setAllArticle: React.Dispatch<React.SetStateAction<any>>;
    openUpdateModal: () => void;
}

export type UpdateHistoryType = {
    clickedHistory:HistoryType|any
    allArticle:ArticleType[]
    setAllArticle: React.Dispatch<React.SetStateAction<any>>;
    setAllHistory: React.Dispatch<React.SetStateAction<any>>;
    closeUpdateModal: () => void;
}

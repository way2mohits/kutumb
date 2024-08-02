import { useEffect, useState } from "react";
import "../../Styles/quotesPage.css";
import { fetchData } from "../../network/apiFunctions";
import QuoteCard from "./components/QuoteCard";
import { QutoesPageHeader } from "./components/QuotePageHeader";
export const QutoesPage = () => {
    const[currentQuotesList,setCurrentQuotesList] = useState([]);
    const fetchQuoteList = async ()=>{
        const response = await fetchData('https://assignment.stage.crafto.app/getQuotes?limit=20&offset=0');
        if(response && response.data){
            setCurrentQuotesList(response.data);
        }
    }
    useEffect(()=>{fetchQuoteList()},[]);
  return (
    <>
      <QutoesPageHeader />
      <div className="quote-list-container">
        {currentQuotesList.map((quote)=>{
            return <QuoteCard key={`${quote.id}`} mediaUrl={quote.mediaUrl} text={quote.text} username={quote.username} createdAt={quote.createdA} />
        })}
      </div>
    </>
  );
};

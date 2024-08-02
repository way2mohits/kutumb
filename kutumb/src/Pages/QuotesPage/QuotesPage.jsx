import { useEffect, useState } from "react";
import "../../Styles/quotesPage.css";
import { fetchData } from "../../network/apiFunctions";
import QuoteCard from "./components/QuoteCard";
import { QutoesPageHeader } from "./components/QuotePageHeader";
export const QutoesPage = () => {
    const[currentQuotesList,setCurrentQuotesList] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    const [offset,setOffSet] = useState(0);
    const fetchQuoteList = async ()=>{
        setIsLoading(true);
        const response = await fetchData(`https://assignment.stage.crafto.app/getQuotes?limit=20&offset=${offset}`);
        if(response && response.data){
            setCurrentQuotesList(response.data);
        }
        setIsLoading(false);
    }
    useEffect(()=>{fetchQuoteList()},[offset]);
    const handlePreviousBtn = (e)=>{
        if(offset!=0){
            setOffSet(offset-1);
        }
    }
    const handleNextBtn = (e)=>{
        if(currentQuotesList.length!=0){
            setOffSet(offset+1);
        }
    }
  return (
    <>
    {isLoading && <div className="modal">Loading....</div>}
      <QutoesPageHeader />
      <div className="quote-list-container">
        {currentQuotesList.map((quote)=>{
            return <QuoteCard key={`${quote.id}`} mediaUrl={quote.mediaUrl} text={quote.text} username={quote.username} createdAt={quote.createdA} />
        })}
        {currentQuotesList.length==0 && <div className="no-result-modal">No Results.....</div>}
        <div style={{display:"flex",justifyContent:"space-between",width:"100%",margin:"0 5%"}}>
        <div className={offset===0?"disabled-btn":"primary-btn"} style={{height:"30px",width:"80px"}} onClick={handlePreviousBtn}>
            Previous
        </div>
        <div className={currentQuotesList.length===0?"disabled-btn":"primary-btn"} style={{height:"30px",width:"80px"}} onClick={handleNextBtn}>
            Next
        </div>
      </div>
      </div>
    </>
  );
};

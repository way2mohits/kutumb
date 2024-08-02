import React, { useState } from 'react';
import "../../../Styles/quoteCreation.css"
export const QuoteCreationModal = ()=>{
    const [quoteText, setQuoteText] = useState('');
    const [imageFile, setImageFile] = useState(null);

    

    return (
        <>
        <img
        src="/assets/loginPage.jpg"
        style={{ height: "100%", width: "100%" }}
      />
        <div className="quote-creation">
            <form onSubmit={()=>{}} className="quote-form">
                <textarea
                    value={quoteText}
                    onChange={(e) => setQuoteText(e.target.value)}
                    placeholder="Enter quote text"
                    required
                ></textarea>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    style={{background:"transparent",color:"white"}}
                    required
                />
                <button type="submit" className="submit-btn">Create Quote</button>
            </form>
        </div>
        </>
        
    );
}
import React from 'react';
import "../../../Styles/quotesPage.css"

const QuoteCard = ({ mediaUrl, text, username, createdAt }) => {
    return (
        <div className="quote-card">
            <div className="image-container">
                <img src={mediaUrl} alt="Quote" className="quote-image" />
                <div className="overlay">
                    <div className="quote-text">{text}</div>
                </div>
            </div>
            <div className="quote-details">
                <div className="quote-username">{username}</div>
                <div className="quote-created-at">{new Date(createdAt).toLocaleString()}</div>
            </div>
        </div>
    );
};

export default QuoteCard;
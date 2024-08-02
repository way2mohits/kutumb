import React, { useEffect, useState } from 'react';
import "../../../Styles/quoteCreation.css"
import "../../../Styles/globalStyle.css"
import { postData, uploadImage } from '../../../network/apiFunctions';
import { useNavigate } from 'react-router-dom';

export const QuoteCreationModal = () => {
    const [quoteText, setQuoteText] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('file', imageFile);

        try {
            const response = await uploadImage("https://crafto.app/crafto/v1.0/media/assignment/upload",formData);
            return response[0].url;
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (imageFile === null) {
            alert('Image is still uploading. Please wait.');
            setIsLoading(false);
            return;
        }
        let mediaUrl = ""
        if (imageFile !== null) {
            mediaUrl = await handleImageUpload();
        }

        const quoteData = {
            text: quoteText,
            mediaUrl
        };

        try {
            const response = await postData('https://assignment.stage.crafto.app/postQuote', quoteData);
            setIsLoading(false);
            if(response==="Error"){
                alert("Error While Creating Quote!!!")
                return;
            }
            alert("Quote Created Successfully!!");
            navigate(-1);
        } catch (error) {
            setIsLoading(false);
            console.error('Error creating quote:', error);
        }
    };

    return (
        <>
        {isLoading && <div className="modal">Loading....</div>}
            <img
                src="/assets/loginPage.jpg"
                style={{ height: "100%", width: "100%" }}
            />
            <div className="quote-creation">
                <form onSubmit={handleSubmit} className="quote-form">
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
                        style={{ background: "transparent", color: "white" }}
                        required
                    />
                    <button type="submit" className="submit-btn">Create Quote</button>
                </form>
            </div>
        </>
    );
}

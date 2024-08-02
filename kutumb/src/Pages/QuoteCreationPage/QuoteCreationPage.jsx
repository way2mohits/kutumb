import React, { useState } from 'react';
import "../../Styles/quoteCreation.css"
import { QuoteCreationModal } from './components/QuoteCreationModal';
import { QutoesCreationHeader } from './components/QuoteCreationHeader';

export const QuoteCreationPage = () => {
    const [quoteText, setQuoteText] = useState('');
    const [imageFile, setImageFile] = useState(null);

    

    return (
        <>
        <QutoesCreationHeader />
        <QuoteCreationModal />
        </>
    );
};
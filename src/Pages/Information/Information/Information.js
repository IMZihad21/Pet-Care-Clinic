import React from 'react';
import FAQs from '../FAQs/FAQs';
import Openings from '../Openings/Openings';

const Information = () => {
    return (
        <div className="md:flex bg-gray-100">
            <FAQs/>
            <Openings/>
        </div>
    );
};

export default Information;
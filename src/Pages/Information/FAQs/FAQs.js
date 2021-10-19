import React from 'react';

const FAQs = () => {
    return (
        <div className="md:w-1/2 md:py-10">
            <h1 className="text-2xl text-blue-500 font-bold text-left py-2 px-4">Polular Questions</h1>
            <div className="border-2 rounded-xl m-2 my-6 bg-blue-100">
                <h2 className="font-bold py-2 text-blue-700">IS IT REALLY NECESSARY TO BRING MY DOG AND/OR CAT IN FOR A YEARLY COMPREHENSIVE EXAM?</h2>
                <p className="text-sm mb-2 mx-2">Comprehensive examinations are recommended AT LEAST annually to check for health issues that may not be apparent to owners. During a comprehensive examination, the veterinarian will examine your pet’s eyes, ears, skin, and hair coat, listen to their heart, and discuss any concerns you may have.</p>
            </div>
            <div className="border-2 rounded-xl m-2 my-6 bg-blue-100">
                <h2 className="font-bold py-2 text-blue-700">WHAT DOG AND CAT FOOD BRANDS DO YOU RECOMMEND?</h2>
                <p className="text-sm mb-2 mx-2">There are many great brands out there. The ones we recommend the most are based on years of results and healthy dogs and cats. It is recommended that pets are fed premium diets like Purina, Science Diet, Iams, and Eukanuba. Occasionally, prescription diets are recommended based on a pet’s specific needs. Our veterinarians will make these recommendations when appropriate.</p>
            </div>
            <div className="border-2 rounded-xl m-2 my-6 bg-blue-100">
                <h2 className="font-bold py-2 text-blue-700">DOES HEARTWORM PREVENTION AND FLEA PREVENTION NEED TO BE GIVEN YEAR ROUND?</h2>
                <p className="text-sm mb-2 mx-2">Yes! Mosquitos and fleas are both present year-round across the United States, but especially in the Gulf Coast region where temperatures remain warm for much of the year. Heartworm incidence in this region is still very high making year-round heartworm prevention paramount.</p>
            </div>
            <button className="px-2 md:px-6 py-2 my-4 text-white bg-red-600 rounded-lg hover:bg-blue-900">Learn more..</button>
        </div>
    );
};

export default FAQs;
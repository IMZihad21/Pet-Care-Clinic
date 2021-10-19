import React from 'react';

const Costs = () => {
    return (
        <div className="min-w-screen min-h-screen bg-gray-100 px-5 py-5">

            <div className="w-full mx-auto bg-blue-100 px-5 py-10 text-gray-600 mb-10">
                <div className="text-center max-w-xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
                    <h3 className="text-xl font-medium mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos laboriosam odit accusamus porro</h3>
                </div>
                <div className="max-w-4xl mx-auto md:flex">
                    <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                        <div className="w-full flex-grow">
                            <h2 className="text-center font-bold uppercase mb-4">Pet Surgery</h2>
                            <h3 className="text-center font-bold text-4xl mb-5">$199</h3>
                            <ul className="text-sm px-5 mb-8">
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No cost for initial examintaion</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No wait time with appointment</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">24/7 Emergency Contact</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">Examination by specialists</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <button className="font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full">Make Appointment</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                        <div className="w-full flex-grow">
                            <h2 className="text-center font-bold uppercase mb-4">Basic Examination</h2>
                            <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">$0</h3>
                            <ul className="text-sm px-5 mb-8">
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No cost for initial examintaion</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No wait time with appointment</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">24/7 Emergency Contact</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">Examination by specialists</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <button className="font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full">Make Appointment</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                        <div className="w-full flex-grow">
                            <h2 className="text-center font-bold uppercase mb-4">Pet Rehability</h2>
                            <h3 className="text-center font-bold text-4xl mb-5">$129</h3>
                            <ul className="text-sm px-5 mb-8">
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No cost for initial examintaion</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">No wait time with appointment</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">24/7 Emergency Contact</li>
                                <li className="leading-tight border rounded p-2 my-1 md:my-2">Examination by specialists</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <button className="font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full">Make Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Costs;
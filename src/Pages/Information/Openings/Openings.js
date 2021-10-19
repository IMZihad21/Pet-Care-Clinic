import React from 'react';

const Openings = () => {
    return (
        <div className="md:w-1/2 md:py-10">
            <h1 className="text-2xl text-blue-500 font-bold text-left py-2 px-4">Opening Hours</h1>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Saturday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Sunday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Monday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Tuesday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Wednesday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Thursday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">07:00 AM - 07:00 PM</h2>
            </div>
            <div className="flex justify-between p-2 m-2 my-5 border-2  rounded-xl bg-blue-100">
                <h2 className="font-bold py-2 px-8 text-blue-700">Friday</h2>
                <h2 className="font-bold py-2 px-8 text-blue-700">Closed</h2>
            </div>
        </div>
    );
};

export default Openings;
import React, { useState } from 'react';
import Modal from 'react-modal';

const Header = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [ modalIsOpen, setIsOpen ] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="md:flex justify-between px-2 md:px-10 py-2 md:py-4">
            <div className="flex">
                <div className="w-16">
                    <img className="w-full" src="https://i.ibb.co/GtSqNwj/PetCare.png" alt="" />
                </div>
                <h1 className="text-4xl px-3 my-auto text-blue-400 font-bold">Pet Care Clinic</h1>
            </div>
            <div className="md:flex pt-3 md:pt-0 px-5  md:divide-x divide-blue-900">
                <div className="flex px-2">
                    <i className="fas fa-map-marker-alt text-4xl px-4 my-auto text-blue-400"></i>
                    <div className="my-auto">
                        <h3 className="text-2xl text-blue-400">Our Location</h3>
                        <h4>21 Willson Road 3990 FL</h4>
                    </div>
                </div>
                <button onClick={openModal}><i className="fas fa-search text-4xl px-4 my-auto text-blue-400 hidden md:block"></i></button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Search Services"
                >
                    <div className="bg-blue-400 rounded p-10">
                        <h2 className="mx-3 pb-10 text-center text-4xl text-white font-bold">Search Services</h2>
                        <div>
                            <input className="border-gray-300 border mr-2 rounded-xl px-5 text-lg " type="text" />
                            <button className="bg-green-600 rounded-xl px-5 text-lg text-white">Search</button>
                        </div>
                        <button className="mx-2 px-20 py-2 my-5 rounded-xl bg-red-700 text-white" onClick={closeModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';

const Vets = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-semibold text-blue-400 py-5">Our Specialists</h1>
            <div className="md:flex">
                <div className="bg-blue-100 rounded-xl p-4 m-5 shadow-xl">
                    <div className="w-60 mx-auto">
                        <img className="w-full rounded-full" src="https://i.ibb.co/tq91nGZ/veterinarian-check-ing-puppy-s-health.png" alt="vet" />
                    </div>
                    <div className="text-xl text-center">
                        <h1 className="font-bold text-3xl my-2 text-blue-400">Sara Lyn</h1>
                        <p className="mb-2">@saralyn</p>
                        <p>Professional vet and specialized in pet surgery</p>
                    </div>
                </div>
                <div className="bg-blue-100 rounded-xl p-4 m-5 shadow-xl">
                    <div className="w-60 mx-auto">
                        <img className="w-full rounded-full" src="https://i.ibb.co/nwx8wTz/front-view-female-veterinarian-observing-little-dog-yellow-wall.png" alt="vet" />
                    </div>
                    <div className="text-xl text-center">
                        <h1 className="font-bold text-3xl my-2 text-blue-400">Tailor Lyn</h1>
                        <p className="mb-2">@tailorlyn</p>
                        <p>Professional vet and specialized in pet surgery</p>
                    </div>
                </div>
                <div className="bg-blue-100 rounded-xl p-4 m-5 shadow-xl">
                    <div className="w-60 mx-auto">
                        <img className="w-full rounded-full" src="https://i.ibb.co/S7NWkZS/doctor-carrying-little-gray-puppy.png" alt="vet" />
                    </div>
                    <div className="text-xl text-center">
                        <h1 className="font-bold text-3xl my-2 text-blue-400">Maria Lyn</h1>
                        <p className="mb-2">@marialyn</p>
                        <p>Professional vet and specialized in pet surgery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vets;
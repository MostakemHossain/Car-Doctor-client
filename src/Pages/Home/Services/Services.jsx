import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='mt-10'>
            <div className='text-center space-y-4'>
                <h1 className='text-[#FF3811] font-bold'>Service</h1>
                <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised  <br /> words which don't look even slightly believable. </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;
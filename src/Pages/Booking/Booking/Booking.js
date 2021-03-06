import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://polar-lowlands-94487.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h1>Title: {service.name}</h1>
        </div>
    );
};

export default Booking;
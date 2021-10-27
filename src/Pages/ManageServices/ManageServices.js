import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const ManageServices = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('https://polar-lowlands-94487.herokuapp.com/services')
            .then(res => res.json())
            .then(data => SetServices(data));
    }, []);
    const handleDelete = id => {
        const url = `https://polar-lowlands-94487.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("successfully Deleted");
                    const remaining = services.filter(service => service._id !== id);
                    SetServices(remaining);
                }

            })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}
                >
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
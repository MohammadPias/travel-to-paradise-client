import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://immense-taiga-30421.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return {
        services,
        setService
    }
};

export default useServices;
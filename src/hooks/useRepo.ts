import React, { useEffect, useState } from 'react';

import Services from '@/services/api';

const services = new Services();

const useRepo = () => {
    const [repo, setRepo] = useState<any[]>([]);

    const handleGetRepo = async () => {
        try {
            const response = await services.getRepo();
            setRepo(response?.data);
        } catch (error) {
            setRepo([]);
        }
    };

    useEffect(() => {
        handleGetRepo();
    }, []);

    return { repo, handleGetRepo };
};

export default useRepo;

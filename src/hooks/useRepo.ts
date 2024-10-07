import React, { useEffect, useState } from 'react';

import Services from '@/services/api';
import { IRepo } from '@/services/github';

const services = new Services();

const useRepo = () => {
    const [repo, setRepo] = useState<IRepo>([]);

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

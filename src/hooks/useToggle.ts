import { useState } from 'react';

const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    return { toggle, handleToggle: setToggle };
};

export default useToggle;

// packages
import { useState } from 'react';

const useToggle = () => {
	// state
	const [toggle, setToggle] = useState<boolean>(false);

	const toggleHandler = (param?: boolean) => setToggle((prev) => (param ? param : !prev));

	return { toggle, toggleHandler };
};

export default useToggle;

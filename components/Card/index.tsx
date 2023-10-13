// packages
import React from 'react';

const Card: React.FC<CardProps> = (props) => {
	const { height, children } = props;

	return <div className={`w-full py-4 bg-neutral-900 rounded-2xl ${height}`}>{children}</div>;
};

export default Card;

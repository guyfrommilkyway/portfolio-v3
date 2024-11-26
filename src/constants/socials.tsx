import { FaLinkedin, FaHackerrank } from 'react-icons/fa';

const SOCIALS = [
    {
        name: 'LinkedIn',
        username: 'almerflorestampus',
        link: 'https://linkedin.com/in/almerflorestampus',
        icon: <FaLinkedin size={20} />,
    },
    {
        name: 'HackerRank',
        username: 'guyfrommilkyway',
        link: 'https://hackerrank.com/profile/guyfrommilkyway',
        icon: <FaHackerrank size={20} />,
    },
] as const;

export default SOCIALS;

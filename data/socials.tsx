// assets
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const SOCIALS = [
  {
    name: 'LinkedIn',
    username: 'almerflorestampus',
    link: 'https://linkedin.com/in/almerflorestampus',
    icon: <FaLinkedin size={25} />,
  },
  {
    name: 'GitHub',
    username: 'guyfrommilkyway',
    link: 'https://github.com/guyfrommilkyway',
    icon: <FaGithub size={25} />,
  },
  {
    name: 'HackerRank',
    username: 'guyfrommilkyway',
    link: 'https://hackerrank.com/profile/guyfrommilkyway',
    icon: <FaHackerrank size={25} />,
  },
] as const;

export default SOCIALS;

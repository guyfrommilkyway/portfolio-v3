import { FaLinkedin, FaHackerrank, FaInstagram } from 'react-icons/fa6';
import { FaPinterest, FaSquareXTwitter } from 'react-icons/fa6';
import { SiWakatime } from 'react-icons/si';

const SOCIALS = [
  {
    name: 'LinkedIn',
    username: 'almerflorestampus',
    link: 'https://linkedin.com/in/almerflorestampus',
    icon: <FaLinkedin size={16} />,
  },
  {
    name: 'HackerRank',
    username: 'guyfrommilkyway',
    link: 'https://hackerrank.com/profile/guyfrommilkyway',
    icon: <FaHackerrank size={16} />,
  },
  {
    name: 'Wakatime',
    username: 'guyfrommilkyway',
    link: 'https://wakatime.com/@guyfrommilkyway',
    icon: <SiWakatime size={16} />,
  },
  {
    name: 'X (formerly Twitter)',
    username: 'guyfrommilkyway',
    link: 'https://x.com/guyfrommilkyway',
    icon: <FaSquareXTwitter size={16} />,
  },
  {
    name: 'Instagram',
    username: 'aftampus',
    link: 'https://instagram.com/aftampus',
    icon: <FaInstagram size={16} />,
  },
  {
    name: 'Pinterest',
    username: 'guyfrommilkyway',
    link: 'https://ph.pinterest.com/guyfrommilkyway',
    icon: <FaPinterest size={16} />,
  },
] as const;

export default SOCIALS;

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiFillBug, AiFillAndroid, AiFillDashboard } from 'react-icons/ai';
import cardImg from './images/service1.jpg';
import cardImg2 from './images/service2.jpg';
import cardImg3 from './images/service3.jpg';

export const menuList = [
  { id: 1, title: 'home', href: '#home' },
  { id: 2, title: 'about', href: '#about' },
  { id: 3, title: 'service', href: '#service' },
  { id: 4, title: 'contact', href: '#contact' },
];

export const socialList = [
  { id: 1, href: 'https://twitter.com/', icon: <FaTwitter /> },
  { id: 2, href: 'https://twitter.com/', icon: <FaFacebookF /> },
  { id: 3, href: 'https://twitter.com/', icon: <FaInstagram /> },
];

export const cardList = [
  {
    id: 1,
    icon: <AiFillBug />,
    title: 'service 1',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, labore quaerat. Laudantium temporibus sint recusandae libero magnam deserunt consequatur hic!',
    img: cardImg,
  },
  {
    id: 2,
    icon: <AiFillAndroid />,
    title: 'service 2',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, labore quaerat. Laudantium temporibus sint recusandae libero magnam deserunt consequatur hic!',
    img: cardImg2,
  },
  {
    id: 3,
    icon: <AiFillDashboard />,
    title: 'service 3',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, labore quaerat. Laudantium temporibus sint recusandae libero magnam deserunt consequatur hic!',
    img: cardImg3,
  },
];

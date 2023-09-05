import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'home',
    },
    {
        id: 2,
        href: '#about',
        text: 'about',
    },
    {
        id: 3,
        href: '#services',
        text: 'services',
    },
    {
        id: 4,
        href: '#tours',
        text: 'tours',
    },

]

export const socialLinks = [
    {
        id: 1,
        href: 'https://www.facebook.com/',
        icon: 'fab fa-facebook',
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter',
    },
    {
        id: 3,
        href: 'https://www.squarespace.com/',
        icon: 'fab fa-squarespace',
    },
    {
        id: 4,
        href: '#tours',
        icon: 'tours',
    },

]

export const services = [
    {
        id: 1,
        title: 'saving money',
        icon: 'fas fa-wallet fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    },
    {
        id: 2,
        title: 'endless hiking',
        icon: 'fas fa-tree fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    },
    {
        id: 3,
        title: 'amazing comfort',
        icon: 'fas fa-socks fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    },
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        vitae tempore voluptatum maxime reprehenderit eum quod
        exercitationem fugit, qui corporis.`,
        location: 'china',
        duration: 6,
        price: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        vitae tempore voluptatum maxime reprehenderit eum quod
        exercitationem fugit, qui corporis.`,
        location: 'indonesia',
        duration: 11,
        price: 1400,
    },
    {
        id: 3,
        image: tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        vitae tempore voluptatum maxime reprehenderit eum quod
        exercitationem fugit, qui corporis.`,
        location: 'hong kong',
        duration: 8,
        price: 5000,
    },
    {
        id: 4,
        image: tour4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        vitae tempore voluptatum maxime reprehenderit eum quod
        exercitationem fugit, qui corporis.`,
        location: 'kenya',
        duration: 20,
        price: 3300,
    },
]
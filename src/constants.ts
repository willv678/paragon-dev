import brownLogo from '@/assets/colleges/brown.png';
import georgetownLogo from '@/assets/colleges/georgetown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import stanfordLogo from '@/assets/colleges/stanford.png';
import ucbLogo from '@/assets/colleges/ucb.png';
import uciLogo from '@/assets/colleges/uci.png';
import ucsdLogo from '@/assets/colleges/ucsd.png';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';
// import maricopaLogo from '@/assets/governments/Maricopa.png';
import brownsvilleLogo from '@/assets/governments/Brownsville.png';
import bostonLogo from '@/assets/governments/Boston.png';
import stLouisLogo from '@/assets/governments/StLouis.png';
import georgiaLogo from '@/assets/governments/Georgia.png';
import losAngelesLogo from '@/assets/governments/LosAngeles.png';
import tempeLogo from '@/assets/governments/Tempe.png';
import santaClaraLogo from '@/assets/governments/Santa Clara.png';
import sanJoseLogo from '@/assets/governments/SanJose.png';
import lebanonLogo from '@/assets/governments/Lebanon.png';
import albuquerqueLogo from '@/assets/governments/AlbuquerqueLogo.png';
import alexandriaLogo from '@/assets/governments/AlexandriaLogo.png';
import cdiiLogo from '@/assets/governments/CDIILogo.png';
import fortLauderdaleLogo from '@/assets/governments/FortLauderdale.png';
import madisonLogo from '@/assets/governments/Madison.png';
import missoulaLogo from '@/assets/governments/Missoula.png';
import montanaSITSDLogo from '@/assets/governments/MontanaSITSD.png';

import { StaticImageData } from 'next/image';

export const governments: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    // maricopa: {
    //     name: 'Maricopa',
    //     logo: maricopaLogo
    // },
    brownsville: {
        name: 'Brownsville',
        logo: brownsvilleLogo
    },
    boston: {
        name: 'Boston',
        logo: bostonLogo
    },
    stLouis: {
        name: 'St. Louis',
        logo: stLouisLogo
    },
    georgia: {
        name: 'Georgia',
        logo: georgiaLogo
    },
    losAngeles: {
        name: 'Los Angeles',
        logo: losAngelesLogo
    },
    tempe: {
        name: 'Tempe',
        logo: tempeLogo
    },
    santaClara: {
        name: 'Santa Clara',
        logo: santaClaraLogo
    },
    sanJose: {
        name: 'San Jose',
        logo: sanJoseLogo
    },
    lebanon: {
        name: 'Lebanon',
        logo: lebanonLogo
    },
    albuquerque: {
        name: 'Albuquerque',
        logo: albuquerqueLogo
    },
    alexandria: {
        name: 'Alexandria',
        logo: alexandriaLogo
    },
    cdii: {
        name: 'CDII',
        logo: cdiiLogo
    },
    fortLauderdale: {
        name: 'Fort Lauderdale',
        logo: fortLauderdaleLogo
    },
    madison: {
        name: 'Madison',
        logo: madisonLogo
    },
    missoula: {
        name: 'Missoula',
        logo: missoulaLogo
    },
    montanaSITSD: {
        name: 'Montana SITSD',
        logo: montanaSITSDLogo
    }
};

export const colleges: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    harvard: {
        name: 'Harvard',
        logo: harvardLogo
    },
    brown: {
        name: 'Brown',
        logo: brownLogo
    },
    yale: {
        name: 'Yale',
        logo: yaleLogo
    },
    penn: {
        name: 'Penn',
        logo: pennLogo
    },
    gt: {
        name: 'Georgia Tech',
        logo: gtLogo
    },
    uga: {
        name: 'University of Georgia',
        logo: ugaLogo
    },
    risd: {
        name: 'RISD',
        logo: risdLogo
    },
    iit: {
        name: 'Illinois Tech',
        logo: iitLogo
    },
    georgetown: {
        name: 'Georgetown',
        logo: georgetownLogo
    },
    stanford: {
        name: 'Stanford',
        logo: stanfordLogo
    },
    ucsd: {
        name: 'UC San Diego',
        logo: ucsdLogo
    },
    ucb: {
        name: 'UC Berkeley',
        logo: ucbLogo
    },
    uci: {
        name: 'UC Irvine',
        logo: uciLogo
    }
}

export const AIRTABLE_API_KEY = `patUaz6OGg90PIjOT.a3a57483b5bb0c36b546a85441b77f8737b4d61e679345b33804f29385d8ed16` // i realize this is bad practice but this key can only read from only the people table (which is public) so im not concerned
export const AIRTABLE_BASE_ID = `appItWRxWaZWa1qhj`

export const AIRTABLE_URL = "https://airtable.com/appItWRxWaZWa1qhj/shrfKG3W0XpO1L2tx"
export const MAIL_LIST_URL = "https://airtable.com/appRhVSa7OpK9YsDn/pagFfGYZK9UoorY0A/form"
export const NEWSLETTER_URL = "https://paragonpolicyfellowship.substack.com/"
export const FA_APP_URL = "https://airtable.com/appD9YuZjLzgT3p58/pagnaXfOC5ByK0hoY/form"

export type MenuOption = {
    name: string,
    url: string,
    topBar?: boolean
}

export const defaultMenuOptions: MenuOption[] = [
    { name: 'Home', url: '/' },
    { name: 'Past Projects', url: '/projects', topBar: true },
    { name: 'For Governments', url: '/governments', topBar: true },
    { name: 'Meet the Team', url: '/team', topBar: true },
    { name: 'Past Speakers', url: '/team/speakers', topBar: true },
    { name: 'Contact us', url: 'mailto:paragonfellowship@gmail.com' }
]
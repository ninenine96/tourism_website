import React from 'react'
import { InfoSectionAbout, InfoSectionFAQ } from '../../components/InfoSection/InfoSection'
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
    homeObjSeven,
    homeObjEight,
    homeObjNine,
    homeObjTen,
    homeObjEleven,
    homeObjTwelve,
    homeObjThirteen,
} from './data'

const FAQ = () => {
    return (
        <>
            <InfoSectionAbout {...homeObjOne} />   
            <InfoSectionFAQ {...homeObjTwo} />
            <InfoSectionFAQ {...homeObjThree} />
            <InfoSectionFAQ {...homeObjFour} />
            <InfoSectionFAQ {...homeObjFive} />
            <InfoSectionFAQ {...homeObjSix} />
            <InfoSectionFAQ {...homeObjSeven} />
            <InfoSectionFAQ {...homeObjEight} />
            <InfoSectionFAQ {...homeObjNine} />
            <InfoSectionFAQ {...homeObjTen} />
            <InfoSectionFAQ {...homeObjEleven} />
            <InfoSectionFAQ {...homeObjTwelve} />
            <InfoSectionFAQ {...homeObjThirteen} />
        </>
    )
}

export default FAQ

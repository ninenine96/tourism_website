import React from 'react'
import { InfoSectionAbout, InfoSectionFAQ } from '../../../components/InfoSection/InfoSection'
import { 
    trip_kkk,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
    homeObjSeven,
    homeObjEight,
    homeObjNine,
    homeObjTen,
} from './data.js'

const TripKK = () => {
    return (
        <>
            <InfoSectionAbout {...trip_kkk} />   
            <InfoSectionFAQ {...homeObjTwo} />
            <InfoSectionFAQ {...homeObjThree} />
            <InfoSectionFAQ {...homeObjFour} />
            <InfoSectionFAQ {...homeObjFive} />
            <InfoSectionFAQ {...homeObjSix} />
            <InfoSectionFAQ {...homeObjSeven} />
            <InfoSectionFAQ {...homeObjEight} />
            <InfoSectionFAQ {...homeObjNine} />
            <InfoSectionFAQ {...homeObjTen} />
    
        </>
    )
}

export default TripKK

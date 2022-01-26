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
    homeObjEleven,
} from './datakkk.js'

const TripKKK = () => {
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
            <InfoSectionFAQ {...homeObjEleven} />
    
        </>
    )
}

export default TripKKK

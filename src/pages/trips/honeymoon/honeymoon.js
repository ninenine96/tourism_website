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

} from './data.js'

const Honeymoon = () => {
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
            
    
        </>
    )
}

export default Honeymoon

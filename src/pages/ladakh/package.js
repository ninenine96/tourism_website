import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
    homeObjSeven
} from './data'

const Ladakh = () => {
    return (
        <>
         <InfoSection {...homeObjOne} />  
         <InfoSection {...homeObjTwo} />  
         <InfoSection {...homeObjThree} />  
         <InfoSection {...homeObjFour} />  
         <InfoSection {...homeObjFive} />  
         <InfoSection {...homeObjSix} />  
         <InfoSection {...homeObjSeven} />  
           
        </>
    )
}

export default Ladakh
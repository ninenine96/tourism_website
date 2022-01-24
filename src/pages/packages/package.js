import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
} from './data'

const Packages = () => {
    return (
        <>
         <InfoSection {...homeObjOne} />  
         <InfoSection {...homeObjTwo} />  
         <InfoSection {...homeObjThree} />  
         <InfoSection {...homeObjFour} />  
         <InfoSection {...homeObjFive} />  
           
        </>
    )
}

export default Packages
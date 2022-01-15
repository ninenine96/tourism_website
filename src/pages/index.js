import React from 'react'
import { InfoSection } from '../components/InfoSection/InfoSection'
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
} from './Data'

const Home = () => {
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

export default Home

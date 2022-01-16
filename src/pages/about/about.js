import React from 'react'
import { InfoSectionAbout } from '../../components/InfoSection/InfoSection'
import { 
    homeObjOne,
} from './data'

const About = () => {
    return (
        <>
         <InfoSectionAbout {...homeObjOne} />   
           
        </>
    )
}

export default About

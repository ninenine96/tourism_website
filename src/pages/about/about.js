import React from 'react'
import { InfoSection, InfoSection_About } from '../../components/InfoSection/InfoSection'
import { 
    homeObjOne,
} from './data'

const About = () => {
    return (
        <>
         <InfoSection_About {...homeObjOne} />   
           
        </>
    )
}

export default About

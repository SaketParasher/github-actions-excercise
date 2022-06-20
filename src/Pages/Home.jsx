import React from 'react'
import Box from '@mui/material/Box'
import HeroBanner from '../Components/HeroBanner'
import SearchExcercise from '../Components/SearchExcercise'
import Excercises from '../Components/Excercises'

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExcercise/>
        <Excercises/>
    </Box>
  )
}

export default Home
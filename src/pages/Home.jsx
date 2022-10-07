import { Box } from '@mui/material'
import React, { useState } from 'react'

import Exercises from '../componens/Exercises'
import HeroBanner from '../componens/HeroBanner'
import SearchExbercises from '../componens/SearchExbercises'

const Home = () => {
  // useState()
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExbercises setBodyPart={setBodyPart} bodyPart={bodyPart} setExercises={setExercises} />
      <Exercises exercises={exercises} setBodyPart={setBodyPart} bodyPart={bodyPart} setExercises={setExercises} />
    </Box>
  )
}

export default Home

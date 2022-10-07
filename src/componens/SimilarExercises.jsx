import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', sx: '0' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        类似 <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> 的运动
      </Typography>
      <Stack direction={'row'} sx={{ p:'2',position:'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises}></HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        类似 <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> 的运动
      </Typography>
      <Stack direction={'row'} sx={{ p:'2',position:'relative' }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises}></HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercises

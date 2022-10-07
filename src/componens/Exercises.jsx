import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { fetchData } from '../utils/fetchData'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ bodyPart, setExercises, exercises }) => {
  // 当前是第几页
  const [currentPage, setCurrentPage] = useState(1)
  // 一次性展示多少条
  const [exercisesPerPage] = useState(6)

  useEffect(() => {
    // 首次进来加载全部信息
    // 每次点击上面的卡片 都会获取对应的数据
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart,setExercises])

  // 获取当前页数的最后一条的数量
  const indexOfLastExercise = currentPage * exercisesPerPage
  // 获取当前页数第一条的数量
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  // 切个数组，获取当前页数应该展示的数据
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  console.log(indexOfFirstExercise, indexOfLastExercise, currentExercises, exercises)

  // 点击分页
  const paginate = (e, value) => {
    setCurrentPage(value)
    // 滚动到卡片的最上方
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }
  if (!currentExercises.length) return <Loader />

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p={'20px'}>
      <Typography variant="h3" mb={'46px'}>
        showing Results
      </Typography>
      <Stack
        direction={'row'}
        sx={{
          gap: { lg: '110px', xs: '50px' }
        }}
        flexWrap="wrap"
        justifyContent={'center'}
      >
        {currentExercises.map((item, idx) => (
          <ExerciseCard key={idx} exercise={item}></ExerciseCard>
        ))}
      </Stack>
      {/* 分页 */}
      <Stack mt={'100px'} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            pagt={currentPage}
            onChange={paginate}
          ></Pagination>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises

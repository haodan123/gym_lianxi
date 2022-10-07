import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExbercises = ({setBodyPart,bodyPart,setExercises}) => {
  // 搜索字符串
  const [searchText, setSearchText] = useState('')
  // 渲染数组
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      console.log(bodyPartsData)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (!searchText) return

    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    // console.log(exercisesData)
    //掉接口获取到所有的数据
    // 然后跟自己输入的内容作对比，获取搜索内容的数据
    const searchedExercises = exercisesData.filter(
      item =>
        item.name.toLowerCase().includes(searchText) ||
        item.target.toLowerCase().includes(searchText) ||
        item.equipment.toLowerCase().includes(searchText) ||
        item.bodyPart.toLowerCase().includes(searchText)
    )
    // console.log(searchedExercises)
    setSearchText('')
    setExercises(searchedExercises)
  }

  return (
    <Stack alignItems={'center'} mt="37px" justifyContent={'center'} p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign={'center'}>
        Awesome Exercises You
        <br />
        Should Knew
      </Typography>
      <Box position={'relative'} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColot: '#fff',
            borderRadius: '40px'
          }}
          placeholder="搜索肥麦运动"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value.toLowerCase())
          }}
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
        >
          Search
        </Button>
      </Box>
      {/* 滚动条 */}
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}></HorizontalScrollbar>
      </Box>
    </Stack>
  )
}

export default SearchExbercises

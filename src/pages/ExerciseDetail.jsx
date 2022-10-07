import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

import SimilarExercises from '../componens/SimilarExercises'
import Detail from '../componens/Detail'
import ExerciseVideos from '../componens/ExerciseVideos'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos,setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      // 获取Detail组件里的数据
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      // 获取youtube搜索的数据
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      // console.log(exerciseVideosData);
      // 最后一个组件的两个接口
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      console.log(targetMuscleExercisesData,equimentExercisesData);
    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}> </SimilarExercises>
    </Box>
  )
}

export default ExerciseDetail

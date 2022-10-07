import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import bodyPartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart
    },
    {
      icon: targetImage,
      name: target
    },
    {
      icon: equipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack gap={'60px'} sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} className="detail-image" loading="lazy" alt={name} />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one of the best{' '}
          <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map(item => (
          <Stack key={item.name} direction="row" gap={'24px'} alignItems="center">
            <Button
              sx={{
                background: '#fff2bd',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img src={item.icon} alt="icon" loading="lazy" />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail

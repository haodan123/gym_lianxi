import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around"
    sx={{gap:{sm :'122px',xs:'40px' },mt:{sm:'32px',xs:'20px'},justifyContent:'none'}}
    px='20px'
    >
      {/* 左边的logo图标 */}
      <Link to={'/'}>
        <img src={logo} style={{ width: '48px', height: '48px', margin: ' 0 20px ' }} alt="logo" />
      </Link>
      {/* 右边的 导航栏  */}
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }} to={'/'}>
          Home
        </Link>
        <a style={{ textDecoration: 'none', color: '#3A1212' }} href="#exercises">
          Exercises运动
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar

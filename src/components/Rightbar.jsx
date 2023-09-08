import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm:"flex", flexDirection: "column", alignItems: "center", color: 'black'}}}>
        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>
        <AvatarGroup  max={4}>
            <Avatar alt="Remy Sharp" />
            <Avatar alt="Travis Howard" />
            <Avatar alt="Cindy Baker" />
            <Avatar alt="Agnes Walker" />
            <Avatar alt="Trevor Henderson" />
        </AvatarGroup>
    </Box>
  )
}

export default Rightbar
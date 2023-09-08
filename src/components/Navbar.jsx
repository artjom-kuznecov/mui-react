import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import {borderRadius} from '@mui/system'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
})
const Search = styled("div") (({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: '10px',
    width: '40%',
}))

const Icons = styled(Box) (({theme}) => ({
    display: 'none', 
    alignItems: 'center', 
    gap: 20,
    [theme.breakpoints.up('sm')] : {
        display: 'flex',        
    }
}))
const UserBox = styled(Box) (({theme}) => ({
    display: 'flex', 
    alignItems: 'center', 
    gap: 20,
    [theme.breakpoints.up('sm')] : {
        display: 'none',        
    }

}))

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
    <AppBar position='sticky' >
        <StyledToolbar>
            <Typography variant='h6' sx = {{display: {xs:'none', sm:'block'}}}>ARKUZ</Typography>
            <BugReportIcon sx = {{display: {xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder='Search'/></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail />
                </Badge>

                <Badge badgeContent={2} color='error'>
                    <Notifications />
                </Badge>

                <Avatar 
                    sx = {{width: '30px', height: '30px'}} 
                    src = "https://i1.sndcdn.com/artworks-AV3yT135aFYucjX4-O771hA-t500x500.jpg"
                    onClick = {(e) => setOpen(true)}
                />
            </Icons>
            <UserBox>
                <Avatar 
                    sx = {{width: '30px', height: '30px'}} 
                    src = "https://i1.sndcdn.com/artworks-AV3yT135aFYucjX4-O771hA-t500x500.jpg"
                    onClick = {(e) => setOpen(true)}    
                />
                
                <Typography>Alan</Typography>
            </UserBox>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open = {open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
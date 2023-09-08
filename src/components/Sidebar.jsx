import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import Home from '@mui/icons-material/home'
import Settings from '@mui/icons-material/settings'
import Person3Icon from '@mui/icons-material/Person3';
import PostAddIcon from '@mui/icons-material/PostAdd';
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: "none", sm:"block"}}}>
        <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person3Icon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add post" />
            </ListItemButton>
          </ListItem>
          
        </List>
        </Box>
        
    </Box>
  )
}

export default Sidebar
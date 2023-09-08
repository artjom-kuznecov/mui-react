import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import React, { useState } from 'react'


const StyledModal = styled(Modal) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box) ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
})
const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip 
        onClick={e => setOpen(true)}
        title="Add post"
        sx = {{
            position: 'fixed',
            bottom: '20px',
            left: {xs: 'calc(50% - 25px)', md: '30px'}
        }}
        >
        <Fab color="primary" aria-label="add">
            <PostAddIcon />
        </Fab>
        </Tooltip>

        <StyledModal

            open={open}
            onClose={e => setOpen(false)}
        >
            <Box
                width={400}
                height={250}
                bgcolor={'white'}
                p={3}
                borderRadius={5}
            >
                <Typography fontWeight={500} color={'grey'} textAlign={'center'}>Create post</Typography>
                <UserBox>
                    <Avatar 
                        sx = {{width: '30px', height: '30px'}} 
                        src = "https://i1.sndcdn.com/artworks-AV3yT135aFYucjX4-O771hA-t500x500.jpg"  
                    />
                    
                    <Typography fontWeight={600}>Alan Turing</Typography>
                </UserBox>
                <TextField
                sx ={{width: '100%', margin: '5px 0'}}
                    id="standard-multiline-static"
                    multiline
                    
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction={'row'} gap = {2} >
                    <EmojiEmotionsIcon color="primary"/>
                    <AddPhotoAlternateIcon color = 'default'/>
                    <GroupAddIcon color = "secondary"/>
                </Stack>
                <Button sx = {{marginTop: '30px'}} fullWidth variant="contained">POST</Button>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add
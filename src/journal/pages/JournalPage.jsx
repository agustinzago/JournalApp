import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam numquam molestiae libero aliquid aperiam praesentium incidunt beatae nemo dolor dolorem laudantium, alias ipsa recusandae illum, vitae voluptas? Repellat, asperiores?</Typography> */}
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{fontSize: 30}}/>

      </IconButton>
    </JournalLayout>
  )
}

import { useState } from 'react'
import { Box, Button, Container, Stack, Typography, TextField } from '@mui/material'

function App() {
  const [country, setCountry] = useState('')

  return (
    <Container maxWidth='sm' sx={{marginTop: '128px'}}>
      <Stack spacing={2}>
        <Typography variant='h4'>
          Country: 
        </Typography>
        <TextField 
        variant='filled'
        type='text'
        value={country}
        onChange={(e) => setCountry(e.target.value)} 
        />
        <Button>GO {country}</Button>
      </Stack>
    </Container>
  )
}

export default App

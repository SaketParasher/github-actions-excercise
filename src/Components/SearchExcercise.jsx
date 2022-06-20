import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useGetAllBodyPartsQuery } from '../API/APISlice'

const SearchExcercise = () => {
    const [search,setSearch] = useState('')
    //const { data:allBodyParts } = useGetAllBodyPartsQuery();
    const handleSearch = () => {

    }

    //console.log(allBodyParts);
  return (
    <Stack alignItems='center' justifyContent='center' mt='25px' p='20px'>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} textAlign='center' mb='50px'>Awesome Excercises You <br/> Should Know</Typography>
        <Box mb='50px' display='flex' flexDirection='row' alignItems='center' width='90%'>
            <TextField value={search} placeholder='Search Excercises' type='text' onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}} sx={{
                width:{sm:'80%',xs:'60%'}, backgroundColor:'#fff', borderRadius:'0px !important'
            }}/>
            <Button className='search-btn' sx={{
                bgcolor:'#FF2625',color:'#FFF',textTransform:'none', width:{sm:'20%',xs:'40%'}, height:'54px',borderRadius:'0px' 
            }} onClick={handleSearch}>Search</Button>
        </Box>
        
    </Stack>
  )
}

export default SearchExcercise
import React from 'react'
import Box from '@mui/material/Box'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({bodyParts}) => {
  return (
    <div>{bodyParts.map(item => (
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
            <BodyPart item={item}/>
        </Box>
    ))}</div>
  )
}

export default HorizontalScrollbar
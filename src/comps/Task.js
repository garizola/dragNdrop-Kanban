import { Card } from "@mui/material";
import { useDrag } from "react-dnd";
import React from 'react'

const Task = ({description, index, rowNum}) => {

    const [{isDragging}, drag, preview] = useDrag(() => ({
        type: "card",
        item: {description: description, index: index, rowNum: rowNum}

    }), [])

  return (
    <Card sx={{m: 2, bgcolor: "#284f8f", color: "white"}} ref={drag}>
        <p>{description}</p>
    </Card>
  )
}

export default Task
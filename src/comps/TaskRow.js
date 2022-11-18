import React from 'react'
import { Grid } from "@mui/material"
import Task from './Task'
import { useDrop } from 'react-dnd'
import { TaskStore, MoveCommand } from '../system/TaskStore'

const TaskRow = ({ rowData, rowNum}) => {

    const [{isOver, canDrop, }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => {
            let moveCommand = new MoveCommand( item.rowNum, rowNum, {
                index: item.index, description: item.description
            });
            TaskStore.moveTask(moveCommand);
        }
    }), [])


    let tasks = rowData.tasks.map((task, idx) => (
        <Task key={task.id} description={task.description} index={idx} rowNum={rowNum} />
    ))



  return (
    <Grid xs={4} sx={{fontSize: 20, fontWeight: 500}} ref={drop}>
        {rowData.name} {tasks}
    </Grid>
  )
}

export default TaskRow
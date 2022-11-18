import {useState, useEffect} from 'react';
import {Grid, Container} from '@mui/material';
import { TaskStore } from '../system/TaskStore';
import TaskRow from './TaskRow';
import AddTask from './AddTask';

import React from 'react'

const FakeKanban = () => {
    const [rowData, setRowData] = useState(TaskStore.rows)

    useEffect(() => {
        TaskStore.subscriber(onTaskUpdate);
    }, [])

    function onTaskUpdate() {
        setRowData([...TaskStore.rows])
    }

    let rows = rowData.map((row, idx) => (
        <TaskRow key={idx} rowData={row} rowNum={idx} />
    ))


  return (
    <Container>
        <Grid container>
            {rows}
            
        </Grid>
        <AddTask />
        
    </Container>
  )
}

export default FakeKanban
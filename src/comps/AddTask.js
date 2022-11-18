import { useState } from "react";
import { Input, Button } from "@mui/material";
import { TaskStore, AddCommand } from "../system/TaskStore";

import React from 'react'

const AddTask = () => {
    const [taskVal, setTaskVal] = useState("")


  return (
    <>
        <Input value={taskVal} onChange={(e) => {setTaskVal(e.target.value)}} sx={{mt: 4}} />
        <Button onClick={() => {
            let cmdAdd = new AddCommand(0, taskVal);
            TaskStore.addTask(cmdAdd);
            setTaskVal("");
        }}>Add Task</Button>
    </>
  )
}

export default AddTask
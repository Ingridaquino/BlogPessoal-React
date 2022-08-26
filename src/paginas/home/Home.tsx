import {Paper, Box, Button } from "@mui/material"; 
// Importacao diferente do video 
import React from "react";

export function Home() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Hello</h1>
            {/* <img src="https://avatars.githubusercontent.com/u/62892046?v=4" alt=""  
                style={{width:"30%", height:"30%"}}
            /> */}
            <Box display="flex" justifyContent="center" p={2}>
              <Button variant="contained" color="primary">Click 1</Button>
              <Button variant="contained" color="secondary" >Click 2</Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}
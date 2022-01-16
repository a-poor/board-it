import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import Frame from './Frame'


export default function Board() {
  const n = 5;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid 
          container
          spacing={3}
          style={{
            padding: "25px",
          }}
        >
          {
            Array.from({ length: n }, (_, i) => (
              <Grid 
                item
                style={{
                }}
                key={i}
              >
                <Paper
                  style={{
                    width: "340px",
                    height: "400px",
                  }}
                >
                  <Frame idx={i}/>
                </Paper>
              </Grid>
            ))
          }
          <Grid 
            item
            style={{
            }}
          >
            <Paper
              style={{
                width: "340px",
                height: "400px",
              }}
            >
              <div style={{ margin: "15px" }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div style={{ height: "35%" }}/>
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                  }}>
                  <IconButton
                  >
                    <Icon sx={{ fontSize: 60 }}>
                      add_box_rounded
                    </Icon>
                  </IconButton>
                </div>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Add Frame
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
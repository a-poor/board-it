import React from 'react'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Icon from '@mui/material/Icon'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function Frame({ idx }: { idx: number }) {
  return (
    <div
      style={{
        margin: "15px",
      }}
    >
      <div style={{ height: "10px" }}/>
      <Typography>
        Frame: { idx + 1 }
      </Typography>
      <div style={{
        margin: "10px auto",
        width: "calc(16 * 19px)",
        height: "calc(9 * 19px)",
        backgroundColor: "#f0f0f0",
      }}/>
      <Typography
        paragraph
        noWrap
        sx={{
          height: "50px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <ButtonGroup>
        <IconButton>
          <Tooltip title="Move Frame Back">
            <Icon>arrow_left</Icon>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Move Frame Forward">
            <Icon>arrow_right</Icon>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Edit Frame">
            <Icon>edit</Icon>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Delete Frame">
            <Icon>delete</Icon>
          </Tooltip>
        </IconButton>        
      </ButtonGroup>
    </div>
  )
}

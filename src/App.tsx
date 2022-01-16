import React, { useState } from 'react'

import Container from '@mui/material/Container'

import Nav from './Nav'
import Header from './Header'
import Board from './Board'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ height: "15px" }}/>
      <Container
        maxWidth="lg"
      >
        <Header />
        <Board />
      </Container>
    </div>
  )
}

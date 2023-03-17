/* eslint-disable no-unused-vars */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Stack } from '@mui/system';

export default function Cabecalho() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AssessmentIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cal+IMC
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

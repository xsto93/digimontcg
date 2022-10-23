import React from 'react';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';

const RouterTCG = () => {
  return (
    <List>
        <ListItem key={'TCG'} disablePadding>
          <ListItemButton LinkComponent={Link} href="/inventory">
            <ListItemIcon>
                <ScreenSearchDesktopIcon />
            </ListItemIcon>
            <ListItemText primary={'TCG'} />
          </ListItemButton>
        </ListItem>
         <ListItem key={'Main'} disablePadding>
         <ListItemButton LinkComponent={Link} href="/">
           <ListItemIcon>
            <HomeIcon />
           </ListItemIcon>
           <ListItemText primary={'Main'} />
         </ListItemButton>
       </ListItem>
        <ListItem key={'FAQ'} disablePadding>
        <ListItemButton LinkComponent={Link} href="/FAQ">
          <ListItemIcon>
            <QuizIcon />
          </ListItemIcon>
          <ListItemText primary={'FAQ'} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default RouterTCG;
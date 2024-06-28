import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
    <Link to="maindashboard" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
      </Link>

    </ListItemButton>
    
    <ListItemButton>
<Link to="parent" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
       <ListItemText primary="Parent Child" />
       </Link>
    
    </ListItemButton>
    
    <ListItemButton>
    <Link to="clickcounter" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Click Counter" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="hovercounter" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Hover Counter" />
      </Link>

    </ListItemButton>
    <ListItemButton>
    <Link to="myimages" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="My images" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="myslider" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="My Slider" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="reacthook" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="React Hook" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="toggleimg" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Toggle Image" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="togglemulti" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Multi Toggle" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="virtualdom" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Virtual DOM" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="formval" style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}>

      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Form Val" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);


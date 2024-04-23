
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, styled,Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeContainer from './AllProducts';
const SidebarContainer = styled(Box)`
  width: 250px;
  padding-top: 20px;
  flex:1;
`;

const SidebarButton = styled(Button)`
  && {
    text-align: left;
    margin-bottom: 8px;
  }
`;
const ListItemx = styled(ListItemText)`

    color:red;
`;

const Sidebar = ({ open, setOpen }) => {
  const handleSetClose = () => {
    setOpen(false);
  };
const handleClick=() =>{
    HomeContainer();
}

  return (
    <Drawer open={open} onClose={handleSetClose}>
      <SidebarContainer>
        <List>
          <ListItem button  onClick={handleClick}>
            <SidebarButton>
            <InventoryIcon/>
            <ListItemText primary="Show All Products" />
            </SidebarButton>
          </ListItem>
          <ListItem >
            <ListItemx primary="View" style={{fontWeight:'700'}} />
          </ListItem>
          <List>
            <ListItem  button>
              <SidebarButton>
                <ViewListIcon/>
                <ListItemText primary="List View" />
              </SidebarButton>
            </ListItem>
            <ListItem  button>
              <SidebarButton>
                <CollectionsIcon/>
                <ListItemText primary="Gallery View" />
              </SidebarButton>
            </ListItem>
          </List>
          <Divider />
          <ListItem button>
            <SidebarButton>
                <AddIcon/>
              <ListItemText primary="Add Product" />
            </SidebarButton>
          </ListItem>
          <ListItem button>
            <SidebarButton>
            <EditIcon/>
              <ListItemText primary="Edit Product" />
            </SidebarButton>
          </ListItem>
          <ListItem button>
            <SidebarButton>
                <DeleteIcon/>
              <ListItemText primary="Delete Product" />
            </SidebarButton>
          </ListItem>
        </List>
      </SidebarContainer>
    </Drawer>
  );
};

export default Sidebar;

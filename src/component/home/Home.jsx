import NavBar from './NavBar';
import Banner from './Banner';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import Add from './DealofDay';
const HomeContainer = () => {
  return (
    <Fragment>
      <NavBar />
      <Box>
        <Banner />
      </Box>
      <Add/>
    </Fragment>
  );
};

export default HomeContainer;

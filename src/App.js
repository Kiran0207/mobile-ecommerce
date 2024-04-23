
import './App.css';
import Header from './component/header/Header';
import { styled } from '@mui/material';
import Home from './component/home/Home';
import {Box} from '@mui/material';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import DetailView from './component/details/DetailView';
const fixbox=styled(Box)({
  position: 'fixed',
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div>
        <Box>
            <Header/>
        </Box>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<DetailView/>}/>  
         
        </Routes>
      </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

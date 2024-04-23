import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, styled } from '@mui/material';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions/actions';
import { products,Trendingproducts } from '../../assests/data.js';
import Countdown from 'react-countdown';
import TimerIcon from '@mui/icons-material/Timer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {Link} from 'react-router-dom';
const Component=styled(Box)`
    background: #ffffff;

`;
const Deal= styled(Box)`
    display: flex;
    padding: 20px 20px;
`;
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6// Display one item at a time for super large desktop
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5 // Display one item at a time for desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1 // Display one item at a time for tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 // Display one item at a time for mobile
    }
  };
  const renderer = ({hours,minutes,seconds}) =>{
    return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
  }
  const Timer= styled(Box)`
    display:flex;
    margin-left:10px;
    align-items: center;
    color: #7f7f7f;
  
  `
  const DealofDay=styled(Typography)`
    font-weight: 600;
  `
  const Comp=styled(Box)`
    text-align:center;
  `
  const Text=styled(Typography)`
        font-size=14px;
        margin-top=5px;
  `
class Add extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }
 
  render() {
    return (
        <Component>
            <hr></hr>
        <Deal>
           <DealofDay>Deal of the Day</DealofDay> 
           <Timer>
           <TimerIcon/>
           <Countdown date={Date.now()+1.08e+8} renderer={renderer} /> 

           </Timer>
        </Deal>
        <Carousel containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        swipeable={false}
        responsive={responsive}>
            {
                products.map(product =>(
                  <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                  
                    <Comp>
                        <img src={product.url} alt="product" style={{width:'300px',height:'300px'}}/>
                        <Text style={{fontWeight:'600'}}>{product.title.shortTitle}</Text>
                        <Text style={{color:"green"}}>{product.discount}</Text>
                        <Text style={{color:"grey"}}>{product.tagline}</Text>
                    </Comp>
                  </Link>
                    
                ))
            }
        </Carousel>
        <hr></hr>
        <Deal>
           <DealofDay>Trending</DealofDay> 
           <Timer>
           <WhatshotIcon/>
           </Timer>
        </Deal>
        <Carousel containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        swipeable={false}
        responsive={responsive}>
            {
                Trendingproducts.map(product =>(
                    <Comp>
                        <img src={product.url} alt="product" style={{width:'250px',height:'300px'}}/>
                        <Text style={{fontWeight:'600'}}>{product.title.shortTitle}</Text>
                        <Text style={{color:"green"}}>{product.discount}</Text>
                        <Text style={{color:"grey"}}>{product.tagline}</Text>
                    </Comp>
                    
                ))
            }
        </Carousel>
        </Component>
      
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { loadProducts })(Add);

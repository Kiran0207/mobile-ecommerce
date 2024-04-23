
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../assests/data';
import 'react-multi-carousel/lib/styles.css';
import {styled} from '@mui/material';
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1 // Display one item at a time for super large desktop
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1 // Display one item at a time for desktop
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
const Image=styled('img')({
    width:'1450px',
    height: '530px',
})
const designedCarousel=styled('Carousel')`
    text-align:center;
`
const Banner= () =>{
    return(
        <Carousel responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        swipeable={false}
        >
            {
                bannerData.map(data=>
                    <Image src={data.url} alt="banner"  />

                )
            }
        </Carousel>
    )
}
export default Banner;
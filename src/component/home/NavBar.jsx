import { Box , styled, Typography} from '@mui/material';
import { navData } from '../../assests/data';
const Component=styled(Box)`
    display: flex;
    margin: 15px 130px 0px 130px;
    justify-content: space-between;

`
const Container=styled(Box)`
    padding: 12px 8px;
    text-align: center;
`
const Text= styled(Typography)`
    fond-size: 14px;
    font-weight: 600px;
    font-family: inherite;
`
const NavBar = () => {
    return(
        <Component>
            {
                navData.map(data=>
                <Container>
                    <img src={data.url} alt='nav' style={{ width: '128px', height: '128px' }} />
                    <Text>{data.text}</Text>
                </Container>    
                )
            }
        </Component>

    )
}
export default NavBar;
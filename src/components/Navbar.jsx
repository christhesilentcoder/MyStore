
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';

const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;  
justify-content:space-between;
`
const Left = styled.div`
flex: 1;
`
const Center = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
`
const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: flex-end;
flex-wrap:nowrap
`
const Logo = styled.div`
 text-align: center; 
 width: 100%;
`
const Searchbar = styled.div`
input{
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}
  
`
const Navitems = styled.div`
margin-left: 20px;
flex-wrap:nowrap
  
`

  


const Navbar = () => {
  const {cartsItems} = useSelector(state => state.carts);
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Store</Logo>
        
        </Left>
        <Center>
        <Searchbar>
        <input type='text'></input>
        </Searchbar>
        </Center>
        <Right>
        <Navitems>Register</Navitems>
        <Navitems>Sign up</Navitems>
        <Navitems>
        <Badge badgeContent={cartsItems.length} color="primary">
        <ShoppingCartOutlined/>
        </Badge>
        </Navitems>

        </Right>



      </Wrapper>
      
    </Container>
  )
}

export default Navbar

import { styled } from 'styled-components'

const Container= styled.div`
background-color: black;
height: 25px;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 5px;
`


const Sale = () => {
  
    return (
    <Container>
        Free shipping on all orders above $50


    </Container>
  )
}

export default Sale
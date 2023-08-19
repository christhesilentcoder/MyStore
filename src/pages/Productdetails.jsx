// import styled from 'styled-components';
// import { Add, Remove } from '@mui/icons-material';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useGetProductByIdQuery } from '../services/productApi';
// import { useDispatch, useSelector } from 'react-redux';
// import React from 'react';
// import { increaseQty, decreaseQty, addToCart, clearCart } from '../features/carts/cartsSlice';

// const Container = styled.div`
//   display: flex;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   padding: 50px;
// `;

// const Image = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 90vh;
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   margin-top: 20px;
// `;

// const Title = styled.h1`
//   padding: 0 px;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
//   line-height: 1.5;
// `;

// const Price = styled.span`
//   font-weight: 100px;
//   font-size: 40px;
// `;

// const AddContainer = styled.div`
//   display: flex;
//   width: 50%;
//   align-items: center;
//   justify-content: space-between;
//   margin: 20px 0px;
//   gap: 50px;
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700px;
// `;

// const Amount = styled.input`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid black;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   margin: 0px 5px;
//   text-align: center;
// `;

// const Button = styled.button`
//   padding: 15px;
//   background-color: white;
//   cursor: pointer;
//   width: 200px;
// `;

// const ButtonWrapper = styled.div`
//   margin-left: auto;
// `;

// const Productdetails = () => {
//   const { id } = useParams();
//   const { data: product } = useGetProductByIdQuery(id);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartsItems = useSelector((state) => state.carts.cartsItems);
//   const productDetails = product || {};
//   const cartItem = cartsItems.find(item => item.id === productDetails.id);

  
//   const handleIncreaseQty = () => {
//     dispatch(increaseQty({ product: productDetails }));
//     setQty(qty + 1); // Update local state
// };
  
//   // const handleIncreaseQty = () => {
//   //   dispatch(increaseQty({ cart: cartItem }));
//   //   console.log(im);
//   // };

//   const handleDecreaseQty = () => {
//     dispatch(decreaseQty({ cart: cartItem }));
//     console.log(im);
//   };

//   const addToCartHandler = () => {
//     dispatch(addToCart({ productDetails, qty: 1 }));
//   };

//   const clearCartHandler = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <ImgContainer>
//           {productDetails.images && productDetails.images.length > 1 && (
//             <Image src={productDetails.images[1]} />
//           )}
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{productDetails.title}</Title>
//           <Desc>{productDetails.description}</Desc>
//           <Price>${productDetails.price}</Price>
//           <AddContainer>
//             <AmountContainer>
//               <Remove onClick={handleDecreaseQty} />
//               <Amount
//                 type="number"
//                 min="1"
//                 value={cartItem?.qty || 1}
        
//               />
//               <Add onClick={handleIncreaseQty} />
//             </AmountContainer>
//             <ButtonWrapper>
//               <Button onClick={addToCartHandler}>ADD TO CART</Button>
//               <Button onClick={clearCartHandler}>CLEAR CART</Button>
//             </ButtonWrapper>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Productdetails;


// this is the better code
// import styled from 'styled-components'
// import { Add, Remove } from '@mui/icons-material'
// import { useParams,useNavigate } from 'react-router-dom'
// import {useGetProductByIdQuery} from '../services/productApi'
// import { useDispatch} from 'react-redux';
// import React, { useState } from 'react'
// import { increaseQty, decreaseQty, addToCart,clearCart } from '../features/carts/cartsSlice'

// const Container = styled.div`
// display: flex;
// `
// const Wrapper= styled.div`
// display: flex;
// padding: 50px;
// `
// const Image = styled.img`
// object-fit: cover; 
// width: 100%;
// height: 90vh;
// `
// const ImgContainer= styled.div`
// flex: 1;
// `
// const InfoContainer = styled.div`
// flex: 1;
// padding: 0px 50px;
// margin-top: 20px;
// `
// const Title = styled.h1`
// padding:0 px;
// `
// const Desc= styled.p`
// margin: 20px 0px;
// line-height: 1.5;

// `
// const Price = styled.span`
// font-weight: 100px;
// font-size: 40px;
// `
// const AddContainer= styled.div`
// display: flex;
// width: 50%;
// align-items: center;
// justify-content: space-between;
// margin: 20px 0px;
// gap: 50px;

// `
// const AmountContainer= styled.div`
// display: flex;
// align-items: center;
// font-weight: 700px;
// `
// const Amount = styled.input`
// width: 30px;
// height: 30px;
// border-radius: 10px;
// border: 1px solid black;
// align-items: center;
// justify-content: center;
// display: flex;
// margin: 0px 5px;
// text-align: center;
// `
// const Button = styled.button`
// padding: 15px;
// background-color: white;
// cursor: pointer;
// width: 200px;
// `
// const ButtonWrapper = styled.div`
//   margin-left: auto;
// `;

// const Productdetails = () => {

//     const {id} = useParams();
//     const { data: product, } = useGetProductByIdQuery (id);

//     // const { cartsItems} = useSelector((state) => state?.carts);

//     // const products = product?.products || [];
//     const productDetails = product || {};
//     console.log('product', productDetails);

//     // if (cartsItems?.length > 0) {
//     //     console.log(cartsItems)
//     // }

//     const [qty, setQty] = useState(1);

//     const dispatch = useDispatch();

//     const navigate = useNavigate();

//     const clearCartHandler = () => {
//       dispatch(clearCart());
//   }

//     const addToCartHandler = (productDetails) => {
//         console.log(productDetails);
//         dispatch(addToCart({ productDetails, qty: Number(qty) }));
//         // navigate('/Cart');
//     }

    
//     const handleIncreaseQty = () => {
//         dispatch(increaseQty({ productDetails, qty: Number(qty + 1) }));
//         setQty(qty + 1); // Update local state
//         console.log('handleIncreaseQty called');
//         console.log('qty before increase:', qty);

//       };
      
//       const handleDecreaseQty = () => {
//         if (qty > 1) {
//           dispatch(decreaseQty({ productDetails, qty: (qty - 1) }));
//           setQty(qty - 1); // Update local state
//           console.log('handleDecreaseQty called');
//   console.log('qty before decrease:', qty);
//         }
//       };
    
    
//       // const handleIncreaseQty = (productDetails) => {
//     //     dispatch(increaseQty({ cart: { product: productDetails }, qty: qty + 1 }));
//     //     console.log("handleIncreaseQty called");
//     //   };
      
//     //   const handleDecreaseQty = (productDetails) => {
//     //     if (qty > 1) {
//     //       dispatch(decreaseQty({ cart: { product: productDetails }, qty: qty - 1 }));
//     //       console.log("handleDecreaseQty called");
//     //     }
//     //   };

//     // const handleIncreaseQty = (productDetails) => {
//     //     dispatch(increaseQty({ cart: { product: productDetails }, qty: 1 }));
//     //   };
      
//     //   const handleDecreaseQty = (productDetails) => {
//     //     dispatch(decreaseQty({ cart: { product: productDetails }, qty: 1 }));
//     //   };

//   return (
//    <Container>
//         <Wrapper>
//             <ImgContainer>
//             {productDetails.images && productDetails.images.length > 1 && (
//             <Image src={productDetails.images[1]} />
// )}
//             {/* <Image src={productDetails?.images}/> */}
//             </ImgContainer>
//             <InfoContainer>
//                 <Title>{productDetails.title}</Title>
//                 <Desc>
//                     {productDetails.description}
//                     {/* Monkey D. Luffy is determined to become the Pirate King by finding Gol D. Roger's 
//                     legendary treasure. Your One Piece collection needs Pop! Snake-Man Luffy to lead the 
//                     Straw Hat Pirates to victory. Vinyl figure is approximately 5.05-inches tall. */}
//                 </Desc>    
//                 <Price>${productDetails?.price}</Price>
//                 <AddContainer>
//                     <AmountContainer>
//                         <Remove onClick={() => handleDecreaseQty(productDetails)}/>
//                         <Amount
//                         type="number"
//                         min="1"
//                         value={qty}
//                         onChange={(e) => setQty(e.target.value)}
//                         />
                        
//                         <Add  onClick={() => handleIncreaseQty(productDetails)} />
//                     </AmountContainer>
//                     <ButtonWrapper>
//                         <Button onClick={() => addToCartHandler(productDetails)}> ADD TO CART</Button>
//                         <Button onClick={clearCartHandler}> clear CART</Button>
//                     </ButtonWrapper>
//                 </AddContainer>
                
//             </InfoContainer>




//         </Wrapper>

//    </Container>
//   )
// }

// export default Productdetails




{/* <Image src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9eab8a37/images/funko/70456-2_C.png?sw=800&sh=800"/> */}

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '../services/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, addToCart, clearCart } from '../features/carts/cartsSlice';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90vh;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: 20px;
`;

const Title = styled.h1`
  padding: 0;
`;

const Desc = styled.p`
  margin: 20px 0;
  line-height: 1.5;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  gap: 50px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center;
`;

const Button = styled.button`
  padding: 15px;
  background-color: white;
  cursor: pointer;
  width: 200px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;
// this one is orignal
// const Productdetails = () => {
//   const { id } = useParams();
//   const { data: product } = useGetProductByIdQuery(id);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cartsItems = useSelector((state) => state.carts.cartsItems);
//   const productDetails = product || {};
//   const cartItem = cartsItems.find((item) => item.id === productDetails.id);
//   const initialQty = cartItem ? cartItem.qty : 1;
//   const [qty, setQty] = useState(initialQty);

const Productdetails = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartsItems = useSelector((state) => state.carts.cartsItems);
  const productDetails = product || {};
  const cartItem = cartsItems.find((item) => item.id === productDetails.id);
  const [qty, setQty] = useState(1);

  // Set the initial quantity state to 1 whenever component is mounted or product changes
  useEffect(() => {
    setQty(1);
  }, [productDetails]);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQty = () => {
    setQty((prevQty) => prevQty + 1); // Update local state
  };

  const handleDecreaseQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1); // Update local state
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ productDetails, qty: qty }));
  };
  
  // const addToCartHandler = () => {
  //   dispatch(addToCart({ productDetails, qty: Number(qty) }));
  //   navigate('/Cart');
  // };

  // const handleIncreaseQty = () => {
  //   dispatch(increaseQty({ productDetails, qty: cartItem ? cartItem.qty + 1 : qty + 1 }));
  //   setQty((prevQty) => prevQty + 1);
  // };

  // const handleDecreaseQty = () => {
  //   if (qty > 1) {
  //     dispatch(decreaseQty({ productDetails, qty: cartItem ? cartItem.qty - 1 : qty - 1 }));
  //     setQty((prevQty) => prevQty - 1);
  //   }
  // };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          {productDetails.images && productDetails.images.length > 1 && (
            <Image src={productDetails.images[1]} alt={productDetails.title} />
          )}
        </ImgContainer>
        <InfoContainer>
          <Title>{productDetails.title}</Title>
          <Desc>{productDetails.description}</Desc>
          <Price>${productDetails.price}</Price>
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={handleDecreaseQty} />
              <Amount
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <Add onClick={handleIncreaseQty} />
            </AmountContainer> */}

<AmountContainer>
      <Remove onClick={handleDecreaseQty} />
      <Amount
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))} // Update the qty directly from the input field
      />
      <Add onClick={handleIncreaseQty} />
    </AmountContainer>
            <ButtonWrapper>
              <Button onClick={addToCartHandler}>ADD TO CART</Button>
              <Button onClick={clearCartHandler}>CLEAR CART</Button>
            </ButtonWrapper>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Productdetails;

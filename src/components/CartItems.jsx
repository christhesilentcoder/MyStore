import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeCart } from '../features/carts/cartsSlice';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  background-color: ${props => props.theme.hoverBgColor};
  margin: -8px;
  &:hover {
    background-color: ${props => props.theme.hoverBgDarkColor};
  }
`;

const ImageWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 6rem;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const ProductTitle = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${props => props.theme.textColor};
`;

const RemoveLink = styled.a`
  font-weight: 600;
  font-size: 0.75rem;
  color: ${props => props.theme.removeLinkColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.removeLinkHoverColor};
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const QuantityButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const QuantityInput = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
  text-align: center;
  width: 2rem;
`;

const Price = styled.span`
  text-align: center;
  width: 20%;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${props => props.theme.textColor};
`;

const CartItem = ({ productDetails,index }) => {
  const dispatch = useDispatch();

  const deleteCartHandler = (productDetails) => {
    dispatch(removeCart(productDetails));
  };

  const increaseCartQty = (productDetails)=> {
    dispatch(increaseQty({ productDetails }));
    console.log('main cart', productDetails);
  };

  const decreaseCartQty = (productDetails) => {
    if (productDetails.qty > 1) {
      dispatch(decreaseQty({ productDetails}));
    } else {
      dispatch(removeCart(productDetails));
    }

    console.log('main cart', productDetails);
  };

  return (
    <CartContainer>
      <ImageWrapper>
        <Image src={productDetails?.images[1]} alt={productDetails?.title} />
      </ImageWrapper>
      <ProductInfo>
        <ProductTitle>{productDetails?.title}</ProductTitle>
        <RemoveLink onClick={() => deleteCartHandler(productDetails)}>Remove</RemoveLink>
      </ProductInfo>
      <QuantityWrapper>
        <QuantityButton onClick={() => decreaseCartQty(productDetails)}>
          <Remove />
        </QuantityButton>
        <QuantityInput
          className="mx-2"
          type="number"
          value={productDetails?.qty}
        />
        <QuantityButton onClick={() => increaseCartQty(productDetails)}>
          <Add />
        </QuantityButton>
      </QuantityWrapper>
      <Price>${productDetails?.price}</Price>
    </CartContainer>
  );
};

export default CartItem;




// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { decreaseQty, increaseQty, removeCart } from '../features/carts/cartsSlice';
// import styled from 'styled-components';
// import { Add, Remove } from '@mui/icons-material';

// const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 6px 8px;
//   background-color: ${props => props.theme.hoverBgColor};
//   margin: -8px;
//   &:hover {
//     background-color: ${props => props.theme.hoverBgDarkColor};
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 20%;
//   display: flex;
//   align-items: center;
// `;

// const Image = styled.img`
//   height: 6rem;
// `;

// const ProductInfo = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-left: 1rem;
// `;

// const ProductTitle = styled.span`
//   font-weight: bold;
//   font-size: 0.875rem;
//   color: ${props => props.theme.textColor};
// `;

// const RemoveLink = styled.a`
//   font-weight: 600;
//   font-size: 0.75rem;
//   color: ${props => props.theme.removeLinkColor};
//   cursor: pointer;
//   &:hover {
//     color: ${props => props.theme.removeLinkHoverColor};
//   }
// `;

// const QuantityWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 20%;
// `;

// const QuantityButton = styled.button`
//   border: none;
//   background: none;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
// `;

// const QuantityInput = styled.input`
//   border: 1px solid ${props => props.theme.borderColor};
//   text-align: center;
//   width: 2rem;
// `;

// const Price = styled.span`
//   text-align: center;
//   width: 20%;
//   font-weight: 600;
//   font-size: 0.875rem;
//   color: ${props => props.theme.textColor};
// `;

// const CartItem = ({ cart,index }) => {
//   const dispatch = useDispatch();

//   const deleteCartHandler = cart => {
//     dispatch(removeCart(cart));
//   };

//   const increaseCartQty = cart => {
//     dispatch(increaseQty({ cart }));
//     console.log('main cart', cart);
//   };

//   const decreaseCartQty = cart => {
//     if (cart.qty > 1) {
//       dispatch(decreaseQty({ cart }));
//     } else {
//       dispatch(removeCart(cart));
//     }

//     console.log('main cart', cart);
//   };

//   return (
//     <CartContainer>
//       <ImageWrapper>
//         <Image src={cart?.images[1]} alt={cart?.title} />
//       </ImageWrapper>
//       <ProductInfo>
//         <ProductTitle>{cart?.title}</ProductTitle>
//         <RemoveLink onClick={() => deleteCartHandler(cart)}>Remove</RemoveLink>
//       </ProductInfo>
//       <QuantityWrapper>
//         <QuantityButton onClick={() => decreaseCartQty(cart)}>
//           <Remove />
//         </QuantityButton>
//         <QuantityInput
//           className="mx-2"
//           type="number"
//           value={cart?.qty}
//         />
//         <QuantityButton onClick={() => increaseCartQty(cart)}>
//           <Add />
//         </QuantityButton>
//       </QuantityWrapper>
//       <Price>${cart?.price}</Price>
//     </CartContainer>
//   );
// };

// export default CartItem;


// // CartItem.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { decreaseQty, increaseQty, removeCart } from '../features/carts/cartsSlice';
// import styled from 'styled-components';
// import { Add, Remove } from '@mui/icons-material';

// const CartContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 6px 8px;
//   background-color: ${props => props.theme.hoverBgColor};
//   margin: -8px;
//   &:hover {
//     background-color: ${props => props.theme.hoverBgDarkColor};
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 20%;
//   display: flex;
//   align-items: center;
// `;

// const Image = styled.img`
//   height: 6rem;
// `;

// const ProductInfo = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-left: 1rem;
// `;

// const ProductTitle = styled.span`
//   font-weight: bold;
//   font-size: 0.875rem;
//   color: ${props => props.theme.textColor};
// `;

// const ProductCategory = styled.span`
//   font-size: 0.75rem;
//   color: ${props => props.theme.secondaryColor};
// `;

// const RemoveLink = styled.a`
//   font-weight: 600;
//   font-size: 0.75rem;
//   color: ${props => props.theme.removeLinkColor};
//   cursor: pointer;
//   &:hover {
//     color: ${props => props.theme.removeLinkHoverColor};
//   }
// `;

// const QuantityWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 20%;
// `;

// const QuantityButton = styled.button`
//   border: none;
//   background: none;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
// `;

// const QuantityInput = styled.input`
//   border: 1px solid ${props => props.theme.borderColor};
//   text-align: center;
//   width: 2rem;
// `;

// const Price = styled.span`
//   text-align: center;
//   width: 20%;
//   font-weight: 600;
//   font-size: 0.875rem;
//   color: ${props => props.theme.textColor};
// `;

// const Cart = ({ cart }) => {
//   const dispatch = useDispatch();
//   const [qty, setQty] = useState(cart?.qty);

//   const deleteCartHandler = cart => {
//     dispatch(removeCart(cart));
//   };

//   const increaseCartQty = cart => {
//     dispatch(increaseQty({ cart, qty: cart.qty }));
//     console.log('main cart', cart);
//   };

//   const decreaseCartQty = cart => {
//     dispatch(decreaseQty({ cart, qty: cart.qty }));
//     console.log('main cart', cart);
//   };

//   return (
//     <CartContainer>
//       <ImageWrapper>
//         <Image src={cart?.images[1]} alt='cart.title' />
//       </ImageWrapper>
//       <ProductInfo>
//         <ProductTitle>{cart?.title}</ProductTitle>
//         {/* <ProductCategory>{cart?.product?.category}</ProductCategory> */}
//         <RemoveLink onClick={() => deleteCartHandler(cart)}>Remove</RemoveLink>
//       </ProductInfo>
//       <QuantityWrapper>
//         <QuantityButton onClick={() => decreaseCartQty(cart)}>
//           <Remove />
//         </QuantityButton>
//         <QuantityInput
//           className="mx-2"
//           type="number"
//           value={cart?.qty}
//         />
//         <QuantityButton onClick={() => increaseCartQty(cart)}>
//           <Add />
//         </QuantityButton>
//       </QuantityWrapper>
//       <Price>${cart?.price}</Price>
//     </CartContainer>
//   );
// };

// export default Cart;

// This is the end 






// import React from 'react';
// import { Add, Remove } from '@mui/icons-material';
// import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { increaseQty, decreaseQty, removeCart } from '../features/carts/cartsSlice'; 

// const ItemContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductDetail = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Image = styled.img`
//   width: 100px;
//   object-fit: cover;
//   margin-right: 10px;
// `;

// const Details = styled.div``;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const PriceDetail = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
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

// const ProductPrice = styled.div`
//   font-size: 18px;
// `;

// // const CartItem = ({ item }) => {
// //     const dispatch = useDispatch();
  
// //     if (!item.product) {
// //       return null; // or display a loading/error message
// //     }
  
// //     return (
// //       <ItemContainer>
// //         hellooooo
// //         <ProductDetail>
// //           {/* Accessing the first image URL from the images array */}
// //           {item.product.images && item.product.images.length > 0 && (
// //             <Image src={item.product.images[0]} alt={item.product.name} />
// //           )}
// //           <Details>
// //             {item.product.name && (
// //               <ProductName>
// //                 <b>Product:</b> {item.product.name}
// //               </ProductName>
// //             )}
// //             {item.product.id && (
// //               <ProductId>
// //                 <b>ID:</b> {item.product.id}
// //               </ProductId>
// //             )}
// //           </Details>
// //         </ProductDetail>
// //         <PriceDetail>
// //           <AmountContainer>
// //             <Remove onClick={() => dispatch(decreaseQty(item))} />
// //             <Amount type="number" min="1" value={item.qty} />
// //             <Add onClick={() => dispatch(increaseQty(item))} />
// //           </AmountContainer>
// //           {item.product.price && (
// //             <ProductPrice>${item.product.price * item.qty}</ProductPrice>
// //           )}
// //         </PriceDetail>
// //       </ItemContainer>
// //     );
// //   };

// //   export default CartItem;
  


// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   return (
//     <ItemContainer>
//       <ProductDetail>
//         <Image src={item.images} alt={item.title} />
//         <Details>
//           <ProductName>
//             <b>Product:</b> {item.title}
//           </ProductName>
//           <ProductId>
//             <b>ID:</b> {item.id}
//           </ProductId>
//         </Details>
//       </ProductDetail>
//       <PriceDetail>
//         <AmountContainer>
//           <Remove onClick={() => dispatch(decreaseQty(item))} />
//           <Amount type="number" min="1" value={item.qty} />
//           <Add onClick={() => dispatch(increaseQty(item))} />
//         </AmountContainer>
//         <ProductPrice>${item.price * item.qty}</ProductPrice>
//       </PriceDetail>
//     </ItemContainer>
//   );
// };

// export default CartItem;

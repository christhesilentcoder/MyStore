import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2) ;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  height: 90%;
  z-index: 2;
  width: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={product.images[1]} alt={product.name} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;


// import styled from "styled-components";
// import React from 'react'
// import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


// const Container = styled.div`
//   position: relative;
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &:hover ${Info} {
//     display: flex;
//   }
// `;

// const Info = styled.div`
//   display: none;
//   position: absolute;
//   top: 50%;
//   right: 0;
//   transform: translateY(-50%);
//   width: 40px;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   z-index: 2;
//   margin: 10px 0;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// // const Info = styled.div`
// //  display: none;
// //   position: absolute;
// //   top: 50%;
// //   right: 0;
// //   transform: translateY(-50%);
// //   width: 40px;
// //   height: 100%;
// //   align-items: center;
// //   justify-content: center;
// // `;
 
 
 
// //  /* position: absolute;
// //   display: flex;
// //   /* flex-direction: column; */
// //   // align-items: center;
// //   // justify-content: center;
// //   // top: 0;
// //   // right: 0;
// //   // width: 40px; 
// //   // height: 100%;
// //   // opacity: 0; */




// // /* display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   align-self: flex-end; /* Add this line to align icons to the bottom of the container */
// //   // opacity: 0; */
 
 
 
 
// //   /* width: 100%;
// //   height: 100%;
// //   align-items: center;
// //   justify-content: center;
// //   display: flex;
// //   flex-direction: column;
// //   margin: 20px;
// //   opacity: 0; */
// // `
// // const Container= styled.div`
// //     // display: flex
// //     flex:1;
// //     margin:5px;
// //     min-width: 280px;   
// //     height: 350px;
// //     align-items:center;
// //     justify-content:center;
// //     &:hover ${Info} {
// //     opacity: 1;
// //     display: flex;
// //     }

// // `

// // const Icon = styled.div`
// // width:40px;
// // height: 40px;
// // z-index:2;
// // margin: 10px 0;
// // `
// // const Image = styled.img`
// //    width: 100%;  /* Set the width to 100% to fill the container */
// //   height: 100%; /* Set the height to 100% to fill the container */
// //   object-fit: cover; 
  
// //   /* width: 100%;  /* Set the width to 100% to ensure the image scales properly */
// //   height: auto; /* Automatically adjust the height to maintain the image's aspect ratio */
// //   max-height: 75%; /* Set a maximum height to prevent images from becoming too large */
// //   object-fit: contain; */

// // /* height: 75%; */
// // `

// const Product = ({product}) => {
//   return (
//     <Container>
//      <Image src={product.thumbnail} alt={product.name} />
//         <Info>
//             <Icon>
//             <ShoppingCartOutlined/>
//             </Icon>
//             <Icon>
//             <SearchOutlined/>
//             </Icon>
//             <Icon>
//             <FavoriteBorderOutlined/>
//             </Icon>
//         </Info>
//         {product.price}
//     </Container>
//   )
// }

// export default Product
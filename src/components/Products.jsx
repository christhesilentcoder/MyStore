import styled from "styled-components";
import React from 'react'
import Product from './Product'
import { useGetAllProductsQuery } from '../services/productApi';
// import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  // const { data: products } = useGetAllProductsQuery();
  // console.log('Products Data:', products);

  const { data, isLoading, error } = useGetAllProductsQuery();

  console.log('data', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure that products is an array before proceeding
  const products = data?.products || [];

  return (
    <Container>
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}

export default Products;




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import{store} from './store'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
// )


// import * as React from 'react';
// import { useGetAllProductsQuery } from './services/products';

// export default function App() {
//   const { data, isLoading, error } = useGetAllProductsQuery();

//   console.log('data', data);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Ensure that products is an array before proceeding
//   const products = data?.products || [];

//   return (
//     <div className="App">
//       {products?.map((product) => (
//         <div key={product.id}>
//           <p>Name: {product.title}</p>
//           <p>Price: {product.price}</p>
//           <img src={product.thumbnail} alt={product.name} />
//           {/* Render other product information here */}
//         </div>
//       ))}
//     </div>
//   );
// }































// // import styled from "styled-components";
// // import React from 'react'
// // // import Product from './Product'
// // import  {useGetAllProductsQuery} from '../features/Api/productApi'

// // const Container = styled.div`
// // padding:20px;
// // display:flex;
// // flex-wrap: wrap;
// // justify-content: space-between;
// // `



// // const Products = () => {

// //   const {data:products} = useGetAllProductsQuery()
// //   console.log('Products Data:', products);
// //   return (

    
// //     <Container>

// //       Hello
// // {/* {products?.map((product) => (
// //     <Product product={product} key = {product.id} /> */}

// // {/* ))} */}
// //     </Container>
// //   )
// // }

// // export default Products
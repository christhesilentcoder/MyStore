import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartsTotalAmount: 0,
    cartTotalQuantity: 0
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const existingItemIndex = state.cartsItems.findIndex(item => item.id === action.payload.productDetails.id);
          
            if (existingItemIndex !== -1) {
              state.cartsItems[existingItemIndex].qty += action.payload.qty;
            } else {
              state.cartsItems.push({ ...action.payload.productDetails, qty: action.payload.qty });
            }
          
            state.cartsTotalAmount = state.cartsItems.reduce((total, item) => total + item.price * item.qty, 0);
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
          },
          
        
        // addToCart: (state, action) => {
        //     const existingItemIndex = state.cartsItems.findIndex(item => item.id === action.payload.productDetails.id);
        
        //     if (existingItemIndex !== -1) {
        //         state.cartsItems[existingItemIndex].qty += action.payload.qty;
        //     } else {
        //         state.cartsItems.push({ ...action.payload.productDetails, qty: action.payload.qty });
        //     }
        
        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },
        
        
        
        //   this orignal
        // removeCart: (state, action) => {
        //     console.log('delete action', action.payload)
        //     const updatedCartItems = state.cartsItems.filter((item) => item?.product?.id !== action.payload?.product?.id)

        //     state.cartsItems = updatedCartItems;

        //     // update localstorage ofcart after removing
        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },

        removeCart: (state, action) => {
            const productIdToRemove = action.payload?.id;
          
            if (productIdToRemove) {
              const updatedCartItems = state.cartsItems.filter(
                (item) => item?.id !== productIdToRemove
              );
          
              state.cartsItems = updatedCartItems;
          
              // Update the total amount based on the updated cart items
              state.cartsTotalAmount = updatedCartItems.reduce(
                (total, item) => total + item.price * item.qty,
                0
              );
          
              // Update localstorage of cart after removing
              localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }
          },
          

        clearCart: (state, action) => {
            state.cartsItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        },

        calculateSubtotal: (state, action) => {
            const subTotal = state.cartsItems.reduce((acc, item) => acc + (Number(item.price) * Number(item.qty)), 0);
            state.cartsTotalAmount = subTotal;  // Directly assign the subtotal as a number
          
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
          },
          


          increaseQty: (state, action) => {
            const index = state.cartsItems.findIndex(item => item.id === action.payload.productDetails.id);
            if (index !== -1) {
              state.cartsItems[index].qty += 1;
              state.cartsTotalAmount = state.cartsItems.reduce((total, item) => total + item.price * item.qty, 0);
              localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }
          },
          decreaseQty: (state, action) => {
            const index = state.cartsItems.findIndex(item => item.id === action.payload.productDetails.id);
            if (index !== -1) {
              const cartItem = state.cartsItems[index];
              if (cartItem.qty > 1) {
                cartItem.qty -= 1;
              } else {
                state.cartsItems.splice(index, 1);
              }
              state.cartsTotalAmount = state.cartsItems.reduce((total, item) => total + item.price * item.qty, 0);
              localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }
          },
          

       
        // increaseQty: (state, action) => {
        //     const productId = action.payload.product.id;
        //     const itemIndex = state.cartsItems.findIndex(item => item?.product?.id === productId);
        
        //     if (itemIndex >= 0) {
        //         state.cartsItems[itemIndex].qty += 1;
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }
        // },
        
    //    look at again
        // increaseQty: (state, action) => {
        //     const index = state.cartsItems.findIndex(item => item.id === action.payload.cart.id);
        //     if (index !== -1) {
        //       state.cartsItems[index].qty += 1;
        //       state.cartsTotalAmount = state.cartsItems.reduce((total, item) => total + item.price * item.qty, 0);
        //       localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }
        //   },
        //   decreaseQty: (state, action) => {
        //     const index = state.cartsItems.findIndex(item => item.id === action.payload.cart.id);
        //     if (index !== -1) {
        //       const cartItem = state.cartsItems[index];
        //       if (cartItem.qty > 1) {
        //         cartItem.qty -= 1;
        //       } else {
        //         state.cartsItems.splice(index, 1);
        //       }
        //       state.cartsTotalAmount = state.cartsItems.reduce((total, item) => total + item.price * item.qty, 0);
        //       localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }
        //   },
          
          
        
        
        

    },
})

// Action creators are generated for each case reducer function
// export const { } = cartsSlice.actions

export const { addToCart, increaseQty, decreaseQty, removeCart, clearCart, calculateSubtotal } = cartsSlice.actions

export default cartsSlice.reducer





// addToCart: (state, action) => {
        //     const { productDetails, qty } = action.payload;
        
        //     const existingItemIndex = state.cartsItems.findIndex(item => item.id === productDetails.id);
        
        //     if (existingItemIndex !== -1) {
        //         state.cartsItems[existingItemIndex].qty += qty;
        //     } else {
        //         state.cartsItems.push({ ...productDetails, qty });
        //     }
        
        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },


        

        
        // here is orginal
        // addToCart: (state, action) => {
        //     let eachCartproductIndex = state.cartsItems.findIndex(
        //       (item) => item?.id === action.payload?.id
        //     );
          
        //     if (eachCartproductIndex >= 0) {
        //       state.cartsItems[eachCartproductIndex].qty += 1;
        //     } else {
        //       let assembledItem;
        //       if (action.payload.qty > 1) {
        //         assembledItem = { ...action.payload, qty: action.payload.qty };
        //       } else if (action.payload.qty === 1) {
        //         assembledItem = { ...action.payload, qty: 1 };
        //       }
          
        //       if (assembledItem) {
        //         state.cartsItems.push(assembledItem);
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //       }
        //     }
        //   },
        
        
        
        
        
        
        
// This work kind of
        // addToCart: (state, action) => {
        //     let assembledItem;
        //     if (action.payload.qty > 1) {
        //       assembledItem = { ...action.payload, qty: action.payload.qty };
        //     } else if (action.payload.qty === 1) {
        //       assembledItem = { ...action.payload, qty: 1 };
        //     }
          
        //     if (assembledItem) {
        //       state.cartsItems.push(assembledItem);
        //       localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }
        //   },


// this is a new line
        // addToCart: (state, action) => {

            
        //     const { productDetails, qty } = action.payload;
        
        //     let eachCartproductIndex = state.cartsItems.findIndex((item) => item.product.id === productDetails.id);
        
        //     if (eachCartproductIndex >= 0) {
        //         state.cartsItems[eachCartproductIndex].qty += qty;
        //     } else {
        //         state.cartsItems.push({ product: productDetails, qty });
        //     }
        
        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },
        
          
      
          
          
            // addToCart: (state, action) => {

        //     // if exists increase qty

        //     // let existsIndex = state.cartsItems.findIndex((item) => item._id === action.payload?._id);
        //     let eachCartproductIndex = state.cartsItems.findIndex((item) => item?.product?.id === action.payload?.product?.id);

        //     if (eachCartproductIndex >= 0) {
        //         state.cartsItems[eachCartproductIndex].qty += 1
        //     } else {
        //         // add to cart 
        //         // const assembledItem = { ...action.payload, qty: 1 }
        //         // state.cartsItems.push(assembledItem);

        //         // // localstorage add

        //         // localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        //         // add to cart 
        //         let assembledItem;
        //         if (action.payload.qty > 1) {
        //             assembledItem = { ...action.payload, qty: action.payload.qty }
        //             console.log('action payload in detail', action.payload.qty)
        //             state.cartsItems.push(assembledItem);
        //         }

        //         else if (action.payload.qty === 1) {
        //             assembledItem = { ...action.payload, qty: 1 }
        //             console.log('action payload', action.payload)
        //             state.cartsItems.push(assembledItem);
        //         }
        //         // localstorage add

        //         localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }

        // },




        // decreaseQty: (state, action) => {
        //     let eachCartproductIndex = state.cartsItems.findIndex((item) => item?.product?.id === action.payload.cart?.product?.id);
        //     // const eachCartIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);

        //     if (eachCartproductIndex >= 0) {
        //         state.cartsItems[eachCartproductIndex].qty -= 1;
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        //     }

        //     // if qty == 0 then cart remove for this item;

        //     if (state.cartsItems[eachCartproductIndex].qty === 0) {
        //         const filteredItems = state.cartsItems.filter((item) => item.product?.id !== state.cartsItems[eachCartproductIndex].product?.id);
        //         state.cartsItems = filteredItems;
        //     }


        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        // }




          // calculateSubtotal: (state, action) => {
        //     console.log("Calculating subtotal...");
        //     const subTotal = state.cartsItems.reduce((acc, item) => {
        //         const productPrice = Number(item.product?.price); // Convert to number
        //         const quantity = Number(item.qty); // Convert to number
        //         return acc + (productPrice * quantity);
        //       }, 0);
        //     // const subTotal = state.cartsItems.reduce((acc, item) => acc + (item.product?.price * Number(item.qty)), 0);
        //     // state.cartsTotalAmount = Number(subTotal);
        
        //     console.log("New cartsTotalAmount:", state.cartsTotalAmount);
        
        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },
// original
        // calculateSubtotal: (state, action) => {

        //     const subTotal = state.cartsItems.reduce((acc, item) => acc + (item.product?.price * Number(item.qty)), 0);
        //     state.cartsTotalAmount = Number(subTotal);

        //     localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        // },


        // remember this decrement
        // const index = state.cartsItems.findIndex(item => item.id === action.payload.cart.id);
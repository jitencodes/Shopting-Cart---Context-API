import React,{ useState, createContext} from 'react';
// create context
export const CartContext  = createContext();
const CartProvider = ({children}) => {
  const[cart, setCart] = useState([]);
  const[total, setTotal] = useState(0);

  // CLEAR CART 
  const clearCart = ()=>{
    setCart([]);
    setTotal(0);
  }
  // ADD TO CART
  const addToCart = (product, quantity =1)=>{
    const cartItem = {...product, quantity};
    const isPresent = cart.find((item)=>{
      return item.id === product.id;
    });
    if(isPresent){
      const updateCart = cart.map((item)=>{
        if(item.id===product.id){
          return {...item, quantity: item.quantity+quantity};

        }else{
          return item;
        }
      });
      setCart([...updateCart]);
      setTotal(total+quantity);
    }else{
      setCart([...cart,cartItem]);
      setTotal(total+quantity);
    }
    console.log(cart);
  };
  // REMOVE OR REDUCE QUANTITY
  const removeFromCart =(product)=>{
    if(product.quantity===1){
      const updateCart = cart.filter(function(item){ 
        return item.id != product.id; 
      });
      setCart([...updateCart]);
      setTotal(total-1);
    }else{
      const updateCart = cart.map((item)=>{
        if(item.id===product.id){
          return {...item, quantity: item.quantity-1};
        }else{
          return item;
        }
      });
      setCart([...updateCart]);
      setTotal(total-1);
    }
    
  }
  // DELETE ITEM FROM CART
  const deleteFromcart =(product)=>{
    const updateCart = cart.filter(function(item){ 
      return item.id != product.id; 
    });
    setCart([...updateCart]);
    setTotal(total-product.quantity);
  }
  return <CartContext.Provider value={{cart, total, addToCart, removeFromCart, deleteFromcart, clearCart}} >
    {children}
  </CartContext.Provider>
};

export default CartProvider;

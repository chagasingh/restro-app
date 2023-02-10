import React,{useState} from "react";
import CartContext from "./cart-context"

const CartProvider=(props)=>{
    const [items,updateItems]=useState([])

    

    const addItemHandler=(item)=>{
        // updateItems([...items,item]);

        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);

        if (idx === -1) {
            updateItems([...items, item]);
        } else {
            itemsCopy[idx].quantity=Number(itemsCopy[idx].quantity)+Number(item.quantity);
            itemsCopy[idx].totalPrice=Number(itemsCopy[idx].totalPrice)*Number(itemsCopy[idx].quantity)
            updateItems(itemsCopy)
        }
        console.log(item)
    }

    const removeItemHandler = (id) => {};

    const incrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
        itemsCopy[idx].quantity++;
        updateItems(itemsCopy);
      };
    
      const decrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
    
        if (idx !== -1 && itemsCopy[idx].quantity < 2 ) {
          itemsCopy.splice(idx, 1);
          updateItems(itemsCopy);
        } else {
          itemsCopy[idx].quantity--;
          updateItems(itemsCopy);
        }
      };

      
    let totalPrice=0;
    items.forEach((item)=>{
        totalPrice=totalPrice+Number(item.price*item.quantity)
    })
    console.log(totalPrice)

    const CartContexts={
        items:items,
        totalAmount:totalPrice,
        addItem: addItemHandler,
        removeItem:removeItemHandler,
        quantityplus: incrementHandler,
        quantityminus: decrementHandler
    }

    return <CartContext.Provider value={CartContexts}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        // =========== add item ============
        addItem(state, action) {
            const newItem = action.payload;
           // console.log(newItem)
            //   newItem =    {id: 3, title: 'Mens Cotton Jacket', price: 55.99, description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.', category: "men's clothing", …}
            // category: "men's clothing"
            // description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
            // id: 3
            // image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            // price: 55.99
            // rating:
            // count: 500
            // rate: 4.7
            // [[Prototype]]: Object
            // title: "Mens Cotton Jacket"
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;

            if (!existingItem) {
                // ===== note: if you use just redux you should not mute state array instead of clone the state array, but if you use redux toolkit that will not a problem because redux toolkit clone the array behind the scene

                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),

                0
            );
        },

        // ========= remove item ========

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },

        //============ delete item ===========

        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

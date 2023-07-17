//cart services 


export const saveCartToLocalStorage = ( cartItems ) => {
    try {
        const serializedCart = JSON.stringify(cartItems);
        localStorage.setItem('cart',serializedCart);    
    } catch (error) {
        console.error('Failed to save cart to localStorage', error);
    }
};

export const getCartFromLocalStorage = () => {
    try { 
        const serializedCart = localStorage.getItem('cart');
        return JSON.parse(serializedCart) || [];
    } catch (error) { 
        console.error('Failed to get cart from localStorage',error);
        return [];
    }
};

export const clearCartFromLocalStorage = () => { 
    try { 
        localStorage.removeItem('cart');
    } catch (error) { 
        console.error('Failed to clear cart',error);
    }
};
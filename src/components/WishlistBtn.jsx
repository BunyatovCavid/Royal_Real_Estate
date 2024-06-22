import Button from 'react-bootstrap/Button';
import React from 'react';
import { useWishlist } from 'react-use-wishlist';

const WishlistBtn = ({ item }) => {
    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

    const toggleWishListBtn = (product) => {
        if (inWishlist(product.id)) {
            removeWishlistItem(product.id);
        } else {
            addWishlistItem(product);
        }
    };

    return (
        <Button className='mx-1' variant="outline-warning" onClick={() => toggleWishListBtn(item)}>
            {inWishlist(item.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </Button>
    );
    
};

export default WishlistBtn;

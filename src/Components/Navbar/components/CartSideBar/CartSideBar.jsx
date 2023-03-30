import React, { useContext } from "react";
import styles from "./CartSideBar.module.css";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/cross.svg";
import ProductCard from "../ProductCard/ProductCard";
import ProductContext from "../../../../store/ProductContext";
import { useNavigate } from "react-router-dom";

const CartSideBar = ({ showCart, handleShowCart }) => {
  const productContext = useContext(ProductContext);
  const productCart = productContext.state.cart;
  const navigate = useNavigate();

  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < productCart.length; i++) {
      totalPrice += productCart[i].quantity * productCart[i].price;
    }
    return totalPrice;
  };

  const handleToCart = () => {
    navigate("/cart");
    handleShowCart(false);
  };
  return (
    <>
      <div
        className={
          showCart ? `${styles.overlay} ${styles.active}` : styles.overlay
        }
        onClick={() => {
          handleShowCart(false);
        }}
      ></div>
      <div
        className={showCart ? `${styles.cart} ${styles.active}` : styles.cart}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <h4>Shoping Cart</h4>
          </div>
          <div
            className={styles.close}
            onClick={() => {
              handleShowCart(false);
            }}
          >
            <CloseIcon width={18} />
          </div>
        </div>
        <div className={styles.container}>
          {productCart.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
        <div className={styles.footer}>
          <div className={styles.total}>
            <h3>Subtotal</h3>
            <h3>${totalPrice()}</h3>
          </div>
          <button className="primary_btn" onClick={handleToCart}>
            View cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSideBar;

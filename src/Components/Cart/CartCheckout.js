import React from "react";
import { useRef, useState } from "react";
import { CartContainer, CheckoutForm } from "./CartElements";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isTenChars = (value) => {
  return value.trim().length === 10;
};
function CartCheckout(props) {
  const [formValidation, setFormValidation] = useState({
    name: true,
    tel: true,
    address: true,
  });

  const nameInputRef = useRef();
  const telInputRef = useRef();
  const addressInputRef = useRef();

  const confirmSubmitHandler = (e) => {
    e.preventDefault();

    const nameIsValid = !isEmpty(nameInputRef.current.value);
    const telIsValid = isTenChars(telInputRef.current.value);
    const addressIsValid = !isEmpty(addressInputRef.current.value);

    setFormValidation({
      name: nameIsValid,
      tel: telIsValid,
      address: addressIsValid,
    });

    const formIsValid = nameIsValid && telIsValid && addressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirmOrder({
      name: nameInputRef.current.value,
      tel: telInputRef.current.value,
      address: addressInputRef.current.value,
    });

    props.onCloseCart();
  };

  return (
    <CartContainer checkout>
      <CheckoutForm onSubmit={confirmSubmitHandler}>
        <div className={`control ${formValidation.name ? "" : "invalid"}`}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formValidation.name && <p>Please enter a valid name</p>}
        </div>
        <div className={`control ${formValidation.tel ? "" : "invalid"}`}>
          <label htmlFor="tel">Phone Number</label>
          <input type="text" id="tel" ref={telInputRef} />
          {!formValidation.tel && <p>Please enter a valid number</p>}
        </div>
        <div className={`control ${formValidation.address ? "" : "invalid"}`}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} />
          {!formValidation.address && <p>Please enter a valid address</p>}
        </div>

        <div className="actions">
          <button type="button" onClick={props.onCancel}>
            cancel
          </button>
          <button className="submit">submit</button>
        </div>
      </CheckoutForm>
    </CartContainer>
  );
}

export default CartCheckout;

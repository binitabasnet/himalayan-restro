import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./total.scss";

function Total() {
  const cart = useSelector((state) => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <Card className="p-3">
      <div className="total">
        <h3>ORDER SUMMARY</h3>
        <div>
          <p className="total__p">
            Total ({getTotal().totalQuantity} items) :{" "}
            <strong>${getTotal().totalPrice}</strong>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Total;

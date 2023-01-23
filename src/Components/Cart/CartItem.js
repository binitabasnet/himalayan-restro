import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./shopcart.scss";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll,
} from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CartItem({ id, image, name, price, description, quantity = 0 }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    toast.success("item removed");
    dispatch(removeItem(product));
  };

  return (
    <>
      <Card className="p-2 mb-3 ">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={3}>
            <img src={image} alt="cart-img" />
          </Col>
          <Col md={3} className="p-1 text-center">
            <h4 className="mb-0 mt-4">{name}</h4>
            <p className="text-muted">{description}</p>
          </Col>
          <Col md={2} className="qty-calc p-1 text-center">
            <Button
              variant="outline-dark"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              variant="outline-dark"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </Button>
            {/* <Row className="increment">
            <Col md={3}>
              <strong>
                <GrFormSubtract
                  onClick={() => dispatch(decrementQuantity(id))}
                />
              </strong>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <strong>{quantity}</strong>
            </Col>
            <Col md={3}>
              <strong>
                <IoMdAdd onClick={() => dispatch(incrementQuantity(id))} />
              </strong>
            </Col>
          </Row> */}
          </Col>
          <Col md={2} className="p-1 text-center">
            <span>${price}</span>
          </Col>
          <Col md={2} className="p-1 text-center">
            <Button
              variant="outline-dark"
              className="cartItem__removeButton"
              onClick={() => dispatch(handleRemoveFromCart(id))}
            >
              Remove
            </Button>
            {/* <strong onClick={() => dispatch(removeItem(id))}>X</strong> */}
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CartItem;

import "./App.css";
import CheckOutStepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Provide your shipping Address.</div>,
  },
  {
    name: "Payment",
    component: () => <div>Provide your payment details.</div>,
  },
  {
    name: "Review",
    component: () => <div>Review your order.</div>,
  },
  {
    name: "Complete",
    component: () => <div>Order complete.</div>,
  },
];

function App() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckOutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;

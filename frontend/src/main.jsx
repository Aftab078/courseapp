 import { createRoot } from "react-dom/client";
 import "./index.css";
 import App from  "./App.jsx";
 import { BrowserRouter } from "react-router-dom";
 import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
 const stripePromise = loadStripe("pk_test_51RC4czSC2ihgTN4lTFlOQy9TiLhkryl8IWLBBdwaEj98wGfiefpIg4jo96oknjKqbDFAB7g5ADmsNIGtBP0u3h3k00hT9t4Jc0");

 createRoot(document.getElementById("root")).render(


<Elements stripe={stripePromise}>
<BrowserRouter>
    <App /> 
  </BrowserRouter>
</Elements>
 );
 
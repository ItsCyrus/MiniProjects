const express = require("express");
const app = express();

const stripe = require("stripe")(
  "sk_test_51MtoXmSIgwV9JjGwLEGjUwXZShVUqzPbwFU6Jub22wwvUXy6ZYtITkOFGUI95bnlDnVxuf7ISfF0rmhTvogwWlb300PmQahg7c"
);

app.get("/api", (req, res) => {
  const apiKey = req.query.apiKey;
  // Validation pending
  //Billing pending
  res.send({ data: "API Key received" });
});

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_type: ["card"],
    line_items: [
      {
        price: "price_YOUR-PRICE",
      },
    ],
    success_url:
      "http://localhost:5000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:5000/error",
  });

  res.send(session);
});

app.listen(8080);

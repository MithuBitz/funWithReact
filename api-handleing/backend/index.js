import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 1000,
      image:
        "https://images.pexels.com/photos/2829032/pexels-photo-2829032.jpeg",
    },
    {
      id: 2,
      name: "table wooden",
      price: 1000,
      image:
        "https://images.pexels.com/photos/7402617/pexels-photo-7402617.jpeg",
    },
    {
      id: 3,
      name: "table plastic",
      price: 500,
      image:
        "https://images.pexels.com/photos/2829032/pexels-photo-2829032.jpeg",
    },
    {
      id: 4,
      name: "table matel",
      price: 1000,
      image: "https://images.pexels.com/photos/785080/pexels-photo-785080.jpeg",
    },
    {
      id: 5,
      name: "table wooden",
      price: 1000,
      image:
        "https://images.pexels.com/photos/159806/meeting-modern-room-conference-159806.jpeg",
    },
  ];

  if (req.query.search) {
    const filterProduct = products.filter((product) => product.name.includes(req.query.search));
    res.send(filterProduct);
    return; //return is important to prevent the error 
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

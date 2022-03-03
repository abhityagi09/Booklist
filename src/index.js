import React from "react";
import ReactDom from "react-dom";
import "./style.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX330_BO1,204,203,200_.jpg",
    title: "Full-Stack React Projects",
    author: "Shama Hoque ",
    price: "33.49",
    reviews: "0",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX330_BO1,204,203,200_.jpg",
    title: "The Road to React",
    author: "Robin Wieruch",
    price: "29.80",
    reviews: "0",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX330_BO1,204,203,200_.jpg",
    title: " JavaScript: The Definitive Guide",
    author: "David Flanagan",
    price: "32.49",
    reviews: "0",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX330_BO1,204,203,200_.jpg",
    title: "Eloquent JavaScript, 3rd Edition",
    author: "Marijn Haverbeke",
    price: "20.99",
    reviews: "0",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX330_BO1,204,203,200_.jpg",
    title: "JavaScript and JQuery",
    author: " Jon Duckett",
    price: "19.29",
    reviews: "0",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX330_BO1,204,203,200_.jpg",
    title: "HTML and CSS",
    author: "Jon Duckett",
    price: "15.79",
    reviews: "0",
  },
  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/51HWwaUDR5L._SX330_BO1,204,203,200_.jpg",
    title: "HTML and CSS QuickStart Guide",
    author: "David DuRocherr",
    price: "21.99",
    reviews: "0",
  },
  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/41kQfmlc5gL._SX330_BO1,204,203,200_.jpg",
    title: "SQL QuickStart Guide",
    author: "Walter Shields",
    price: "21.18",
    reviews: "0",
  },
  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/41Ucx+KlqAL._SX330_BO1,204,203,200_.jpg",
    title: "SQL All-in-One For Dummies 3rd Edition",
    author: "Allen G. Taylor",
    price: "19.99",
    reviews: "0",
  },
  {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/51i8JgxDGML._SX330_BO1,204,203,200_.jpg",
    title: "MongoDB: The Definitive Guide",
    author: "Shannon Bradshaw ",
    price: "26.10",
    reviews: "0",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (book) => {
  console.log(book);
  const title = book.title;
  const author = book.author;
  const img = book.img;
  const price = book.price;
  const reviews = book.reviews;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>by {author}</h4>
      <h4 className="price">{price}</h4>
      <h4>{reviews} reviews</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
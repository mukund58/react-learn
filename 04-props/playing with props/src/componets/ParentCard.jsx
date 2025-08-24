import Card from "./Card";

function ParentCard() {
  const products = [
    {
      name: "Apple Watch",
      price: "$899",
      stock: "In Stock",
      img: "https://files.refurbed.com/ii/apple-watch-series-7-titan-45mm-1705929512.jpg"
    },
    {
      name: "Samsung Galaxy Watch",
      price: "$699",
      stock: "Only 3 Left",
      img: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UL600_FMwebp_QL65_.jpg"
    },
    {
      name: "Noise Smartwatch",
      price: "$199",
      stock: "Out of Stock",
      img: "https://sell.gameloot.in/wp-content/uploads/sites/4/2022/05/Samsung-Galaxy-Watch-4-Classic-LTE-42mm.jpg"
    }
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {products.map((product, index) => (
        <Card key={index} productData={product} />
      ))}
    </div>
  );
}

export default ParentCard;


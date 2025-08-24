
function Card(props) {
  const obj = props.productData;
const { name= "default Watch ", price= "$899", stock= "Out of Stock", img="https://files.refurbed.com/ii/apple-watch-series-7-titan-45mm-1705929512.jpg" } = obj;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        <img className="w-full h-64 object-cover" src={img} alt={name} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">Price: {price}</p>
            <p className={`text-base ${stock === "In Stock" ? "text-green-500" : stock === "Only 3 Left" ? "text-yellow-500" : "text-red-500"}`}>
            {stock}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
            </button>
        </div>
        </div>
    );
}

export default Card


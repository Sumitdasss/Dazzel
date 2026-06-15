const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden h-full">

      <div className="relative">

        <span className="absolute left-0 top-0 bg-[#C68A45] text-white text-xs px-2 py-1 rounded-br-lg">
          {product.discountPercentage}%
        </span>

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-56 object-contain p-4"
        />
      </div>

      <div className="p-4">

        <h3 className="text-center font-medium h-12">
          {product.name}
        </h3>

        <div className="mt-3">
          <span className="font-bold text-lg">
            ৳ {product.price.toLocaleString()}
          </span>

          <span className="ml-2 text-gray-500 line-through text-sm">
            ৳ {product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#081018] text-white py-2 rounded-md">
            VIEW
          </button>

          <button className="flex-1 border py-2 rounded-md">
            ADD TO CART
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
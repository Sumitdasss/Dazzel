import {categories11} from "../../../Data/Data"

const Catagori = () => {
  return (
   <div className="w-full max-w-[1400px] mx-auto mt-6 bg-white font-sans">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Shop by Categories</h2>
        <button className="border border-orange-200 text-gray-700 text-xs font-bold px-5 py-2.5 rounded hover:bg-orange-50 transition-colors tracking-wider uppercase">
          See All
        </button>
      </div>

      {/* Categories Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {categories11.map((cat) => (
          <div 
            key={cat.id} 
            className="bg-[#EDEDED] rounded-md p-4 flex flex-col items-center justify-between h-[180px] cursor-pointer hover:shadow-md transition-all group"
          >
            {/* Product Image Wrapper */}
            <div className="w-full h-24 flex items-center justify-center overflow-hidden">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Category Name */}
            <span className="text-center text-[13px] font-medium text-gray-800 tracking-wide mt-2 block lines-clamp-2 px-1">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Catagori
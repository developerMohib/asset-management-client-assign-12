import { useState } from "react";

const categories = [
    { name: "Polo Shirt", icon: "👕" },
    { name: "Girls Tshirt", icon: "👚" },
    { name: "Socks", icon: "🧦" },
    { name: "Bags", icon: "👜" },
    { name: "Accessory", icon: "🎒" },
    { name: "Shoes", icon: "👟" },
    { name: "Hat", icon: "🎩" },
    { name: "Tops", icon: "👗" },
];

const offers = [
    {
        category: "Polo Shirt",
        title: "Women's Clothing",
        oldPrice: 130,
        newPrice: 117,
        discount: 20,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg"
    },
    {
        category: "Polo Shirt",
        title: "Men's Accessory",
        oldPrice: 130,
        newPrice: 117,
        discount: 15,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg"
    },
    {
        category: "Polo Shirt",
        title: "T-shirt",
        oldPrice: 180,
        newPrice: 117,
        discount: 30,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg"
    },
    {
        category: "Polo Shirt",
        title: "Adidas S47 White",
        oldPrice: 130,
        newPrice: 117,
        discount: 35,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg"
    }
];

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState("Polo Shirt");

    return (
        <div className="bg-gray-100 py-10 px-4">
            <h2 className="text-3xl font-semibold mb-6">Category</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex flex-col items-center px-4 py-2 rounded-lg transition ${activeCategory === cat.name
                                ? "bg-gray-800 text-white"
                                : "bg-white text-gray-700"
                            }`}
                    >
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="text-sm mt-1">{cat.name}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {offers
                    .filter((offer) => offer.category === activeCategory)
                    .map((offer, idx) => (
                        <div key={idx} className="relative rounded-xl overflow-hidden shadow hover:scale-105 transition">
                            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                {offer.discount}% OFF
                            </div>
                            <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-3 text-white">
                                <h3 className="text-lg font-bold">{offer.title}</h3>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span className="line-through text-gray-300">${offer.oldPrice.toFixed(2)}</span>
                                    <span className="text-green-400 font-semibold">${offer.newPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Categories
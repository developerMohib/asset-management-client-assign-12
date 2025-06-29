import { useState } from "react";
import { Link } from "react-router-dom";
const categories = [
    { name: "Polo Shirt", icon: "👕" },
    { name: "Girls Tshirt", icon: "👚" },
    { name: "Socks", icon: "🧦" },
    { name: "Bags", icon: "👜" },
    { name: "Accessory", icon: "🎒" },
    { name: "Tops", icon: "👗" },
];

const offers = [
    {
        category: "Polo Shirt",
        title: "Women's Clothing",
        oldPrice: 130,
        newPrice: 117,
        discount: 20,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 4,
    },
    {
        category: "Girls Tshirt",
        title: "Men's Accessory",
        oldPrice: 130,
        newPrice: 117,
        discount: 15,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 4.5,
    },
    {
        category: "Tops",
        title: "Men's Accessory",
        oldPrice: 130,
        newPrice: 117,
        discount: 15,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 4,
    },
    {
        category: "Socks",
        title: "T-shirt",
        oldPrice: 180,
        newPrice: 117,
        discount: 30,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 4.5,
    },
    {
        category: "Bags",
        title: "Adidas S47 White",
        oldPrice: 130,
        newPrice: 117,
        discount: 35,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 3.5,
    },
    {
        category: "Accessory",
        title: "Bootics",
        oldPrice: 130,
        newPrice: 117,
        discount: 35,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings : 4,
    }
];

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState("Polo Shirt");

    return (
        <div className="py-10 px-4">
            <h2 className="text-3xl text-textPri font-semibold mb-6">Category</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex flex-col items-center px-4 py-2 rounded-lg transition border border-borderPri ${activeCategory === cat.name
                            ? "bg-bgPri text-textSec"
                            : "bg-textSec text-bgPri"
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
                            <img src={offer.image} alt={offer.title} className="w-full object-cover" />
                            <div className="absolute top-2 left-2 bg-bgSec text-textSec text-xs px-2 py-1 rounded-full">
                                {offer.discount}% OFF
                            </div>
                            <div className="absolute bottom-0 bg-bgPri w-full p-3 text-textSec">
                                <h3 className="text-lg font-bold">{offer.title}</h3>
                                <div className="flex items-center space-x-2 text-sm my-2">
                                    <span className="line-through text-textSec">${offer.oldPrice.toFixed(2)}</span>
                                    <span className="text-primary font-semibold">${offer.newPrice.toFixed(2)}</span>
                                </div>
                                <p> {offer.details.length > 50
                                    ? offer.details.slice(0, 50) + '...'
                                    : offer.details} </p>
                                    <p> {"⭐".repeat(offer.ratings)} </p>
                                <div className="flex items-center justify-between text-sm my-2">
                                    <button className="text-textSec border rounded-sm border-primary p-2">Add To Cart </button>
                                    <Link to="/" className="text-primary  border rounded-sm border-primary p-2">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Categories
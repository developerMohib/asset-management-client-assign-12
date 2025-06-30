import { Link } from "react-router-dom";

const similarProduct = [
    {
        category: "Accessory",
        title: "Bootics",
        oldPrice: 130,
        newPrice: 117,
        discount: 35,
        image: "https://lzd-u.slatic.net/7fc2f195052547c7b39cde0d8d55bcbc_39eaa898e723406da65b3f35abf6aae3.jpg",
        details: "Objectively deliver exceptional niches with resource sucking channels. Intrinsicly deliver high-payoff interfaces whereas worldwide communities. Dynamically e-enable mission-critical models and backward-compatible services. Intrinsicly foster state of the art technology after.",
        ratings: 4,
    }
]
const ProductDetails = () => {
    return (
        <div className="py-8 max-w-6xl mx-auto">
            <div>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-96 rounded-lg bg-bgPri mb-4">
                            <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-bgPri py-2 px-4 rounded-full font-bold text-textSec hover:bg-primary hover:-translate-y-1 transition-all">Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-primary py-2 px-4 rounded-full font-bold text-textSec hover:bg-bgPri hover:-translate-y-1 transition-all">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-textPri mb-2">Product Name</h2>
                        <p className="text-textPri text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-textPri">Price:</span>
                                <span className="text-textPri">$29.99</span>
                            </div>
                            <div>
                                <span className="font-bold text-textPri">Availability:</span>
                                <span className="text-textPri">In Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-textPri">Select Color:</span>
                            <div className="flex items-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-bgPri mr-2" />
                                <button className="w-6 h-6 rounded-full bg-bgSec dark:bg-red-700 mr-2" />
                                <button className="w-6 h-6 rounded-full bg-primary dark:bg-blue-700 mr-2" />
                                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-textPri">Select Size:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-bgPri text-textSec py-2 px-4 rounded-full font-bold mr-2 hover:bg-borderPri">S</button>
                                <button className="bg-bgPri text-textSec py-2 px-4 rounded-full font-bold mr-2 hover:bg-borderPri">M</button>
                                <button className="bg-bgPri text-textSec py-2 px-4 rounded-full font-bold mr-2 hover:bg-borderPri">L</button>
                                <button className="bg-bgPri text-textSec py-2 px-4 rounded-full font-bold mr-2 hover:bg-borderPri">XL</button>
                                <button className="bg-bgPri text-textSec py-2 px-4 rounded-full font-bold mr-2 hover:bg-borderPri">XXL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-textPri">Product Description:</span>
                            <p className="text-textTer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* similar product */}
            <div className="mt-20"> 
                 <h2 className="text-2xl font-bold text-textPri mb-2">Similar Product</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {similarProduct
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
                                    <Link to={`details/${idx}`} className="text-textSec border rounded-sm border-primary p-2">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductDetails;
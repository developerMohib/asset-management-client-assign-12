import { useEffect, useState } from "react";

const OfferSection = () => {
    const targetedTime = new Date("Jan 5, 2027 15:37:25").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetedTime - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, (1000));
        return () => clearInterval(interval);
    }, [targetedTime])

    return (
        <section className="pt-12">
            <div className="mx-auto relative md:flex justify-around items-center">
                <img src="https://iili.io/3Bvpo4R.png" alt="hero" />
                <div className="rounded-sm px-2 text-center mt-5">
                    <h2 className="text-textPri text-4xl font-bold ">Exclusive offer</h2>
                    <p className="text-textPri text-xl font-medium leading-9">Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
                    <div className="flex gap-9 my-10 items-center justify-center">
                        <div className="w-24 h-24 text-center py-4 bg-textSec rounded-sm shadow-md">
                            <span className="block text-textPri text-3xl font-semibold">
                                {String(timeLeft.days).padStart(2, '0')}
                            </span><span className=" block text-textPri text-base font-medium">Days</span>
                        </div>
                        <div className="w-24 h-24 text-center py-4 bg-textSec rounded-sm shadow-md">
                            <span className="block text-textPri text-3xl font-semibold">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className=" block text-textPri text-base font-medium">Hours</span>
                        </div>
                        <div className="w-24 h-24 text-center py-4 bg-textSec rounded-sm shadow-md">
                            <span className="block text-textPri text-3xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</span><span className=" block text-textPri text-base font-medium">min</span>
                        </div>
                        <div className="w-24 h-24 text-center py-4 bg-textSec rounded-sm shadow-md">
                            <span className="block text-textPri text-3xl font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</span><span className=" block text-textPri text-base font-medium">sec</span>
                        </div>
                    </div>
                    <button className="px-10 py-3 bg-primary hover:bg-btnHover rounded-sm shadow-md text-white text-xl font-medium uppercase">BUY NOW</button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
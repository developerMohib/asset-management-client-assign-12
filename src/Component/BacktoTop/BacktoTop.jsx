import { useEffect, useState } from "react";

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    if (window.pageYOffset > 300) {
      // show button
      setIsVisible(true);
    }
    else{
        setIsVisible(false)
    }
  };
  
  const scrollTop = () => {
    // go top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <div>
      <button
        type="button"
        className={`fixed bottom-8 right-8 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollTop}
      >
        ↑
      </button>
    </div>
  );
};

export default BacktoTop;

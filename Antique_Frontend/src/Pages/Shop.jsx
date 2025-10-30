import React, { useEffect } from "react";
import Heading from "../Components/Shared/Heading";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { shopAnimations } from "../Components/Animations/shopAnimations";
import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "../Components/Shared/Axiosinstance";

const Shop = () => {
  const sectionRef = React.useRef(null);
  const [totalPage, setTotalPage] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  // Fetch data from backend. We get something like this: {items: Array(9), totalItems: 15}
  const {
    isPending,  
    error,
    data = { items: [], totalItems: 0 },
  } = useQuery({
    queryKey: ["weapons", currentPage],
    queryFn: () => AxiosInstance.get(`/shop?page=${currentPage}`).then((res) => res.data),
  });

  useGSAP(() => {
    if (sectionRef.current) {
      shopAnimations(sectionRef.current);
    }
  }, [data]);
  const totalItems = data.totalItems;
  const items = data.items;

  // Pagination Buttons
  useEffect(() => {
  if (totalItems > 0 && totalPage.length === 0) { 
    const numberOfPages = Math.ceil(totalItems / 9);
    setTotalPage([...Array(numberOfPages).keys()]);
  }
}, [totalItems, totalPage.length]);


  // 🌀 Spinner while loading
  if (isPending) {
    return (
      <section className="flex items-center justify-center h-dvh bg-[#f7e1b5]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-[#53310e] border-t-[#f7e1b5] rounded-full animate-spin"></div>
          <p className="text-[#53310e] font-semibold text-lg md:text-xl">
            Loading weapons...
          </p>
        </div>
      </section>
    );
  }
  // ❌ Error handling
  if (error) {
    return (
      <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-[#f7e1b5]">
        <p className="text-[#53310e] text-xl font-semibold mb-2">
          Failed to load weapons
        </p>
        <p className="text-[#53310e]/80 text-sm">Please try again later.</p>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="custom-container shop-section">
      {/* Heading Section */}
      <Heading
        title="Shop"
        subtitle="Buy, Sell & Exchange Your Antique Weapons"
      />

      {/* Grid of items */}
      <div className="shop-grid">
        {items.map(({ _id, name, image, price, description }) => (
          <div key={_id} className="shop-card ">
            {/* corner decorations */}
            <span className="corner-top-left"></span>
            <span className="corner-bottom-right"></span>

            <img
              src={image}
              alt={name || "Weapon image"}
              className="weapon-img"
            />
            <h3 className="weapon-name">{name}</h3>
            <p className="weapon-desc">{description}</p>
            <p className="weapon-price">${price}</p>

            <Link
              to={`/shop/${_id}`}
              state={{ _id, name, image, price, description }}
              className="view-details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {/* --- Pagination --- */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {totalPage.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 md:px-5 md:py-2.5 font-bold rounded-lg border-2 border-[#53310e] transition-all duration-300 shadow-md cursor-pointer
        ${
          currentPage === page + 1
            ? "bg-[#53310e] text-[#f7e1b5]"
            : "bg-[#8B5E3C] text-[#f7e1b5] hover:bg-[#53310e] hover:text-[#f7e1b5] active:scale-95"
        }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Shop;

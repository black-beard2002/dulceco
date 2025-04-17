import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import menubg from "../assets/image/menubg.jpg";
import items from "../assets/data/menuitems";
import ProductItem from "../components/ProductItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBottleDroplet,
  faCake,
  faCircleLeft,
  faCoffee,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(items);

  const categories = [
    {
      id: "drinks",
      name: "Hot Drinks",
      icon: <FontAwesomeIcon icon={faCoffee} className="w-6 h-6" />,
    },
    {
      id: "pies",
      name: "Pies",
      icon: <FontAwesomeIcon icon={faCookie} className="w-6 h-6" />,
    },
    {
      id: "croissants",
      name: "Croissants",
      icon: <FontAwesomeIcon icon={faCookie} className="w-6 h-6" />,
    },
    {
      id: "coldDrinks",
      name: "Cold Drinks",
      icon: <FontAwesomeIcon icon={faBottleDroplet} className="w-6 h-6" />,
    },
    {
      id: "cakes",
      name: "Cakes",
      icon: <FontAwesomeIcon icon={faCake} className="w-6 h-6" />,
    },
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const updatedFilteredItems =
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory);
    setFilteredItems(updatedFilteredItems);
  }, [activeCategory]);

  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center"
      id="menu"
      style={{
        backgroundImage: `url(${menubg})`,
      }}
    >
      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex relative flex-wrap justify-center gap-4 mt-8 px-4"
      >
        <button
          onClick={() => navigate('/')}
          className="inline-flex group text-[#443] flex-row gap-1 px-6 py-3 rounded-full hover:bg-white/50 items-center shadow-lg duration-300 transition-all"
        >
          <FontAwesomeIcon icon={faCircleLeft} className="group-hover:scale-105 duration-200"/>
          <span className="font-semibold">Home</span>
        </button>
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
            activeCategory === "all"
              ? "bg-amber-600 text-white"
              : "bg-white text-amber-600 hover:bg-amber-50"
          }`}
        >
          All Items
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.id
                ? "bg-amber-600 text-white"
                : "bg-white text-amber-600 hover:bg-amber-50"
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full mt-12 px-4"
      >
        <h1 className="text-2xl  font-bold text-center mb-8">
          {activeCategory === "all"
            ? "All Items"
            : categories.find((category) => category.id === activeCategory)
                ?.name || "Other"}
        </h1>

        <div className="w-full mt-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {filteredItems.map((item) => (
            <div key={item.id} className="w-full">
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-gray-500"
        >
          No items found in this category
        </motion.div>
      )}
    </div>
  );
};

export default Menu;

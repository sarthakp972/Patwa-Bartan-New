import React, { createContext, useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { realtimeDB } from "../FirebaseConfig";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(""); // Default category

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const dbRef = ref(realtimeDB);
        const snapshot = await get(dbRef);
  
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Fetched Categories:", Object.keys(data)); // Debugging Log
  
          let productData = {};
          Object.keys(data).forEach((category) => {
            productData[category] = Object.values(data[category] || {});
          });
  
          setProducts(productData);
        } else {
          console.warn("No data found in Firebase");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedCategory, setSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

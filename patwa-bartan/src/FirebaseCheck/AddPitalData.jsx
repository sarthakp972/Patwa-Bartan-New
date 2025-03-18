import React from "react";
import { realtimeDB } from "../FirebaseConfig"; // Import Realtime Database
import { ref, push, set } from "firebase/database";

const addaluminiumData = () => {
  try {
    const aluminiumRef = ref(realtimeDB, "aluminium"); // Reference to 'Pital' table

    // Sample data
    const aluminiumProducts = [
      {
        "id": "aluminium1",
        "Title": "aluminium Bowl",
        "images": {
          "main": "https://example.com/main-image.jpg",
          "sub": [
            "https://example.com/sub-image1.jpg",
            "https://example.com/sub-image2.jpg",
            "https://example.com/sub-image3.jpg"
          ]
        },
        "description": "A high-quality brass bowl.",
        "size": "Medium",
        "discount": "10%",
        "Price": "1050",
        "Brand": "Local",
        "Metal": "aluminium",
        "weight": "2kg",
        "AboutThisItem": "Durable and long-lasting.",
        "otherOffer": "false",
        "OtherAdditionalDetails": "false",
        "Item_quantity":false,
      }
    ];

    // Loop through array and add each item using push (creates unique keys)
   aluminiumProducts.forEach((product) => {
      const newProductRef = push(aluminiumRef); // Create a new key for each item
      set(newProductRef, product); // Store the product under the unique key
    });

    console.log("Data added successfully to Firebase Realtime Database!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

const AddPital = () => {
  return (
    <div>
      <h2>Add Pital Data to Firebase</h2>
      <button onClick={addaluminiumData}>Add Pital Data</button>
    </div>
  );
};

export default AddPital;

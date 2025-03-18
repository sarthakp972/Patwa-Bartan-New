import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../context/useProducts";
import useCart from "../context/useCart";
import { Button, Modal } from "react-bootstrap";
import { FaWhatsapp, FaShoppingCart, FaEnvelope } from "react-icons/fa";
import "../Css-page/Details.css";
import Note from "../Components/Note";

const Details = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { productId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  let product = null;
  Object.values(products).forEach((category) => {
    const foundProduct = category.find((p) => p.id === productId);
    if (foundProduct) product = foundProduct;
  });

  if (!product) return <h2 className="text-center mt-4">❌ उत्पाद नहीं मिला</h2>;

  const whatsappMessage = `नमस्ते, मैं इस उत्पाद को खरीदने में रुचि रखता हूँ:  \n- उत्पाद: ${product.Title}  \n- मूल्य: ₹${product.Price}  \n- छूट: ${product.discount ? `${product.discount}% की छूट` : "कोई छूट नहीं"}  \n- आकार: ${product.size || "N/A"}  \n- वज़न: ${product.weight || "N/A"}  \n- स्टॉक: ${product.stock || "उपलब्ध"}  \nकृपया अधिक जानकारी दें।`;

  const whatsappLink = `https://wa.me/9713671554?text=${encodeURIComponent(whatsappMessage)}`;

  const emailSubject = `उत्पाद जानकारी - ${product.Title}`;
  const emailBody = `प्रिय पटवा बर्तन भंडार,\n\nमुझे आपके इस उत्पाद में रुचि है:\n\nउत्पाद: ${product.Title}\nमूल्य: ₹${product.Price}\nआकार: ${product.size || "N/A"}\nवज़न: ${product.weight || "N/A"}\n\nकृपया अधिक जानकारी साझा करें।\n\nधन्यवाद।`;
  const emailLink = `mailto:maakherapatinavdurgautsavsamit@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Function to open modal with selected image
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <>
      <div className="container mt-4 details-page premium-style">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6">
            <img
              src={product.images?.main || "https://via.placeholder.com/400"}
              alt={product.Title}
              className="img-fluid main-image"
            />

            {/* Sub Images */}
            {product.images?.sub && Array.isArray(product.images.sub) && product.images.sub.length > 0 && (
              <div className="sub-images mt-3">
                {product.images.sub.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`sub-${index}`}
                    className="sub-image"
                    onClick={() => handleImageClick(img)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="product-title">{product.Title}</h2>
            <div className="price-section premium-price">
              {product.discount ? (
                <>
                  <span className="discount-price">
                    ₹{(product.Price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="original-price">₹{product.Price}</span>
                  <span className="discount-label">-{product.discount}% की छूट</span>
                </>
              ) : (
                <span className="price">₹{product.Price}</span>
              )}
            </div>

            <p><strong>धातु:</strong> {product.Metal || "Brass"}</p>
            <p><strong>आकार:</strong> {product.size || "34.29 x 34.29 x 8.89 cm"}</p>
            <p><strong>वज़न:</strong> {product.weight || "1.4 kg"}</p>
            <p><strong>स्टॉक उपलब्ध:</strong> {product.stock || "उपलब्ध"}</p>

            {product.AboutThisItem && product.AboutThisItem !== "false" && (
              <p><strong>उत्पाद के बारे में:</strong> {product.AboutThisItem}</p>
            )}

            {/* Cart Button */}
            <Button
              variant="primary"
              className="cart-button mt-3 premium-button"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              <FaShoppingCart /> कार्ट में जोड़ें
            </Button>

            {/* WhatsApp Button */}
            <Button
              variant="success"
              className="whatsapp-button mt-3 mx-2 premium-button"
              href={whatsappLink}
              target="_blank"
            >
              <FaWhatsapp /> व्हाट्सएप पर खरीदें
            </Button>

            {/* Email Button */}
            <Button
              variant="dark"
              className="email-button mt-3 premium-button"
              href={emailLink}
            >
              <FaEnvelope /> ईमेल भेजें
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged" className="img-fluid" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            बंद करें
          </Button>
        </Modal.Footer>
      </Modal>

      <Note />
    </>
  );
};

export default Details;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../context/useProducts';

const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = () => {
      const categoryRedirects = {
        pital: 'Pital',
        aluminium: 'aluminium',
        cookware: 'cookware',
        copper: 'copper',
        nonstick:'nonstick',
        pooja_saman:"pooja_saman",
        
        // Add additional categories as needed
      };

      const normalizedQuery = query.toLowerCase();

      // Check if the query contains keywords that match the categories
      const matchingCategory = Object.keys(categoryRedirects).find((key) =>
        normalizedQuery.includes(key) // Check if query includes the key
      );

      if (matchingCategory) {
        navigate(`/category/${categoryRedirects[matchingCategory]}`);
        return; // Exit early to avoid setting results state
      }

      // If no category redirect, search through products
      const filteredResults = Object.values(products).flat().filter((product) =>
        product.title.toLowerCase().includes(normalizedQuery)
      );

      setResults(filteredResults);
      setLoading(false);
    };

    fetchResults();
  }, [query, navigate, products]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="search-results">
      <h1>Search Results for: "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found. Try a different search.</p>
      )}
    </div>
  );
};

export default SearchResults;

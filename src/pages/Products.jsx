/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const { brand_name } = useParams();

  const brands = useLoaderData();

  useEffect(() => {
    const filteredProducts = brands.filter((product) => product.brand_name.toLowerCase() === brand_name);
    setProducts(filteredProducts);
  }, [brand_name]);

  useEffect(() => {
    fetch('https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/products')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        const filteredProducts = data.filter(product => product.brand.toLowerCase() === brand_name.toLowerCase());
        setAllProducts(filteredProducts);
      });
  }, [brand_name]);

  return (
    <div>
      {/* advertisement1 */}
      {products &&
        products.map((product, id) => (
          <div key={id}>
            <div className="carousel w-full">
              <div id="advertisement1" className="carousel-item relative h-[350px] md:h-[400px] lg:h-[495px] w-full">
                <img
                  src={product.slider1}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#advertisement3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#advertisement2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="advertisement2" className="carousel-item relative h-[350px] md:h-[400px] lg:h-[495px] w-full">
                <img
                  src={product.slider2}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#advertisement1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#advertisement3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="advertisement3" className="carousel-item relative h-[350px] md:h-[400px] lg:h-[495px] w-full">
                <img
                  src={product.slider3}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#advertisement2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#advertisement1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* all products */}
        <div>
            <div className="pt-20">
            {allProducts && allProducts.length > 0 ? (
              <div>
                <h1 className="text-center uppercase font-semibold text-lg mb-2">
                  {brand_name}
                </h1>
                <hr className="w-14 border-[1.5px] border-[#F44545] mb-14 mx-auto" />
              </div>
            ) : (
              <p className="text-center">No products available</p>
            )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-8 lg:px-12 pt-10 pb-20">
            {allProducts &&
              allProducts.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Products;

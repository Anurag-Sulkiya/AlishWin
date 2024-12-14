// src/components/products/Products.jsx
'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ image, title, price, onSale }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="relative">
        {onSale && (
          <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm transform rotate-45 translate-x-4 -translate-y-2">
            SALE
          </span>
        )}
        <div className="relative h-64 w-full mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-xl font-medium text-center mb-2">{title}</h3>
      <p className="text-center text-gray-700">₹{price.toFixed(2)}</p>
    </div>
  );
};

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      image: '/Images/pro1.webp',
      title: 'Hero Cap',
      price: 120.00,
      onSale: false
    },
    {
      id: 2,
      image: '/Images/pro2.webp',
      title: 'Power Cap',
      price: 120.00,
      onSale: true
    },
    {
      id: 3,
      image: '/Images/pro3.webp',
      title: 'Health Pro Cap',
      price: 120.00,
      onSale: false
    },
    // Add more products as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.max(0, products.length - 3) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, products.length - 3) : prev - 1
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gray-900">Pharmacy</span>{' '}
            <span className="text-green-500">Products</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
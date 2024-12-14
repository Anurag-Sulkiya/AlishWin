// // src/components/common/Navbar.jsx
// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Search } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-transparent absolute w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-white text-2xl font-bold">
//               ORTHOC
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-white hover:text-gray-200">
//               HOME
//             </Link>
//             <Link href="/product" className="text-white hover:text-gray-200">
//               PRODUCTS
//             </Link>
//             <Link href="/about" className="text-white hover:text-gray-200">
//               ABOUT US
//             </Link>
        
//             <Link href="/contact" className="text-white hover:text-gray-200">
//               CONTACT US
//             </Link>
//             <button className="text-white hover:text-gray-200">
//               <Search size={20} />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-gray-200"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-emerald-600">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link href="/" className="block text-white hover:text-gray-200 py-2">
//               HOME
//             </Link>
//             <Link href="/products" className="block text-white hover:text-gray-200 py-2">
//               PRODUCTS
//             </Link>
//             <Link href="/about" className="block text-white hover:text-gray-200 py-2">
//               ABOUT US
//             </Link>

//             <Link href="/contact" className="block text-white hover:text-gray-200 py-2">
//               CONTACT US
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar; 

// src/components/common/Navbar.jsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productCategories = [
    { name: 'Supplements', href: '/products/supplements' },
    { name: 'Vitamins', href: '/products/vitamins' },
    { name: 'Diet & Nutrition', href: '/products/diet-nutrition' },
    { name: 'Tea & Coffee', href: '/products/tea-coffee' }
  ];

  return (
    <nav className="bg-transparent absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              ALISHWIN
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-200">
              HOME
            </Link>
            <div className="relative">
              <button 
                className="text-white hover:text-gray-200"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                PRODUCTS
              </button>
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 mt-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-white hover:text-gray-200">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              CONTACT US
            </Link>
            <button className="text-white hover:text-gray-200">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-gray-200 py-2">
              HOME
            </Link>
            <Link href="/products" className="block text-white hover:text-gray-200 py-2">
              PRODUCTS
            </Link>
            <div className="pl-4">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block text-white hover:text-gray-200 py-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block text-white hover:text-gray-200 py-2">
              ABOUT US
            </Link>
            <Link href="/contact" className="block text-white hover:text-gray-200 py-2">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
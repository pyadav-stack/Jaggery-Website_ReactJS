// // Products.jsx
// import React from 'react';

// const products = [
//   {
//     name: 'Jaggery Powder',
//     description: 'Fine granulated jaggery, perfect for daily use.',
//     benefits: [
//       'Dissolves easily in beverages and cooking',
//       'Retains natural minerals',
//       'Great sugar substitute'
//     ],
//     image: 'https://thumbs.dreamstime.com/b/organic-gur-jaggery-powder-cubes-used-as-ingredient-sweet-savoury-dishes-cuisines-india-unrefined-sugar-253241905.jpg',
//   },
//   {
//     name: 'Jaggery Cubes',
//     description: 'Convenient cubes for your tea and snacks.',
//     benefits: [
//       'Portable energy bites',
//       'Easy to use and store',
//       'Supports digestion'
//     ],
//     image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448299137/JM/WS/ZW/42873893/natural-jaggery-cube-1000x1000.jpeg',
//   },
//   {
//     name: 'Liquid Jaggery',
//     description: 'Ideal for baking and beverages.',
//     benefits: [
//       'Nutrient-rich sweetener',
//       'Helps relieve cold and cough',
//       'Adds depth to flavor'
//     ],
//     image: 'https://th.bing.com/th/id/OIP.--Ddwp8J2v3AA7dIZ3pxrQHaGi?rs=1&pid=ImgDetMain',
//   },
//   {
//     name: 'Ginger Jaggery',
//     description: 'Infused with natural ginger to aid digestion.',
//     benefits: [
//       'Boosts immunity',
//       'Soothes sore throat',
//       'Unique sweet and spicy taste'
//     ],
//     image: 'https://cpimg.tistatic.com/06442909/b/4/Ginger-Jaggery.jpg',
//   },
//   {
//     name: 'Organic Jaggery Block',
//     description: 'Traditional solid jaggery block made from fresh sugarcane.',
//     benefits: [
//       'Natural detoxifier',
//       'Rich in iron and magnesium',
//       'Boosts energy naturally'
//     ],
//     image: 'https://th.bing.com/th/id/OIP.eBDpoiFmgpASslYa01rx8AHaHa?rs=1&pid=ImgDetMain',
//   }
// ];

// function Products() {
//   return (
//     <section className="p-8 bg-yellow-50">
//       <h2 className="text-4xl font-bold mb-6 text-center text-yellow-800">Our Products</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="bg-brown-800 p-4 rounded shadow hover:shadow-lg transition">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-90 object-cover mb-4 rounded"
//             />
//             <h3 className="text-xl font-bold mb-2 text-yellow-700">{product.name}</h3>
//             <p className="mb-2 text-gray-700">{product.description}</p>
//             <ul className="list-disc pl-5 text-sm text-gray-600">
//               {product.benefits.map((benefit, i) => (
//                 <li key={i}>{benefit}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;
import React from 'react';

const products = [
  {
    name: 'Jaggery Powder',
    description: 'Fine granulated jaggery, perfect for daily use.',
    benefits: [
      'Dissolves easily in beverages and cooking',
      'Retains natural minerals',
      'Great sugar substitute',
    ],
    image:
      'https://thumbs.dreamstime.com/b/organic-gur-jaggery-powder-cubes-used-as-ingredient-sweet-savoury-dishes-cuisines-india-unrefined-sugar-253241905.jpg',
  },
  {
    name: 'Jaggery Cubes',
    description: 'Convenient cubes for your tea and snacks.',
    benefits: ['Portable energy bites', 'Easy to use and store', 'Supports digestion'],
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/9/448299137/JM/WS/ZW/42873893/natural-jaggery-cube-1000x1000.jpeg',
  },
  {
    name: 'Liquid Jaggery',
    description: 'Ideal for baking and beverages.',
    benefits: [
      'Nutrient-rich sweetener',
      'Helps relieve cold and cough',
      'Adds depth to flavor',
    ],
    image:
      'https://th.bing.com/th/id/OIP.--Ddwp8J2v3AA7dIZ3pxrQHaGi?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Ginger Jaggery',
    description: 'Infused with natural ginger to aid digestion.',
    benefits: ['Boosts immunity', 'Soothes sore throat', 'Unique sweet and spicy taste'],
    image: 'https://cdn.shopclues.com/images1/detailed/102296/147510862-102296055-1611295404.jpg',
  },
  {
    name: 'Organic Jaggery Block',
    description: 'Traditional solid jaggery block made from fresh sugarcane.',
    benefits: ['Natural detoxifier', 'Rich in iron and magnesium', 'Boosts energy naturally'],
    image:
      'https://th.bing.com/th/id/OIP.eBDpoiFmgpASslYa01rx8AHaHa?rs=1&pid=ImgDetMain',
  },
];

function Products() {
  return (
    <section className="p-4 sm:p-6 md:p-8 bg-yellow-50">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-800">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {product.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

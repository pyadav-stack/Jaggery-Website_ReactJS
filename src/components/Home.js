// // Home.jsx
// import React from 'react';

// function Home() {
//   return (
//     <section className="p-8 bg-yellow-50 text-center">
//       <h1 className="text-4xl font-bold mb-4 text-yellow-800">Welcome to Jaggery Delight</h1>
//       <p className="text-lg mb-6 text-gray-700">
//         Experience the authentic taste of traditional jaggery, crafted with care and love.
//       </p>
//       <img
//         src="https://png.pngtree.com/background/20211216/original/pngtree-cube-brown-sugar-brown-sugar-ancient-brown-sugar-block-real-shot-picture-image_1516534.jpg"
//         alt="Jaggery"
//         // className="mx-auto w-1/2 rounded shadow mb-6"
//         className="mx-auto w-1/3 rounded shadow mb-3 "
//       />

//       <div className="mt-10 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold text-yellow-700 mb-4">What is Jaggery?</h2>
//         <p className="mb-4 text-gray-600">
//           Jaggery, known as "Gur" in many regions, is a natural unrefined sugar made from sugarcane juice or palm sap. Unlike white sugar, jaggery retains its molasses content, offering a richer taste and numerous health benefits.
//         </p>

//         <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Why Choose Jaggery Over Sugar?</h2>
//         <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
//           <li>Rich in essential minerals like iron, magnesium, and potassium</li>
//           <li>Helps in detoxifying the liver</li>
//           <li>Acts as a natural body cleanser</li>
//           <li>Improves digestion and strengthens the immune system</li>
//           <li>Provides instant energy without the harmful effects of refined sugar</li>
//         </ul>

//         <h2 className="text-2xl font-semibold text-yellow-700 mt-8 mb-4">Crafted with Traditional Methods</h2>
//         <p className="mb-4 text-gray-600">
//            <img
//         src="https://images.pexels.com/photos/13746824/pexels-photo-13746824.jpeg?auto=compress&cs=tinysrgb&w=1200"
//         alt="Jaggery"
//         className="mx-auto w-1/2 rounded shadow mb-6"
//       />
//           Our jaggery is produced using age-old methods passed down through generations. We ensure every block of jaggery is free from chemicals and preservatives, making it a healthy addition to your diet.
//         </p>

//         <h2 className="text-2xl font-semibold text-yellow-700 mt-8 mb-4">Versatile and Delicious</h2>
//         <p className="text-gray-600">
//           Whether you're sweetening your tea, baking desserts, or simply enjoying it as a snack, jaggery fits perfectly into your daily routine.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from 'react';

function Home() {
  return (
    <section className="p-4 sm:p-6 md:p-8 bg-yellow-50 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-800">
        Welcome to Jaggery Delight
      </h1>

      <p className="text-base sm:text-lg mb-6 text-gray-700">
        Experience the authentic taste of traditional jaggery, crafted with care and love.
      </p>

      <img
        src="https://png.pngtree.com/background/20211216/original/pngtree-cube-brown-sugar-brown-sugar-ancient-brown-sugar-block-real-shot-picture-image_1516534.jpg"
        alt="Jaggery"
        className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded shadow mb-6"
      />

      <div className="mt-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-700 mb-4">
          What is Jaggery?
        </h2>
        <p className="mb-4 text-gray-600 text-justify">
          Jaggery, known as "Gur" in many regions, is a natural unrefined sugar made from sugarcane juice or palm sap. Unlike white sugar, jaggery retains its molasses content, offering a richer taste and numerous health benefits.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-700 mb-4">
          Why Choose Jaggery Over Sugar?
        </h2>
        <ul className="list-disc list-inside text-left text-gray-600 space-y-2 pl-4">
          <li>Rich in essential minerals like iron, magnesium, and potassium</li>
          <li>Helps in detoxifying the liver</li>
          <li>Acts as a natural body cleanser</li>
          <li>Improves digestion and strengthens the immune system</li>
          <li>Provides instant energy without the harmful effects of refined sugar</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-700 mt-8 mb-4">
          Crafted with Traditional Methods
        </h2>
        <img
          src="https://thumbs.dreamstime.com/b/jaggery-realistic-background-organic-powder-blocks-fresh-sugar-cane-color-vector-illustration-247268407.jpg"
          alt="Traditional Jaggery Making"
          className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 rounded shadow mb-6"
        />
        <p className="mb-4 text-gray-600 text-justify">
          Our jaggery is produced using age-old methods passed down through generations. We ensure every block of jaggery is free from chemicals and preservatives, making it a healthy addition to your diet.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-700 mt-8 mb-4">
          Versatile and Delicious
        </h2>
        <p className="text-gray-600 text-justify">
          Whether you're sweetening your tea, baking desserts, or simply enjoying it as a snack, jaggery fits perfectly into your daily routine.
        </p>
      </div>
    </section>
  );
}

export default Home;

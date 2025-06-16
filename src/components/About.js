// // import React from 'react';

// function About() {
//   return (
//     <section className="p-8 bg-yellow-50 text-gray-800">
//       {/* Our Story */}
//       <h2 className="text-4xl font-bold mb-6 text-center text-yellow-800">Our Story</h2>
//       <div className="max-w-4xl mx-auto mb-12 text-lg">
//         <p className="mb-4">
//           Inspired by India's rich tradition of jaggery-making, we launched our brand with a mission
//           to deliver pure, unrefined sweetness to every household. Our team bridges the gap between
//           age-old practices and modern-day hygiene standards to ensure unmatched quality and nutrition.
//         </p>
//         <p>
//           We work closely with local farmers, handpicking only the best organically grown sugarcane,
//           and ensure every step – from crushing to solidifying – follows traditional yet safe processes.
//         </p>
//       </div>

//       {/* Jaggery Process Overview */}
//       <h3 className="text-3xl font-semibold mb-4 text-center text-yellow-700">Jaggery Processing Techniques</h3>
//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
//         <img
//           src="https://th.bing.com/th/id/OIP.KHBMu2cnR_UUBs5djk5M3AHaEJ?rs=1&pid=ImgDetMain"
//           alt="Fresh Sugarcane"
//           className="rounded shadow"
//         />
//         <div>
//           <h4 className="text-xl font-bold mb-2">1. Harvesting Fresh Sugarcane</h4>
//           <p>
//             High-quality, mature sugarcane is harvested manually from organic fields. Timely harvesting ensures the juice retains optimal sweetness and nutritional value.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
//         <div>
//           <h4 className="text-xl font-bold mb-2">2. Juice Extraction</h4>
//           <p>
//             Extracted using wooden crushers or cold press machines to preserve the nutrients. No chemicals are added during this process.
//           </p>
//         </div>
//         <img
//           src="https://thumbs.dreamstime.com/b/sugarcane-juice-extraction-process-sugar-mill-bright-daylight-sugarcane-juice-streams-multiple-spouts-319611446.jpg?w=450"
//           alt="Juice Extraction"
//           className="rounded shadow"
//         />
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
//         <img
//           src="https://th.bing.com/th/id/OIP.Osl2ksN0n0f6ZcmwujBaIgHaE7?rs=1&pid=ImgDetMain"
//           alt="Boiling Sugarcane Juice"
//           className="rounded shadow"
//         />
//         <div>
//           <h4 className="text-xl font-bold mb-2">3. Boiling and Clarification</h4>
//           <p>
//             Juice is boiled in large iron pans over a slow fire. Impurities are removed using natural clarifiers like okra or lime water — a crucial step for quality jaggery.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
//         <div>
//           <h4 className="text-xl font-bold mb-2">4. Cooling & Molding</h4>
//           <p>
//             Once thickened to a syrup, it is poured into wooden molds or trays to cool and solidify into blocks, cubes, or powder form depending on the product.
//           </p>
//         </div>
//         <img
//           src="https://www.researchgate.net/profile/Yasinta-Sindy-Pramesti/publication/332478340/figure/fig4/AS:748856950132737@1555552818109/Molding-sugar_Q640.jpg"
//           alt="Cooling and Molding Jaggery"
//           className="rounded shadow"
//         />
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
//         <img
//           src="https://th.bing.com/th/id/OIP.htIZa4qHtMuqT_Z4_tZt8gHaDt?rs=1&pid=ImgDetMain"
//           alt="Packaged Jaggery"
//           className="rounded shadow"
//         />
//         <div>
//           <h4 className="text-xl font-bold mb-2">5. Packaging</h4>
//           <p>
//             The final jaggery is hygienically packed in eco-friendly packaging to preserve freshness and avoid contamination — ready to sweeten your meals the natural way!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from 'react';

function About() {
  return (
    <section className="p-6 sm:p-8 bg-yellow-50 text-gray-800">
      {/* Our Story */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-800">Our Story</h2>
      <div className="max-w-5xl mx-auto mb-12 text-base sm:text-lg space-y-4 leading-relaxed">
        <p>
          Inspired by India's rich tradition of jaggery-making, we launched our brand with a mission
          to deliver pure, unrefined sweetness to every household. Our team bridges the gap between
          age-old practices and modern-day hygiene standards to ensure unmatched quality and nutrition.
        </p>
        <p>
          We work closely with local farmers, handpicking only the best organically grown sugarcane,
          and ensure every step – from crushing to solidifying – follows traditional yet safe processes.
        </p>
      </div>

      {/* Jaggery Process Overview */}
      <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-yellow-700">Jaggery Processing Techniques</h3>

      {/* Step 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-12">
        <img
          src="https://th.bing.com/th/id/OIP.KHBMu2cnR_UUBs5djk5M3AHaEJ?rs=1&pid=ImgDetMain"
          alt="Fresh Sugarcane"
          className="rounded-xl shadow-md w-full object-cover"
        />
        <div>
          <h4 className="text-xl font-bold mb-2">1. Harvesting Fresh Sugarcane</h4>
          <p>
            High-quality, mature sugarcane is harvested manually from organic fields. Timely harvesting ensures the juice retains optimal sweetness and nutritional value.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-12">
        <div>
          <h4 className="text-xl font-bold mb-2">2. Juice Extraction</h4>
          <p>
            Extracted using wooden crushers or cold press machines to preserve the nutrients. No chemicals are added during this process.
          </p>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/sugarcane-juice-extraction-process-sugar-mill-bright-daylight-sugarcane-juice-streams-multiple-spouts-319611446.jpg?w=450"
          alt="Juice Extraction"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Step 3 */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-12">
        <img
          src="https://th.bing.com/th/id/OIP.Osl2ksN0n0f6ZcmwujBaIgHaE7?rs=1&pid=ImgDetMain"
          alt="Boiling Sugarcane Juice"
          className="rounded-xl shadow-md w-full object-cover"
        />
        <div>
          <h4 className="text-xl font-bold mb-2">3. Boiling and Clarification</h4>
          <p>
            Juice is boiled in large iron pans over a slow fire. Impurities are removed using natural clarifiers like okra or lime water — a crucial step for quality jaggery.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-12">
        <div>
          <h4 className="text-xl font-bold mb-2">4. Cooling & Molding</h4>
          <p>
            Once thickened to a syrup, it is poured into wooden molds or trays to cool and solidify into blocks, cubes, or powder form depending on the product.
          </p>
        </div>
        <img
          src="https://www.researchgate.net/profile/Yasinta-Sindy-Pramesti/publication/332478340/figure/fig4/AS:748856950132737@1555552818109/Molding-sugar_Q640.jpg"
          alt="Cooling and Molding Jaggery"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Step 5 */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <img
          src="https://th.bing.com/th/id/OIP.htIZa4qHtMuqT_Z4_tZt8gHaDt?rs=1&pid=ImgDetMain"
          alt="Packaged Jaggery"
          className="rounded-xl shadow-md w-full object-cover"
        />
        <div>
          <h4 className="text-xl font-bold mb-2">5. Packaging</h4>
          <p>
            The final jaggery is hygienically packed in eco-friendly packaging to preserve freshness and avoid contamination — ready to sweeten your meals the natural way!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

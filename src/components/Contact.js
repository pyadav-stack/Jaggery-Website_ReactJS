// import React from 'react';

// function Contact() {
//   return (
//     <section className="p-8 bg-yellow-50">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form className="max-w-xl mx-auto">
//         <div className="mb-4">
//           <label className="block mb-2">Name</label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Your Name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="you@example.com"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Message</label>
//           <textarea
//             className="w-full border border-gray-300 p-2 rounded"
//             rows="5"
//             placeholder="Your message..."
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Contact;
// import React from 'react';
// import { Mail, Phone, MapPin, FileText } from 'lucide-react';

// function Contact() {
//   return (
//     <section className="bg-yellow-50 py-12 px-4 md:px-12">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-yellow-900 mb-10">Contact Us</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Details Card */}
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <ul className="space-y-6 text-gray-800 text-lg">
//               <li className="flex items-start gap-4">
//                 <Mail className="text-yellow-600" />
//                 <div>
//                   <strong>Email:</strong><br />
//                   <a href="mailto:kusumoverseas14@gmail.com" className="text-blue-700 underline">
//                     kusumoverseas14@gmail.com
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <Phone className="text-yellow-600" />
//                 <div>
//                   <strong>Phone:</strong><br />
//                   <a href="tel:+919599968493" className="text-blue-700 underline">+91 9599968493</a>,<br />
//                   <a href="tel:+919899800065" className="text-blue-700 underline">+91 9899800065</a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <MapPin className="text-yellow-600" />
//                 <div>
//                   <strong>Address:</strong><br />
//                   <a
//                     href="https://www.google.com/maps/search/?api=1&query=khasra+no.+126,+delhi+meerut+road,+dhargal,+ghaziabad,+uttarpradesh+pin+201017,+india"
//                     className="text-blue-700 underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Khasra No. 126, Delhi Meerut Road, Dhargal,<br />
//                     Ghaziabad, Uttar Pradesh - 201017, India
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <FileText className="text-yellow-600" />
//                 <div>
//                   <strong>Google Form:</strong><br />
//                   <a
//                     href="https://docs.google.com/forms/d/e/1FAIpQLScIfqQSZrpnw-aqgka_rExUaY0osnSShRPN7jZklBjZ2OamXw/viewform?usp=header"
//                     className="text-blue-700 underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Fill out our contact form
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Google Map Embed */}
//           <div className="rounded-2xl overflow-hidden shadow-lg h-96">
//             <iframe
//               title="Kusum Overseas Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.042323070707!2d77.451367!3d28.697340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c648ea17f7359%3A0x2f8263628de8ccfd!2sKhasra%20No.%20126%2C%20Delhi%20Meerut%20Rd%2C%20Dhar%20Ganj%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201017!5e0!3m2!1sen!2sin!4v1717761191863"
//               width="100%"
//               height="100%"
//               allowFullScreen=""
//               loading="lazy"
//               className="border-0"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
// import React from 'react';
// import { Mail, Phone, MapPin, FileText } from 'lucide-react';

// function Contact() {
//   return (
//     <section className="bg-yellow-50 py-12 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-900 mb-10">
//           Contact Us
//         </h2>

//         <div className="grid gap-10 md:grid-cols-2 items-start">
//           {/* Contact Info */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 text-gray-800 text-base sm:text-lg">
//             <div className="flex items-start gap-4">
//               <Mail className="text-yellow-600 mt-1" />
//               <div>
//                 <strong>Email:</strong><br />
//                 <a href="mailto:kusumoverseas14@gmail.com" className="text-blue-700 underline">
//                   kusumoverseas14@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <Phone className="text-yellow-600 mt-1" />
//               <div>
//                 <strong>Phone:</strong><br />
//                 <a href="tel:+919599968493" className="text-blue-700 underline block">Tarun Tyagi :- +91 9599968493</a>
//                 <a href="tel:+919289150095" className="text-blue-700 underline block">Rudra Tyagi :- +91 9289150095</a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <MapPin className="text-yellow-600 mt-1" />
//               <div>
//                 <strong>Address:</strong><br />
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=khasra+no.+126,+delhi+meerut+road,+dhargal,+ghaziabad,+uttarpradesh+pin+201017,+india"
//                   className="text-blue-700 underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Khasra No. 126, Delhi Meerut Road, Dhargal,<br />
//                   Ghaziabad, Uttar Pradesh - 201017, India
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FileText className="text-yellow-600 mt-1" />
//               <div>
//                 <strong>Google Form:</strong><br />
//                 <a
//                   href="https://docs.google.com/forms/d/e/1FAIpQLScIfqQSZrpnw-aqgka_rExUaY0osnSShRPN7jZklBjZ2OamXw/viewform?usp=header"
//                   className="text-blue-700 underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Fill out our contact form
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Google Map */}
//           <div className="rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96 w-full">
//             <iframe
//               title="Kusum Overseas Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.042323070707!2d77.451367!3d28.697340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c648ea17f7359%3A0x2f8263628de8ccfd!2sKhasra%20No.%20126%2C%20Delhi%20Meerut%20Rd%2C%20Dhar%20Ganj%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201017!5e0!3m2!1sen!2sin!4v1717761191863"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

function Contact() {
  return (
    <section className="bg-yellow-50 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-900 mb-10">
          Contact Us
        </h2>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Office 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 text-gray-800 text-base sm:text-lg">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Office 1 - Kusum Overseas (Head Office)</h3>

            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-600 mt-1" />
              <div>
                <strong>Address:</strong><br />
                Ghaziabad, Uttar Pradesh, India
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-yellow-600 mt-1" />
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+919599968493" className="text-blue-700 underline block">+91 9599968493</a>
                <a href="tel:+919289150095" className="text-blue-700 underline block">+91 9289150095</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-yellow-600 mt-1" />
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:kusumoverseas14@gmail.com" className="text-blue-700 underline">
                  kusumoverseas14@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="text-yellow-600 mt-1" />
              <div>
                <strong>Google Form:</strong><br />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScIfqQSZrpnw-aqgka_rExUaY0osnSShRPN7jZklBjZ2OamXw/viewform?usp=header"
                  className="text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out our contact form
                </a>
              </div>
            </div>
          </div>

          {/* Office 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 text-gray-800 text-base sm:text-lg">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Office 2 - Kusum Overseas (Sales Office)</h3>

            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-600 mt-1" />
              <div>
                <strong>Address:</strong><br />
                New Jersey, US
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-yellow-600 mt-1" />
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+18483910374" className="text-blue-700 underline block">+1 848-391-0374</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-yellow-600 mt-1" />
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:nitin.tyagi@signify.com" className="text-blue-700 underline">
                  nitin.tyagi@signify.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="text-yellow-600 mt-1" />
              <div>
                <strong>Google Form:</strong><br />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScIfqQSZrpnw-aqgka_rExUaY0osnSShRPN7jZklBjZ2OamXw/viewform?usp=header"
                  className="text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out our contact form
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Map or Form Embed */}
        {/* You can uncomment below section if you want to embed the form instead of just link */}
        <div className="mt-12">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScIfqQSZrpnw-aqgka_rExUaY0osnSShRPN7jZklBjZ2OamXw/viewform?usp=header"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-xl border"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;


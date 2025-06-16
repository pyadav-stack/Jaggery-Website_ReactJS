// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-yellow-700 text-white p-4 text-center">
//       <p>&copy; {new Date().getFullYear()} Jaggery Delight. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer className="bg-yellow-700 text-white py-6 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} <strong>Jaggery Delight</strong>. All rights reserved.
        </p>
        <div className="space-x-4 text-sm sm:text-base">
          <a
            href="/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

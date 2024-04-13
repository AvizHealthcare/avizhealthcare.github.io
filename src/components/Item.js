// import React from "react";

// const Item = ({ Links, title }) => {
//   return (
//     <ul>
//       <h1 className="mb-1 font-semibold">{title}</h1>
//       {Links.map((link) => (
//         <li key={link.name}>
//           <a
//             className="text-gray-400 hover:text-teal-400 duration-300
//           text-sm cursor-pointer leading-6"
//             href={link.link}
//           >
//             {link.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Item;

import React from "react";

const Item = ({ Links = [], title }) => {
  return (
    <div>
      <h1 className="mb-2 font-semibold">{title}</h1>
      {Links.map((link) => (
        <div key={link.name} className="mb-1">
          <a
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer"
            href={link.link}
          >
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Item;




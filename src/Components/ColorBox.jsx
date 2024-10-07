// 4. Create a "Components" folder and then create a React component named "ColorBox," which accepts a colour prop.
//The ColorBox should be clickable, and clicking on it should change its colour. Import the "colors" list, defined
//as an array of hexadecimal strings representing colours, from "data.js."
//5. The coloured div within the ColorBox component should have a width and height of 50px.
import { useState } from "react";

export default function ColorBox({ arr }) {
  const [color, setColor] = useState(
    arr[Math.floor(Math.random() * arr.length)]
  );
  return (
    <div
      style={{ backgroundColor: color }}
      className="ColorBox"
      onClick={() => {
        setColor(arr[Math.floor(Math.random() * arr.length)]);
      }}
    ></div>
  );
}

let arr = "Lab-3srcdata";

// export default function Toggle() {
//   const [isHappy, setIsHappy] = useState(true);
//   const [btnText, setBtnText] = useState("Make me sad");
//   return (
//     <div>
//       <h1>{isHappy ? "😊" : "😟"}</h1>
//       <button
//         onClick={() => {
//           setIsHappy(!isHappy);
//           isHappy ? setBtnText("Make me happy") : setBtnText("Make me sad");
//         }}
//       >
//         {btnText}
//       </button>
//     </div>
//   );
// }

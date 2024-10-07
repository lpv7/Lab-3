//Create another React component called "ColorBoxesContainer," containing five divs,
//with each div housing five ColorBox components that receive a colour array as a prop.

import ColorBox from "./ColorBox.jsx"; //https://react.dev/learn/importing-and-exporting-components
// function ColorBox() {
//   return (
//     <div>
//       {/* <button onClick={()=>}> */}
//       <button className="ColorBox">HIT ME</button>
//     </div>
//   );
// } //This way (old way?) also works but gets messy fast. must match corresponding component

export default function ColorBoxesContainer({ colors }) {
  return (
    <div>
      <div className="column">
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
      </div>
      <div className="column">
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
      </div>
      <div className="column">
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
      </div>
      <div className="column">
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
      </div>
      <div className="column">
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
        <ColorBox arr={colors} />
      </div>
      <div></div>
    </div>
  );
}

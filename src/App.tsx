import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./App.css";
const names = [
  "mk",
  "jeff",
  "joel",
  "tyler",
  "madison",
  "noah",
  "jasper",
  "zach",
  "zoe",
  "allie",
  "nate",
  "brad",
];

const NamePlate = ({ name, idx }: { name: string; idx: number }) => {
  return (
    <li className="card">
      <h3>{idx + 1}</h3>
      <h2>{name}</h2>
    </li>
  );
};

function App() {
  const [namesOrder, setNamesOrder] = useState(names);

  const [animationParent] = useAutoAnimate<HTMLUListElement>();
  const randomize = () => {
    const newOrder = [...names].sort(() => (Math.random() > 0.5 ? 1 : -1));
    setNamesOrder(newOrder);

  };
  console.log(`
  $$$$$$$$$$$*"""""**$$$$$$$$$$$$$$$$$$$$$$$$$$$*Pigskin*$$$$$$$$$$$
  $$$$$$$$$"         .d**$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$         z$"    ^"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$F      .d*"         ^*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$F    z$"$cd"           "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$F .d*" zb*beP            "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$b$"      d*$.e"            *$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$         ze*c.d            "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$r          dP$.e"           ^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$           .d$c.d           ^$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$F            e$b.zr          ^$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$.            .K$c.e          3$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$           ^  e$b z=         $$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$            " .$$L.e        4$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$.            " .*$ .r      z$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$c            " .$$L.z  .d*"$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$c            " J$E z$"   $$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$c           "".$P"     $$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$e.        z$"       .$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$c.  .dP"         $$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$$$E.         z$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ee$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  `);
  return (
    <>
      <h3 className="nav">2022 BBSFFL FANTASY FOOTBALL DRAFT ORDER</h3>
      <h3 className="small">Countdown: 0</h3>
      <div className="center-list">
        <ul className="list" ref={animationParent}>
          {names.map((name, i) => (
            <NamePlate name={name} idx={i} key={name} />
          ))}
        </ul>
      </div>
      <div className="center-list">
        <button className="random" onClick={randomize} disabled>
          Randomize!
        </button>
      </div>
    </>
  );
}

export default App;

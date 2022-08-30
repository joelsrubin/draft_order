import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./App.css";
const names = [
  "joel",
  "zach",
  "allie",
  "mk",
  "zoe",
  "nate",
  "jasper",
  "noah",
  "jeff",
  "tyler",
  "brad",
  "madison",
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
  console.log({ namesOrder, names });
  return (
    <>
      <h3 className="nav">2022 BBSFFL FANTASY FOOTBALL DRAFT ORDER</h3>
      <div className="center">
        <ul className="list" ref={animationParent}>
          {namesOrder.map((name, i) => (
            <NamePlate name={name} idx={i} key={name} />
          ))}
        </ul>
      </div>
      <div className="center">
        <button className="random" onClick={randomize}>
          Randomize!
        </button>
      </div>
    </>
  );
}

export default App;

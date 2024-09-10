import { useContext, useState } from "react";

import "./App.css";
import NAvbar from "./components/NAvbar";
import BAnner from "./components/BAnner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-full w-full ">
      <NAvbar />
      <BAnner />
    </div>
  );
}

export default App;

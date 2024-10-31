import { useState } from "react";
import AddMission from "./components/AddMission";
import MissionsList from "./components/MissionsList";

export default function App() {
  const [change, setChange] = useState(0)
  return (
    <div>
      <AddMission change={change} setChange={setChange}/>
      <MissionsList change={change} setChange={setChange}/>
    </div>
  )
}

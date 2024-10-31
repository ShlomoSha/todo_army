import { useEffect, useState } from "react"
import IMission from "../models/mission.interface"
import Mission from "./Mission"

interface Prop {
    change: number
    setChange: (x: number) => void
}

export default function MissionsList({change, setChange}: Prop) {

    const baseUrl = 'https://reactexambackend.onrender.com/missions/8642178/'

    const [missions, setMission] = useState<IMission[]>([])

    useEffect(() => {
        const getMissions = async (): Promise<void> => {
            try {
                const result = await fetch(baseUrl)
                const data = await result.json()
                setMission(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        getMissions()
    },[change])

  return (
    <div className='list'>
        {!missions.length && <h3>No Mission yet</h3>}
        {missions.map(m => <Mission mission={m} change={change} setChange={setChange} />)}
    </div>  
  )
}

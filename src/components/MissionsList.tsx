import { useEffect, useState } from "react"
import IMission from "../models/mission.interface"
import Mission from "./Mission"

export default function MissionsList() {

    const baseUrl = 'https://reactexambackend.onrender.com/missions/8642178/'

    const [missions, setMission] = useState<IMission[]>([])

    useEffect(() => {
        const getMissions = async (): Promise<void> => {
            try {
                const result = await fetch(baseUrl)
                const data = await result.json()
                setMission(data)
            } catch (err) {
                console.log(err)
            }
        }
        getMissions()
    },[])

  return (
    <div className='list'>
        {!missions.length && <h3>No Mission yet</h3>}
        {missions.map(m => <Mission mission={m}/>)}
    </div>  
  )
}

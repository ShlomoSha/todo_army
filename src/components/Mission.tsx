import IMission from "../models/mission.interface"

interface Prop {
    mission: IMission
    change: number
    setChange: (x: number) => void
}
export default function Mission({mission, change, setChange}: Prop) {
    const delMission = async(id: string | undefined): Promise<void> => {
        console.log(id)
        try {
            if (id == null || id == undefined) {
                console.log('invalid id')    
                return
            }
            await fetch(`https://reactexambackend.onrender.com/missions/8642178/${id}`, { 
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mission)
            })
            setChange(change + 1)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        <div>
            <p>{mission.name}</p>
            <p>{mission.status}</p>
            <p>{mission.priority}</p>
            <p>{mission.description}</p>
        </div>
        <div>
            <button onClick={() => delMission(mission._id)}>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}

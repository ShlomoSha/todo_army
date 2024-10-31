import IMission from "../models/mission.interface"

interface Prop {
    mission: IMission
}
export default function Mission({mission}: Prop) {
    const delMission = async(id: string | undefined): Promise<void> => {
        try {
            if (id == null || id == undefined) {
                console.log('invalid id')    
                return
            }
            await fetch(`https://reactexambackend.onrender.com/missions/8642178/${id}`)
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
            <button onClick={() => delMission(mission.id)}>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}

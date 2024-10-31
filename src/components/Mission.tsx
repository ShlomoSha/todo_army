import IMission from "../models/mission.interface"

interface Prop {
    mission: IMission
}
export default function Mission({mission}: Prop) {
  return (
    <div>
        <div>
            <p>{mission.name}</p>
            <p>{mission.status}</p>
            <p>{mission.priority}</p>
            <p>{mission.description}</p>
        </div>
        <div>
            <button>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}

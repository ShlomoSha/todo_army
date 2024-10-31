import STATUS_MISSION from "./STATUS.enum"

export default interface IMission {
    name: string
    status: STATUS_MISSION
    priority: string
    description: string
}
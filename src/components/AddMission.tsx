import { FormEvent, useRef, useState } from 'react'
import IMission from '../models/mission.interface'

interface Prop {
    change: number
    setChange: (x: number) => void
}

export default function AddMission({change, setChange}: Prop) {

    const baseUrl = 'https://reactexambackend.onrender.com/missions/8642178/'

    const nameInpRef = useRef<HTMLInputElement>(null)
    const statusInpRef = useRef<HTMLInputElement>(null)
    const priorityInpRef = useRef<HTMLInputElement>(null)
    const descriptionInpRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLHeadingElement>(null) 
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
    }

    const postMission = async (mission: IMission): Promise<any> => {
        try {
            const res = await fetch(baseUrl, { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mission)
            })
        } catch (err) {
            console.log(err)
        } 
    }

    const creatMission = () => {
        const newMission: IMission = {
            name: nameInpRef.current?.value,
            status: statusInpRef.current?.value,
            priority: priorityInpRef.current?.value,
            description: descriptionInpRef.current?.value
        }
        console.log(newMission)
        for (let key in newMission) {
            if (newMission[key] == ''){
                messageRef.current!.textContent = 'You missing something in your mission'
                return   
            }
        }
        try {
            postMission(newMission)
            setChange(change + 1)
            messageRef.current!.textContent = 'create success'            
        } catch (err) {
            return
        }
    }

  return (
    <div>
        <h1>Military Operations Dashboard</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameInpRef} placeholder='mission name'/>
            <input type="text" ref={statusInpRef} placeholder='status'/>
            <input type="text" ref={priorityInpRef} placeholder='priority'/>
            <input type="text" ref={descriptionInpRef} placeholder='description'/>
            <button type='submit' onClick={creatMission}>Add Mission</button>
            <h2 ref={messageRef}></h2>
        </form>
    </div>
  )
}

import { useState, useEffect } from "react"

export default function SearchTodos({ todos, setTodos }) {
    let [valueForm, setValueForm] = useState('')

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()

                setTodos(
                    [...todos,
                    {
                        todo: valueForm,
                        completed: false
                    }]
                )

            }}>
                <input type="text" onChange={(e) => {
                    setValueForm(e.target.value)
                }} />
            </form>
        </>
    )
}
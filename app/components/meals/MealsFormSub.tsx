'use client'

import { useFormStatus } from "react-dom"

export default function MealsSubmit() {
    const {pending} = useFormStatus()

    return(
        <button>
            {pending ? "Submitting..." : "Share meal"}
        </button>
    )
}
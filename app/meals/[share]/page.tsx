'use client'

import { useParams } from "next/navigation"

export default function ShareMeal(){
    const {share} = useParams();

    return (
        <>
            <div>
                <h1>{share}</h1>
            </div>
        </>
    )
}
import React from 'react'
import { useParams } from 'react-router';

export default function Project() {
    const params = useParams()
    return (
        <div>
        <h1>page for {params.project}</h1>
        </div>
    )
}

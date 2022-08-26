import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BackToHome = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])
}

export default BackToHome
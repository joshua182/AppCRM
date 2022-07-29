import React from 'react'

const Alerta = ({ children }) => {
    return (
        <div className="text-center my-4 text-white font-bold p-3 uppercase bg-red-600">
            {children}
        </div>
    )
}

export default Alerta
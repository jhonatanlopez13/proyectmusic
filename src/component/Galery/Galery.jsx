import React from 'react'
import './style.css'

const Galery = () => {
    return (
        <>
            <div className={"container"}>
                <h1>galeria </h1>
                {/* panel izquierdo para la galeria de imagenes */}
                <div className={"panelleft"}>
        
                </div>
                {/* panel derecho para los eventos  */}
                <div className={"panelrght"}>
                    <h3>eventos</h3>
                    <button>primer evento</button>
                    <button>primer evento</button>
                    <button>primer evento</button>
                </div>
            </div>
        
        </>
    )
}

export default Galery
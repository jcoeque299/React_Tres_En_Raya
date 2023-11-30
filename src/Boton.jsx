import { useState } from "react"

function Boton() {
    let [valor, setValor] = useState("")
    const cambiarBoton = () => {
        setValor("X")
    }
    return (
        <button onClick={cambiarBoton}>{valor}</button>
    )
}

export default Boton
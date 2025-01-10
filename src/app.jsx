import { useState } from "react";
import FooterJavi from "./componentes/footer"
import Tarea from "./componentes/tarea"

const App = () => {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Aprender React' },
        { id: 2, texto: 'Hacer la compra' },
        { id: 3, texto: 'Llamar a mamá' }
    ]);

    return (
        <>
            <h1>Lista de Tareas</h1>
            <ul>
                {tareas.map(tarea => (
                    <Tarea 
                        key={tarea.id} 
                        tarea={tarea} 
                    />
                ))}
            </ul>
            <FooterJavi />
        </>
    )
}

export default App
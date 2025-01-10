import { useState, useEffect } from "react";
import FooterJavi from "./componentes/footer";
import Tarea from "./componentes/tarea";
import './app.css';

const App = () => {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'APRENDER REACT', completado: false },
        { id: 2, texto: 'HACER LA COMPRA PENDIENTE', completado: true },
        { id: 3, texto: 'LLAMAR A MAMÁ', completado: false }
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');

    const toggleCompletado = (id) => {
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completado: !tarea.completado };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    const agregarTarea = () => {
        if (nuevaTareaTexto.trim()) {
            setTareas([...tareas, { id: tareas.length + 1, texto: nuevaTareaTexto.toUpperCase(), completado: false }]);
            setNuevaTareaTexto('');
            setModalVisible(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        if (modalVisible) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalVisible]);

    const tareasCompletadas = tareas.filter(tarea => tarea.completado);

    return (
        <>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas
                    .filter(tarea => !tarea.completado)
                    .map(tarea => (
                        <Tarea 
                            key={tarea.id} 
                            tarea={tarea} 
                            toggleCompletado={toggleCompletado}
                        />
                    ))}
            </ul>
            {tareasCompletadas.length > 0 && (
                <>
                    <h2>Tareas Completadas</h2>
                    <ul>
                        {tareasCompletadas.map(tarea => (
                            <Tarea 
                                key={tarea.id} 
                                tarea={tarea} 
                                toggleCompletado={toggleCompletado}
                            />
                        ))}
                    </ul>
                </>
            )}
            <div className="buttons">
                <button className="añadirTarea" onClick={() => setModalVisible(true)}>Añadir Tarea</button>
                <button className="borrarTarea" onClick={() => setTareas([])}>Borrar todas las tareas</button>
            </div>
            {modalVisible && (
                <div className="modal" onKeyDown={handleKeyDown} tabIndex="0">
                    <div className="modal-content">
                        <h3>Nueva Tarea</h3>
                        <input 
                            type="text" 
                            value={nuevaTareaTexto} 
                            onChange={(e) => setNuevaTareaTexto(e.target.value)} 
                            onKeyPress={handleKeyPress}
                            placeholder="Descripción de la tarea" 
                        />
                        <button onClick={agregarTarea}>Agregar</button>
                        <button onClick={() => setModalVisible(false)}>Cancelar</button>
                    </div>
                </div>
            )}
            <FooterJavi />
        </>
    );
};

export default App;
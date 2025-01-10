# Lista de Tareas con React

## Resumen
Este proyecto es una aplicación sencilla de lista de tareas construida con React. Permite a los usuarios crear, eliminar y marcar tareas como completadas. La aplicación aprovecha los hooks de React como `useState` y `useEffect` para administrar el estado y manejar efectos secundarios.

### Objetivos
* Practicar conceptos básicos de React
* Desarrollar una aplicación funcional de lista de tareas
* Explorar la persistencia de datos usando LocalStorage

## Características
* **Creación de tareas:** Agrega nuevas tareas a la lista
* **Eliminación de tareas:** Elimina tareas de la lista
* **Marcado de tareas completadas:** Marca tareas como completadas
* **Persistencia:** Almacena tareas en el LocalStorage del navegador para conservar los datos

## Tecnologías utilizadas
* **React:** Librería de JavaScript para construir interfaces de usuario
* **useState:** Hook para manejar el estado del componente
* **useEffect:** Hook para realizar efectos secundarios
* **CSS:** Estilos para la aplicación

### Estructura del Proyecto
todo-list-react\
├── public\
├── src\
│   ├── components\
│   │   ├── TodoApp.js\
│   │   ├── TodoItem.js\
│   ├── App.js\
│   ├── index.js\
│   ├── style.css\
├── package.json\
├── README.md\


### Primeros pasos
1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Javieeer/toDoList-react]

2. **Instalar dependencias:**
    ```bash
    npm install
    ```

2. **Iniciar el servidor de desarrollo:**
    ```bash
    import React from 'react';
    
    const TodoItem = ({ task, onDelete, onToggle }) => {
    return (
        <li>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
    };

    export default TodoItem;
    ```

### Retos y soluciones

Persistencia de datos: Resuelto usando LocalStorage para almacenar los datos de las tareas.
Manejo de estado: Se utilizó useState para administrar la lista de tareas.
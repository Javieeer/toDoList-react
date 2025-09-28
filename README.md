# Cipa Task Manager

Cipa Task Manager es una aplicación React para gestionar tareas de equipo, con integración a Firebase para autenticación y almacenamiento en la nube. Permite listar tareas pendientes y completadas, asignar responsables, agregar enlaces y fechas de entrega, y gestionar el acceso seguro mediante Google Auth.

## Features

- **Listado de tareas**: Visualiza tareas pendientes y completadas.
- **Asignación de responsables**: Cada tarea tiene responsable, enlace y fecha de entrega.
- **Autenticación con Google**: Solo usuarios autenticados pueden acceder y modificar tareas.
- **Persistencia en Firebase Firestore**: Las tareas se guardan en la nube.
- **Responsive**: Interfaz adaptada para escritorio y móvil.
- **Gestión de tareas**: Añadir, marcar como completada, eliminar individualmente o todas.

## Configuración y uso

### Prerrequisitos

- Node.js (v14 o superior)
- npm
- Cuenta en Firebase

### Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/Javieeer/toDoList-react.git
   ```

2. Accede al directorio:
   ```
   cd toDoList-react
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

### Configuración de Firebase

1. Crea un proyecto en Firebase Console.
2. Habilita Firestore Database en modo de prueba (puedes ajustar reglas luego).
3. Habilita Authentication y activa el método de acceso con Google.
4. Ve a Authentication > Configuración y agrega tu dominio (ejemplo: javieeer.github.io si usas GitHub Pages) en "Dominios autorizados".
5. Copia la configuración de tu app web de Firebase.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con tu configuración de Firebase:
```
VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=TU_MEASUREMENT_ID
```
Agrega `.env` a tu `.gitignore` para no subir tus credenciales.

### Reglas seguras para Firestore

En producción, usa reglas como estas para proteger tus datos:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Ejecución

Para iniciar el servidor de desarrollo:

```
npm run dev
```
La app estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

Para construir la app para producción:
```
npm run build
```

## Estructura de carpetas

```
toDoList-react
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── footer.jsx
│   │   ├── socialCircle.jsx
│   │   └── tarea.jsx
│   ├── data
│   │   └── task.json
│   ├── img
│   │   └── todo.svg
│   ├── pages
│   ├── styles
│   │   ├── app.css
│   │   ├── footer.css
│   │   ├── socialCircle.css
│   │   └── tarea.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config
```

## Contribuir

Si quieres aportar, haz un fork y envía tu pull request.



## Licencia

MIT License. Consulta el archivo LICENSE para más detalles.

## Notas adicionales
- Responsive: El layout cambia automáticamente entre horizontal y vertical según el tamaño de pantalla.
- Autenticación: Si no has iniciado sesión, solo verás el botón de "Iniciar sesión con Google".
- Seguridad: No subas tu archivo .env ni tus credenciales a repositorios públicos.
- Despliegue: Si usas GitHub Pages, recuerda agregar tu dominio en Firebase Authentication.
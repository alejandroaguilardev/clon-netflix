## Inicialización del proyecto

npx crate-react-app neflix --template-redux

### Proceso de Limpieza
    elimina archivos,logos y div inicial.

### Librerias utilizadas
-styled-components
-react-uuid
-axios
-react-router-dom
-firebase
-@material-ui/core

### App Js- layout inicial
- Creamos las rutas
- Renderizamos Login o el resto del app condicionado a la existencia de un usuario 

## Estilos
-Utilizamos useStyles para crear una infraestructura que nos permita asigar estilos a cada uno de los componentes.

### Crear carpetas de componentes :  Pages
- Creamos la infraestructura básica de los componentes que representan una página: Home, Login, Profile, SignUp

### Estilos en los componentes de Pages
-Pratrón para añadir la infraestructura de estilos a todos los components página

### Crear la carpeta componentes con componentes secundarios
 Creamos la infraestructura básica del resto de los componentes: Banner, Header, Plans, Row.

### Estilos en los componentes de componentes secundarios
-Pratrón para añadir la infraestructura de estilos a todos lso components 


### comenzados trabajando el header
-importamos el logo
- Añadimos Appbar y styles
- Creas eventListener para scroll y removemos ese Event

### comenzados trabajando el header
-importamos el logo
- Añadimos Appbar y styles
- Creas eventListener para scroll y removemos ese Event


### comenzados trabajando el Banner
-importamos el banner
- Creamos las tipografias
- Y Añadimos estilos banner

### comenzados Login
- Se crea el botón con styled components igual que el input que ha diferencia se estiliza el componente que ya era de material

## Componente Profile
- Se realizo la distribución
- y se realizo los <Plans>Texto</Plans>
const Plans = (({children}) => { return children});
-props styled components

## Componente SignUp
-Se maqueto la interfaz y se condiciono

### Proceso de Registro y Login
- Conectado a Firebase
- inicializado object Auth
- envio de formulario

### Redux
- Habilitamos el userSlice para manejar el usuarioen el componente que queramos

### Persistencia
- useEffect 
- se uso Navegate para redireccionar la página.

### Requests
- Se crean todos los endpoints
- Se construye componente Rows

## requests Api

consumimos el api para los row y banner
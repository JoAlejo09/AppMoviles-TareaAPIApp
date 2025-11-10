# 🌦️ App Móvil de Consumo de APIs — Ionic + Angular

Este proyecto es una aplicación móvil híbrida desarrollada con **Ionic Angular**, que permite **consultar información climática y geográfica en tiempo real** utilizando APIs públicas y gratuitas.

LINK DESPLIEGUE:  https://appmovilesappapis.web.app

---

## 🚀 Características principales

- ✅ Interfaz amigable construida con **Ionic Framework**
- 🌍 Consumo de APIs **RESTful** externas
- 📡 Uso de servicios (`services`) para la comunicación con las APIs
- 📱 Compatible con Android, iOS y navegador web (modo PWA)
- 🧩 Arquitectura modular y fácil de extender

---

## 🧠 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| **Ionic 7** | Framework para desarrollo móvil multiplataforma |
| **Angular 17** | Framework front-end para la lógica y componentes |
| **TypeScript** | Lenguaje base del proyecto |
| **RxJS / HttpClient** | Para el consumo de APIs REST |
| **HTML + SCSS (Ionic Components)** | Diseño visual y responsive |

---

## 🌐 APIs utilizadas

### 1️⃣ **Open-Meteo API**
- **URL Base:** `https://api.open-meteo.com/v1/forecast`
- **Descripción:** Proporciona datos meteorológicos actuales y predicciones por coordenadas (latitud y longitud).
- **Parámetros utilizados:**
  - `latitude`
  - `longitude`
  - `hourly`: variables como `temperature_2m`, `relative_humidity_2m`, `precipitation_sum`
  - `daily`: variables como `temperature_2m_max`, `temperature_2m_min`
  - `timezone=auto`

**Ejemplo de solicitud:**
```
https://api.open-meteo.com/v1/forecast?latitude=-0.1807&longitude=-78.4678&hourly=temperature_2m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto
```

**Propósito:**
Permite al usuario ingresar coordenadas y seleccionar qué variables meteorológicas desea consultar.  
Los resultados se muestran en pantalla de forma legible, evitando mostrar el JSON completo.

---

### 2️⃣ **GeoDB Cities API**
- **URL Base:** `https://geodb-free-service.wirefreethought.com/v1/geo/cities`
- **Descripción:** Devuelve información de ciudades del mundo, con posibilidad de filtrar por nombre o prefijo.
- **Parámetros utilizados:**
  - `namePrefix`: parte del nombre de la ciudad a buscar
  - `limit`: número máximo de resultados (ej. `limit=5`)

**Ejemplo de solicitud:**
```
https://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&namePrefix=Quito
```

**Propósito:**
Permite al usuario buscar ciudades por nombre y visualizar información básica como:
- Nombre de la ciudad
- País
- Latitud / Longitud
- Región / Código ISO

---

## 📁 Estructura del proyecto

```
src/
 ├── app/
 │   ├── services/
 │   │   ├── clima.service.ts       # Servicio para consumir Open-Meteo
 │   │   └── ciudades.service.ts    # Servicio para consumir GeoDB Cities
 │   ├── pages/
 │   │   ├── clima/
 │   │   │   ├── clima.page.ts      # Lógica del componente de clima
 │   │   │   ├── clima.page.html    # Vista con formularios e IonCards
 │   │   │   └── clima.page.scss    # Estilos personalizados
 │   │   └── ciudades/
 │   │       ├── ciudades.page.ts   # Lógica para buscar ciudades
 │   │       ├── ciudades.page.html # Vista de resultados
 │   │       └── ciudades.page.scss
 │   ├── app.module.ts              # Configuración principal de módulos
 │   └── app-routing.module.ts      # Rutas de la aplicación
 ├── environments/
 │   ├── environment.ts             # Variables de entorno (dev)
 │   └── environment.prod.ts        # Variables de entorno (producción)
 └── index.html / main.ts / styles.scss
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/AppApisIonic.git
cd AppApisIonic
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en navegador
```bash
ionic serve
```

### 4️⃣ Compilar para Android (opcional)
```bash
ionic capacitor build android
```

---

## 🧩 Componentes destacados

### 📄 Página: Clima (`clima.page.html`)
- Inputs para ingresar latitud y longitud
- Checkboxes para elegir variables diarias u horarias
- Botón “Obtener Datos” que invoca el servicio de Open-Meteo
- Resultados mostrados en formato legible con `<ion-card>`

### 📄 Página: Ciudades (`ciudades.page.html`)
- Input para ingresar el nombre de una ciudad
- Botón “Buscar” que llama al servicio de GeoDB
- Resultados mostrados como una lista con `<ion-list>` y `<ion-item>`

---

## 💡 Buenas prácticas aplicadas

- Uso de **`HttpClient`** para peticiones REST
- Inyección de dependencias vía **`constructor(private service: ClimaService)`**
- Separación de lógica y presentación (servicios ↔ páginas)
- Manejo de errores con **try/catch** y alertas Ionic
- Renderizado condicional con `*ngIf` y `*ngFor`

---

## 🧪 Próximas mejoras

- Integrar almacenamiento local (Ionic Storage) para guardar búsquedas recientes
- Mostrar gráficas del clima con **Chart.js o Recharts**
- Incorporar geolocalización automática del usuario
- Añadir tema oscuro / claro dinámico

---

## 👨‍💻 Autor

**José Pila**  
Estudiante de Desarrollo de Software  
📍 Ecuador  
📅 Proyecto académico — 2025

---

## 📜 Licencia

Este proyecto es de uso educativo y libre bajo la licencia **MIT**.

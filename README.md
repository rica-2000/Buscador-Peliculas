# Buscador de Películas

Una aplicación web intuitiva y rápida construida con **React** y **Vite** que permite a los usuarios buscar y explorar películas utilizando la potente API de **The Movie Database (TMDB)**.

## ✨ Características Principaless

- 🎬 **Búsqueda de Películas**: Encuentra cualquier película ingresando su título.
- 🖼️ **Visualización de Posters**: Muestra las carátulas oficiales de las películas en los resultados.
- ⚡ **Rendimiento Optimizado**: Gracias a Vite, la aplicación carga y responde instantáneamente.
- 🎨 **Interfaz Limpia**: Diseño sencillo y fácil de usar.

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario.
- [Vite](https://vitejs.dev/) - Herramienta de construcción frontend de próxima generación.
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) - Estilos personalizados.
- [TMDB API](https://www.themoviedb.org/documentation/api) - Fuente de datos para películas e imágenes.

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio**

    ```bash
    git clone https://github.com/rica-2000/Buscador-Peliculas.git
    cd Buscador-Peliculas
    ```

2.  **Instalar dependencias**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key de TMDB:

    ```env
    VITE_API_KEY=tu_api_key_aqui
    ```

    > **Nota:** Debes registrarte en [The Movie Database](https://www.themoviedb.org/) para obtener una API Key gratuita.

4.  **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 📦 Despliegue

Para desplegar esta aplicación en producción (por ejemplo, en Netlify o Vercel):

1.  Asegúrate de agregar la variable de entorno `VITE_API_KEY` en la configuración de la plataforma de hosting.
2.  El comando de construcción es `npm run build`.

---

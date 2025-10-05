# Sintaxis de Markdown

Markdown es un lenguaje de marcado **ligero y legible** que permite estructurar texto con formato como títulos, listas, enlaces, imágenes, código, etc.

### En **Visual Studio Code**:

1. Abrí el archivo `.md`.
2. Presioná:  
   **`Ctrl + Shift + V`**  
   👉 Esto abre la **vista previa** del Markdown renderizado.
3. Alternativamente: hacé clic derecho sobre el archivo y elegí:  
   **"Open Preview"** o **"Abrir vista previa"**.
---

## ✍️ Sintaxis básica


### Titulos
---
    # Título nivel 1 (contiene linea debajo)
    ## Título nivel 2 (contiene linea debajo)
    ### Título nivel 3
    #### Título nivel 4
    ##### Título nivel 5
    ###### Título nivel 6


### Formatos
---
Este es un texto con **formato en negrita**

Este es un texto con *formato en cursiva*

Este es un texto con ***formato en negrita y cursiva***

Se puede utilizar el "_" ó "*"

<u>Hola este es un texto subrayado.</u>
>Se utiliza para representar una cita dentro de un bloque de texto breve.


### Lista de Tareas.
---
- [X] Tarea 1 Completada.
- [X] Tarea 2 Completada.
- [X] Tarea 3 Completada.
- [ ] Tarea 4 incompleta.
- [ ] Tarea 5 incompleta.


### Tablas
---
| PETICION |                   UTL                   |                  DESCRIPCION                  |
| :------: | :-------------------------------------: | :-------------------------------------------: |
|   GET    |       [/](http://localhost:9000)        | Obtiene la pagina principal de la aplicación. |
|   GET    |   [/{id}](http://localhost:9000/1234)   |            Trae una fruta por id.             |
|   POST   | [/frutas](http://localhost:9000/frutas) |                Crea una fruta.                |


### Agregar Codigo
---
```javascript
const resultado = frutas.filter(frutas => fruta.stock > 50);
```
    Se puede agregar codigo usando las comillas del string template o dejando 4 espacios(tab).

    Tambien agregando el nombre de un lñenguaje despeus de las commillas se colorea el bloque de codigo.

### Hipervinculos
---

#### Hipervinculo de Imagenes
![Imagen de Fruta](fruta.jpeg "Fruta de mango")

Hay que anteponer el ! luego al descripcion entre [ ] y luego la ruta en el ( ).  Dentro de las ( ) y entre comillas podemos poner una descripcion.

#### Hipervinculo Internos
- [Ir a Inicio](#sintaxis-de-markdown)
- Se debe poner almuadilla # y el titulo con guiones medios. Ejemplo: #titulo-principal

### Graficos
---
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
---
::: mermaid
stateDiagram-v2
    state if_state <<choice>>
    [*] --> URLParams
    URLParams --> if_state
    if_state --> False: if { !mongDB }
    if_state --> True: if { mongDB.length >= 0 }
:::

import { useState } from "react"

const libros = []

const BooksApp = () => {
   const [books, setBooks] = useState(libros)

   return(
      <>
         <h1>Books App</h1>
      </>//Esta regresando un componente la etiqueta vacía
   )
}

export default BooksApp
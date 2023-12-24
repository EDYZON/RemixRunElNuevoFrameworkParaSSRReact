export default function App(){
    return(
        <document>
            <h1>Hola Mundo</h1>
        </document>
    )
}

function document({children}){
  return(
    <html lang="es">
       <head>
        <title>guitarla remix</title>
       </head>
       <body>
        {children}
       </body>
    </html>
  )
}
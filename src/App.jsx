import './App.css'
import React,{useState} from 'react'

import Peso from './componentes/formPeso.jsx'
import Altura from './componentes/formAltura.jsx'
import Resultado from './componentes/Resultado.jsx'
import Tabela from './componentes/TabelaIMC.jsx'

  // const TabelaIMC=()=>{
  //   return(
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <th>Classificação</th>
  //           <th>IMC</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr> {/*linha da tabela*/}
  //           <td>Abaixo do pesso</td> {/*Coluna da linha da tabela*/}
  //           <td>Abaixo de 18,5</td>
  //         </tr>
  //         <tr>
  //           <td>Peso Normal</td>
  //           <td>Entre 18,5 e 24,9</td>
  //         </tr>
  //         <tr>
  //           <td>Sobrepeso</td>
  //           <td>Entre 25 e 29,9</td>
  //         </tr>
  //         <tr>
  //           <td>Obesidad Grau I</td>
  //           <td>Entre 30 e 34,9</td>
  //         </tr>
  //         <tr>
  //           <td>Obesidad Grau II</td>
  //           <td>Entre 35 e 39,9</td>
  //         </tr>
  //         <tr>
  //           <td>Obesidad Grau III ou Morbida</td>
  //           <td>Maior que 40</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   )
  // }

  // Configurando o input peso e altura com o useState nas funções
  // const formPeso=(p,sp)=>{
  //   return(
  //     <div>
  //       <label>Peso:</label>
  //       <input type="text" value={p} onChange={(e)=>sp(e.target.value)}/>
  //     </div>
  //   )
  // }
  // const formAltura=(a,sa)=>{
  //   return(
  //     <div>
  //       <label>Altura:</label>
  //       <input type="text" value={a} onChange={(e)=>sa(e.target.value)}/>
  //     </div>
  //   )
  // }
  // const fCalcular=(p,a,sr)=>{
  //   const calc=()=>{
  //     sr(p/(a*a))
  //   }  
  //   return(
  //     <div>
  //       <button onClick={calc}>Calcular</button>
  //     </div>
  //   )
  // }

  // const fResultado=(r)=>{
  //   return(
  //     <div>
  //       <p>Resultado: {r.toFixed(2)}</p>
  //     </div>
  //   )  
  // }
export default function App() {
   const [peso,setPeso]=useState(0)
   const [altura,setAltura]=useState(0)
   const [resultado,setResultado]=useState(0)
  
  return (
    
    <main>
      <section>
        <Peso
          p={peso}
          sP={setPeso}
        />
        <Altura
          al={altura}
          sAl={setAltura}
        />
        <Resultado
          p={peso}  
          al={altura}
          setRes={setResultado}
          res={resultado}
        />
      </section>
        <Tabela/>
      {/*formPeso(peso,setPeso)}
      {formAltura(altura,setAltura)}
      {fCalcular(peso,altura,setResultado)}
      {fResultado(resultado)}
      {TabelaIMC()*/}
    </main>
  )
}

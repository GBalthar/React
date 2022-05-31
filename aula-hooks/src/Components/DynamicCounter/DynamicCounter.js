import React, {useState, useEffect} from 'react'
import '../DynamicCounter/DynamicCounter.css'

export default function DynamicCounter() {

//Código do Effect Hook
useEffect(()=> {
    alert('Bem-Vind@')
},[]) //O colchete é uma condição para disparar o efeito. Caso fique vazio, nenhuma condição é necessária.
//Código do Effect Hook

//Código do Contador Dinâmico
  const [value, setValue] = useState(0) //setNomeDaFunção é uma boa prática para esse tipo de chamada

  function down (){
      if(value > 0){
        setValue(value-1)
      }
  }

  function up(){
      setValue(value+1)
  }

  return (
    <div className='wrap'>
        <button className='botaomenos' onClick={down}>
            -
        </button>

        <h3>{value}</h3>

        <button className='botaomais' onClick={up}>
            +
        </button>
    </div>
  )
}
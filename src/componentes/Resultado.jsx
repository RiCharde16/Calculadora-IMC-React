import React from 'react'


  // const calc=(p,al,sr)=>{
  //   sr(p/(al*al))
  // }
export default class Resultado extends React.Component{

  constructor(props){
    super(props)
  }
  calcular(r){
    // console.log('Teste')
    r(this.props.p/ (this.props.al*this.props.al))
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.calcular(this.props.setRes)}>Calcular</button>
        <h3>Seu IMC é: <span id="imc">{this.props.res.toFixed(2)}</span></h3>
      </div>
    )
  }
}
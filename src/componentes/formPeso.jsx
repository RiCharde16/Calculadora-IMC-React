import React from 'react'

export default class Formpeso extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <label>Peso:</label>
        <input type="num" value={this.props.p} onChange={(e)=>this.props.sP(e.target.value)}/>
       {/*<p>Teste props: {this.props.teste}</p>*/}
      </div>
    )
  }
}
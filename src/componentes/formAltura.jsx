import React from 'react'

export default class FormAltura extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <label>Altura: </label>
        <input type="num" value={this.props.al} onChange={(e)=>this.props.sAl(e.target.value)}/>
      </div>
    )
  }
}
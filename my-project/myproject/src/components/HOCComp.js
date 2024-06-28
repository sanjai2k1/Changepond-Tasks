import React, { Component } from 'react'

export const HOCComp = (WrapperComp) => {


    class Hoc extends Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          increment=()=>{
            this.setState((prev)=>({count:prev.count+1}))
          }
    
          render(){

            return <WrapperComp count={this.state.count} increment={this.increment}></WrapperComp>
        }
        }
    

  return Hoc
}


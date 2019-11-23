import React, { Component } from 'react'
import VillaD from './villaDetails'

import axios from 'axios'

export default class App extends Component {

  state = {
    vData: null,
    name:null,
    des:null
  }

  // componentDidMount() {
  //   axios.get("http://localhost:4000/villa")
  //     .then(res => {
  //       this.setState({ vData: res.data })
  //       // console.log("inside app comp")
  //       // console.log(res)
  //     })
  //     .catch()
  // }


  postTheDate(postedData){
    let params ={
      name:this.state.name,
      des:this.state.des
    }
    axios.post("http://localhost:4000/villa/create",params)

  }

  inputChange1(e){
    console.log(e.target.value)
    this.setState({name:e.target.value})
  }

  inputChange2(e){
    console.log(e.target.value)
    this.setState({des:e.target.value})
  }


  render() {
    // console.log("vData: "+this.state.vData)
    return (
      <div>
        <h1>App frontend</h1>
        {/* {this.state.vData != null && */}
          {/* //  this.state.vData.map(item=>{ return  */}
          {/* // <VillaD />} */}

         <form method="">
          <input onChange={this.inputChange1.bind(this)} name="name" />
          <input onChange={this.inputChange2.bind(this)} name="description" />

          <input onClick={this.postTheDate.bind(this)} type="submit" value="submit" />
        </form> 

      {/* // })  */}


      </div>
    )
  }
}

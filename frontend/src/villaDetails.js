import React, { Component } from 'react'
// import ReactMapGL from 'react-map-gl'
// import { Navbar, Nav } from 'react-bootstrap'

export default class villaDetails extends Component {

    // state ={viewport:{
    //     width:400,
    //     height:400,
    //     latitude:21.6394345,
    //     longitude:39.1322110,
    //     zoom:8
    // }}

    render() {
        console.log("villaDetails")
        
        return (
            <div>
                <h1>VillaDetails</h1>
                {/* <ReactMapGL {...this.state.viewport}
                onViewportChange={(viewport)=>this.setState({viewport})}
                /> */}
            </div>
        )
    }
}

import React, {Component} from "react"
import "./CarArmorState.css"
import axios from 'axios'
import CarArmorDiagram from "./carArmorDiagram/CarArmorDiagram";


export default class CarArmorState extends Component {
	
    constructor(props) {
        super(props);
        () => this.fetchDamages();
        this.state = {
            carbodyState: 0,
            imagesDamagedSideView: "",
            imagesDamagedTopView: ""
        };
       
    }

            /*{
                imageDamageUrl: ''
                damaged0pct:this.loadImages(0),
                damaged20pct:this.loadImages(20)
            }*/

    componentDidMount(){
        console.log("COMPONENT DID MOUNT!!!!")
       // this.fetchDamages();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.sessionId !== this.props.sessionId) {
            console.log("session id:", this.props.sessionId)
            this.fetchDamages();
            //this.loadImages();
        }
    }

    fetchDamages = () => {
        axios.get("/car/" + this.props.sessionId)
            .then((results) => {
                const damageness = (Math.trunc(results.data.carbodyState / 20) * 20);
                const imageDamagedSideUrl = require("../../../../images/batmobileDamaged/batmobileDamagedSide" + damageness + "prct.png");
                const imageDamagedTopUrl = require("../../../../images/batmobileDamaged/batmobileDamagedTop" + damageness + "prct.png");
                //console.log("image :", imageDamagedUrl);
                this.setState({
                    carbodyState: results.data.carbodyState,
                    imagesDamagedSideView: imageDamagedSideUrl,
                    imagesDamagedTopView: imageDamagedTopUrl
                })
                console.log("YO", this.state)
                /*this.setState({
                    carbodyState: results.data.carbodyState
                }, */
                //this.loadImages(results.data.carbodyState)
            })
            .catch(error => console.log(error))
    }

    /*loadImages = (carbodyState) => {
        const imageDamagedUrl = require("../../../../images/batmobileDamaged/batmobileDamagedSide" + (Math.trunc(carbodyState / 20) * 20) + "pct.jpg");
        console.log("image :", imageDamagedUrl);
        this.setState({
            carbodyState: carbodyState,
            imagesDamagedSideView: imageDamagedUrl
        }, console.log("hey le state !!!", this.state)) 
    }*/

    render() {
        console.log("debut du render", this.state.imagesDamagedSideView);
        return (
            <div className="car-armor-state container-fluid row p-2">
                <CarArmorDiagram imagesUrl={this.state.imagesDamagedSideView} />
                <CarArmorDiagram imagesUrl={this.state.imagesDamagedTopView} />

            
            </div>
        );
    }
}
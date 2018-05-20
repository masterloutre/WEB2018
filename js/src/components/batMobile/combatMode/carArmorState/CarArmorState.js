import React, {Component} from "react"
import "./CarArmorState.css"
import axios from 'axios'
import CarArmorDiagram from "./carArmorDiagram/CarArmorDiagram";

export default class CarArmorState extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            carbodyState: 0,
            imagesDamagedSideView: "",
            imagesDamagedTopView: ""
        };
    }

    componentDidMount(){
        this.fetchDamages();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.sessionId !== this.props.sessionId) {
            this.fetchDamages();
        }
    }

    /*
    * En fonction du pourcentage de carbodystate (taux d'endommagement de la batmobile) récupéré de la base de donnée, 
    * on va calculer laquelle des 5 images d'états de la voiture il faut afficher, en arrondissant le pourcentage à la vingtaine la pkulus proche
    * (car les images sont nommés d'après les vingtaines de pourcents de dommage)
    */
    fetchDamages = () => {
        axios.get("/car/" + this.props.sessionId)
            .then((results) => {
                const damageness = (Math.trunc(results.data.carbodyState / 20) * 20);
                const imageDamagedSideUrl = require("../../../../images/batmobileDamaged/batmobileDamagedSide" + damageness + "prct.png");
                const imageDamagedTopUrl = require("../../../../images/batmobileDamaged/batmobileDamagedTop" + damageness + "prct.png");
                this.setState({
                    carbodyState: results.data.carbodyState,
                    imagesDamagedSideView: imageDamagedSideUrl,
                    imagesDamagedTopView: imageDamagedTopUrl
                })
            })
            .catch(error => console.log(error))
    }

    //On passe les url des images correspondant au taux de dégats issu de la BDD aux enfants
    render() {
        return (
            <div className="car-armor-state container-fluid row p-3">
                <CarArmorDiagram imagesUrl={this.state.imagesDamagedSideView} />
                <CarArmorDiagram imagesUrl={this.state.imagesDamagedTopView} />
            </div>
        );
    }
}
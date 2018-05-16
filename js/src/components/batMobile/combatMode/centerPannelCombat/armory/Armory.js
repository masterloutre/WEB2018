import React, {Component} from "react"
import "./Armory.css"
import axios from 'axios'
import Ammunitions from "./ammunition/Ammunition";


export default class Armory extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            sessionId: 0,
            currentWeapon: {
                id: 0,
                ammunition : 100
            },
            weapons :  [{
                id: 0,
                name: "Dummy Weapon",
                maxAmmunition: 100,
                rate: 75,
                currentAmmunition: 75
            }]
        }
        //this.updateWeaponFlag = [];

    };

    componentDidMount(){
        this.fetchWeaponryData()
        this.fetchCurrentWeaponData()
    }

    componentDidUpdate( prevState, prevProps){
        console.log(this.props.sessionId)
        if(prevProps.sessionId !== this.props.sessionId) {
            this.setState({sessionId: this.props.sessionId})
            this.fetchWeaponryData()
            this.fetchCurrentWeaponData()
        }

    }

    fetchWeaponryData = () => {
        axios.get("/weapons/"+ this.props.sessionId)
            .then((results) => {
                    this.setState({
                        weapons: results.data.map( weapon => ({
                            id: weapon.id,
                            name: weapon.name,
                            maxAmmunition: weapon.maxAmmuniton,
                            rate: weapon.rate,
                        }))
                    })

            })
            .catch((error) => console.log(error))
    }

    fetchCurrentWeaponData = () => {
        console.log(this.props.sessionId)
        axios.get("/weapons/"+ this.state.currentWeapon.id + "/user/" + this.props.sessionId)
            .then((results) => {
                console.log(results.data.ammunition)
                if(results.data.ammunition !== undefined) { //à enlever quand les imac1 auront implémenté les bons codes
                    console.log(results)
                    this.setState((prevState, props) => ({
                        currentWeapon: {
                            id: prevState.currentWeapon.id,
                            ammunition: results.data.ammunition
                        }
                    }))
                }})

            .catch((error) => console.log(error))
    }

    updateWeaponBDD = (weaponId) => {
        axios.put("/weapons/"+ weaponId + "/user/" + this.props.sessionId, {
            ammunition : this.state.currentWeapon.ammunition
        })
            .then((results) => console.log(results))
            .catch((error) => console.log(error))
    }

    fireWeapon = (weaponId) => () => {
        if(this.state.weapons[weaponId].rate > 0){
            this.setState((prevState, props) => ({
                currentWeapon : {
                    id: prevState.currentWeapon.id,
                    ammunition: prevState.currentWeapon.ammunition - 1
                }
            }), () => this.updateWeaponBDD(this.state.currentWeapon.id))
        }


    }

    render() {
        console.log(this.state)
        return (
            <div className="armory row align-content-center">
                <div className="col-6 h-50">
                    <div id="weapons-overview">
                        <h3 className={"absolute-top"}>{this.state.weapons[this.state.currentWeapon.id].name}</h3>
                    </div>
                </div>
                <div className="col-6 h-50">
                    <Ammunitions
                        maxAmmunition={this.state.weapons[this.state.currentWeapon.id].maxAmmunition}
                        quantity={this.state.currentWeapon.ammunition}
                        fire={this.fireWeapon(this.state.currentWeapon.id)}
                    />
                </div>

            </div>
        );
    }
}
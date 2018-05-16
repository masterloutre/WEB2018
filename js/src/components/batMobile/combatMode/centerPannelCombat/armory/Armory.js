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
        if(prevProps.sessionId !== this.props.sessionId) {
            console.log(this.props.sessionId)
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
        axios.get("/weapons/"+ this.state.currentWeapon.id + "/user/" + this.props.sessionId)
            .then((results) => {
                    this.setState((prevState, props) => ({
                        currentWeapon: {
                            id: prevState.currentWeapon.id,
                            ammunition: results.data.ammunition
                        }
                    }))
                })
            .catch((error) => console.log("this error is probably due to invalid index and is expected to happen a few times at the beginning of the app, this is normal behaviour"))
    }

    updateCurrentWeaponBDD = () => {
        axios.put("/weapons/"+ this.state.currentWeapon.id + "/user/" + this.props.sessionId, {
            ammunition : this.state.currentWeapon.ammunition
        })
            .then()
            .catch((error) => console.log(error))
    }

    fireCurrentWeapon = () => {
        console.log("weapon fire")
        if(this.state.currentWeapon.ammunition > 0){
            this.setState((prevState, props) => ({
                currentWeapon : {
                    id: prevState.currentWeapon.id,
                    ammunition: prevState.currentWeapon.ammunition - 1
                }
            }), () => this.updateCurrentWeaponBDD())
        }
    }

    rechargeCurrentWeapon = () => {
        this.setState((prevState, props) => ({
            currentWeapon : {
                id: prevState.currentWeapon.id,
                ammunition: prevState.weapons[prevState.currentWeapon.id].maxAmmunition
            }
        }), () => this.updateCurrentWeaponBDD())
    }

    changeCurrentWeapon = (newId) => {
        this.setState({
            currentWeapon : {
                id : newId,
                ammunition : 0
            }
        }, () => this.fetchCurrentWeaponData())
    }

    changeCurrentWeaponNext = () => {
        const newId = this.state.currentWeapon.id + 1
        if(newId < this.state.weapons.length-1){
            this.changeCurrentWeapon(newId)
        } else {
            this.changeCurrentWeapon(0)
        }
    }

    render() {
        return (
            <div className="armory row align-content-center">
                <div className="col-6 h-50">
                    <div id="weapons-overview">
                        <h3 className={"absolute-top"}>{this.state.weapons[this.state.currentWeapon.id].name}</h3>
                        <button onClick={() => this.changeCurrentWeaponNext()}>Next Weapon</button>
                    </div>
                </div>
                <div className="col-6 h-50">
                    <Ammunitions
                        maxAmmunition={this.state.weapons[this.state.currentWeapon.id].maxAmmunition}
                        quantity={this.state.currentWeapon.ammunition}
                        fire={this.fireCurrentWeapon}
                    />
                </div>

            </div>
        );
    }
}
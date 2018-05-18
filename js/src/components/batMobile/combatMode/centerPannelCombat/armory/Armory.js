import React, {Component} from "react"
import "./Armory.css"
import axios from 'axios'
import Ammunitions from "./ammunition/Ammunition";
import Weapons from "./weapons/Weapons";


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
                currentAmmunition: 75,
								url: ''
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
        console.log("he c est l armurerie")
        axios.get("/weapons/"+ this.props.sessionId)
            .then((results) => {
                    console.log(results)
                    if(results.data[0].length !== 0){
                        this.setState({
                            weapons: results.data[0].map( weapon => ({
                                id: weapon.id,
                                name: weapon.name,
                                maxAmmunition: ((weapon.maxAmmuniton !== null)?weapon.maxAmmuniton:10),
                                rate: weapon.rate,
																url: '../../../../images/armory/'+weapon.id+'.jpg'
                            }))
                        })
                    }


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
        //const munitionMax = (this.state.weapons[this.state.currentWeapon.id].maxAmmunition !== null)? this.state.weapons[this.state.currentWeapon.id].maxAmmunition : 10;
        const munitionMax = this.state.weapons[this.state.currentWeapon.id].maxAmmunition
        if(this.state.currentWeapon.ammunition > 0){
            this.setState((prevState, props) => ({
                currentWeapon : {
                    id: prevState.currentWeapon.id,
                    ammunition: prevState.currentWeapon.ammunition - (100/munitionMax)
                }
            }), () => this.updateCurrentWeaponBDD())
        }
    }

    rechargeCurrentWeapon = () => {
        this.setState((prevState, props) => ({
            currentWeapon : {
                id: prevState.currentWeapon.id,
                ammunition: 100
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
            <div className="armory row align-items-center ">
                <div className="col-lg-6 h-0 absolute col-md-6">
                    <div id="weapons-overview">
                        <Weapons
                            currentWeaponId={this.state.currentWeapon.id}
                            weaponList={this.state.weapons.map(weapon => ({id: weapon.id, name: weapon.name, url: weapon.url}))}
                            changeWeapon={this.changeCurrentWeapon}
                        />
                    </div>
                </div>
                <div className="col-8 h-50 offset-4">
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

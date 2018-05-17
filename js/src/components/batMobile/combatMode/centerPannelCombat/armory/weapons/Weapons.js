import React, {Component} from "react"
import "./Weapons.css"
import axios from 'axios'


export default class Weapons extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    renderWeaponList = () => this.props.weaponList.forEach(weapon => this.renderWeaponButton(weapon))


    renderWeaponButton = (weapon) => (
        <li>{weapon.name}</li>
    )

    render() {
        return (
            <div className="weapons container-fluid">
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-8 absolute">
                        <button><h3>Current weapon{this.props.weaponList[this.props.currentWeaponId].name}</h3></button>
                    </div>
                </div>
                <ul className="row absolute-top w-100 h-100">
                    {this.renderWeaponList()}
                </ul>
            </div>
        )
    }


}
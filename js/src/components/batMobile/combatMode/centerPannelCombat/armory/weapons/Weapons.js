import React, {Component} from "react"
import "./Weapons.css"





export default class Weapons extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderWeaponButton = (weapon) => {
        const rotationAngle = weapon.id * 360 / this.props.weaponList.length;
        const skewAngle = 90 - (360 / this.props.weaponList.length);
        return (
            <li
                key={weapon.id.toString()}
                style={{transform: "rotate(" + rotationAngle + "deg) skew(" + skewAngle + "deg)"}}
                onClick={() => {
                    this.props.changeWeapon(weapon.id)
                }}
            >
                {/*
                <span
                    style={{transform: "skew(" + (-skewAngle) + "deg) rotate(" + (-rotationAngle) + "deg)"}}>{weapon.name}
                </span>
                */}
                <img src={require("../../../../../../images/armory/icon-"+ weapon.id + ".svg")}
                     //style={{transform: "skew(" + (-skewAngle) + "deg) rotate(" + (-rotationAngle) + "deg)"}}
                     style={{transform: "skew(" + (-skewAngle) + "deg) rotate(-65deg) scale(0.7)"}}
                />
            </li>
        )
    }


    render() {
        console.log()
        const image = require("../../../../../../images" + this.props.weaponList[this.props.currentWeaponId].imageUrl);

        return (
            <div className="weapons container-fluid">
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-7 absolute">
                        <button
                            style={{
                               backgroundImage: "url("+image+")"
                            }}
                        >
                            <h3>{this.props.weaponList[this.props.currentWeaponId].name}</h3>
                        </button>
                    </div>
                </div>
                <ul className="row absolute-top w-100 h-100" id="weaponPannel">
                    {this.props.weaponList.map(weapon => this.renderWeaponButton(weapon))}
                </ul>
            </div>
        )
    }


}

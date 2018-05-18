import React, {Component} from "react"
import "./LawPanel.css"
import axios from 'axios'
import OutlawCard from "./outlawCard/OutlawCard";


export default class LawPanel extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            outlaws : [
                {
                    id: 0,
                    name: "Random",
                    firstname: "Villain",
                    nickname: "Randy",
                    age: 34,
                    sex: 1,
                    size: 143,
                    crimeNb: 7,
                    dangerousness: 3.5,
                    position: {x: 0, y: 0}
                }
            ]
        };
    }

    componentWillMount() {
        this.fetchLawData()
    }

    fetchLawData = () => {
        axios.get("/law/")
            .then((results) => {
                this.setState({
                    outlaws: results.data[0].map( outlaw => ({
                        id: outlaw.id,
                        name: outlaw.name,
                        firstname: outlaw.firstname,
                        nickname: outlaw.nickname,
                        age: outlaw.age,
                        sex: outlaw.sex,
                        size: outlaw.size,
                        crimeNb: outlaw.crimeNb,
                        dangerousness: outlaw.dangerousness,
                        position: {x: outlaw.xPos, y: outlaw.yPos}
                    }))
                })
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="law-panel container-fluid p-2">

                <div id={"search-tab"} className={"row"}>
                    <div className={"col-12"}></div>
                </div>
                <div id={"outlaws-display"} className={"row"}>
                    <div className={"col-12 container-fluid "}>
                    {this.state.outlaws.map(outlaw => (
                        <OutlawCard key={outlaw.id.toString()}
                                    firstname={outlaw.firstname}
                                    name={outlaw.name}
                                    nickname={outlaw.nickname}
                                    sex={outlaw.sex}
                                    age={outlaw.age}
                                    size={outlaw.size}
                                    dangerousness={outlaw.dangerousness}
                                    crimeNb={outlaw.crimeNb}
                        />
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}
import React, {Component} from "react"

export default class SvgFilters extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="svg-filters">
                <svg>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </svg>
            </div>
        )
    }
}
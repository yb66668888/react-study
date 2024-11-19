/* eslint-disable no-useless-constructor */
import { Component } from "react";

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        
    }
    render() {
        return <div>生命周期</div>
    }
}
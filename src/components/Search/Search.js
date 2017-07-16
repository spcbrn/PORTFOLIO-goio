import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postSearch, searchReturn, postReady} from './../../ducks/mainReducer';
import {handlePost} from './../../services/axiosServices';
import {ButtonAccept, ButtonSubmit} from './../Buttons/Buttons';
import Results from './../Results/Results'


class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchReady: false,
            originInput: '',
            destinationInput: '',
            departInput: '',
            returnInput: '',
            passengers: '',
            oneWayQuery: {
                "request": {
                    "passengers": {
                        "adultCount": 1,
                    },
                    "slice": [
                        {
                            "origin": '',
                            "destination": '',
                            "date": '',
                            "maxStops": 1
                        }
                    ],
                    "solutions": 30
                }
            },
            roundTripQuery: {
                "request": {
                    "passengers": {
                        "adultCount": 1,
                    },
                    "slice": [
                        {
                            "origin": '',
                            "destination": '',
                            "date": '',
                            "maxStops": 1
                        },
                        {
                            "origin": '',
                            "destination": '',
                            "date": '',
                            "maxStops": 1
                        }
                    ],
                    "solutions": 30
                }
            }
        }

    this.handleOriginInput = this.handleOriginInput.bind(this);
    this.handleDestinationInput = this.handleDestinationInput.bind(this);
    this.handleDepartInput = this.handleDepartInput.bind(this);
    this.handleReturnInput = this.handleReturnInput.bind(this);
    this.handlePassengers = this.handlePassengers.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleClickAccept = this.handleClickAccept.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);

    }


    handleOriginInput(e) {
        this.setState({
            originInput: e.target.value
        })
    }

    handleDestinationInput(e) {
        this.setState({
            destinationInput: e.target.value
        })
    }

    handleDepartInput(e) {
        this.setState({
            departInput: e.target.value
        })
    }

    handleReturnInput(e) {
        this.setState({
            returnInput: e.target.value
        })
    }

    handlePassengers(e) {
        this.setState({
            passengers: e.target.value
        })
    }

    handleCheckBox(e) {
        console.log(this.state.returnBool)
    }


    delayPost() {
        var delay = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(console.log('success'))
            }, 4000);
        });
        return delay;
    }

    handleClickAccept() {
        if (!this.state.returnInput) {
            let query = Object.assign({}, this.state.oneWayQuery);
            query.request.passengers.adultCount = this.state.passengers;
            query.request.slice[0].origin = this.state.originInput;
            query.request.slice[0].destination = this.state.destinationInput;
            query.request.slice[0].date = this.state.departInput;
            this.props.postSearch(query);
        }
        else {
            let query = Object.assign({}, this.state.roundTripQuery);
            query.request.passengers.adultCount = this.state.passengers;
            query.request.slice[0].origin = this.state.originInput;
            query.request.slice[0].destination = this.state.destinationInput;
            query.request.slice[0].date = this.state.departInput;
            query.request.slice[1].origin = this.state.destinationInput;
            query.request.slice[1].destination = this.state.originInput;
            query.request.slice[1].date = this.state.returnInput;            
            this.props.postSearch(query);
        }
        this.setState({
            searchReady: true
        })
    }

    handleClickSubmit() {
        handlePost(this.props.postQuery).then(res => {
            console.log(res);
            this.props.searchReturn(res.data.trips.tripOption)
            this.props.postReady({confirm: false})
        })
        this.setState({
            searchReady: false,
            originInput: '',
            destinationInput: '',
            departInput: '',
            returnInput: '',
            passengers: ''
        })
    }


    render() {

        const buttonStyle = {
            'display': 'none'
        }

        return(
            <main className="content-wrapper">
                <div className="search-wrapper">
                    <div className="search-comp">
                        <section className="geo-input">
                            <div className="origin">
                                <p>Where are you?</p>
                                <input placeholder="Airport code" onChange={this.handleOriginInput} value={this.state.originInput} />
                            </div>
                            <div className="destination">
                                <p>Where are you going?</p>
                                <input placeholder="Airport code" onChange={this.handleDestinationInput} value={this.state.destinationInput} />
                            </div>
                        </section>
                        <section className="timeframe-wrapper">
                            <p>When?</p>
                            <div className="time-input">
                                <div>
                                    <p>Depart:</p><input placeholder="YYYY-MM-DD" onChange={this.handleDepartInput} value={this.state.departInput}/>
                                </div>
                                <div>
                                    <p>Return:</p><input placeholder="YYYY-MM-DD" onChange={this.handleReturnInput} value={this.state.returnInput}/>
                                </div>
                            </div>
                        </section>
                        <section className="passengers-wrapper">
                            <div>
                                <p>Number of travelers?</p>
                                <input onChange={this.handlePassengers} value={this.state.passengers}/>
                            </div>
                        </section>
                        <div className="search-button">
                            <div style={this.state.searchReady ? buttonStyle : null} onClick={this.handleClickAccept}>
                            <ButtonAccept />
                            </div>
                            <div style={this.state.searchReady ? null : buttonStyle} onClick={this.handleClickSubmit}>
                            <ButtonSubmit />
                            </div>
                        </div>
                    </div>
                </div>
                <Results />
            </main>
        )
    }
}

function mapStateToProps(state) {
    // console.log('store: ', state);
    return state;
}
export default connect(mapStateToProps, {postSearch, handlePost, searchReturn, postReady})(Search);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postReady} from './../../ducks/mainReducer';
import {handlePost} from './../../services/axiosServices';
import RenderResults from './RenderResults';
import {dataOneWayArray, dataRoundTripArray} from './../../dummyData';


class Results extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deets: []
        }
    }


    componentDidUpdate(props) {
        if(this.props.queryReady.confirm === false) {
            this.props.postReady({confirm: true});
            return
        }
        console.log('update: ', this.props.queryResults);
    }


    render() {
        const resultsArr = this.props.queryResults.map((obj, i) => {
            return (
                <RenderResults key={i}
                        price={obj.saleTotal}
                        origin={obj.slice[0].segment[0].leg[0].origin + ' ' + obj.slice[0].segment[0].leg[0].departureTime}
                        layover={'No'}
                        destination={obj.slice[0].segment[0].leg[0].destination + ' ' + obj.slice[0].segment[0].leg[0].arrivalTime}
                        passengers={this.props.postQuery.request.passengers.adultCount}
                />
            )
        })

        return(
            <main className="results-wrapper-main">
                <div className="header-shim"></div>
                    <div className="results-container">
                        <div className="results-flow">
                            <header className="results-header">
                                <div className="results-title"><h1>Available Flights:</h1></div>
                            </header>
                            <div className="results-body">
                                <table className="results-table">
                                    <tbody>
                                        <tr className="labels">
                                            <th>Price:</th>
                                            <th>Origin/Departure:</th>
                                            <th>Layover:</th>
                                            <th>Destination/Arrival:</th>
                                            <th>Passengers:</th>
                                            <th>Book:</th>                                    
                                        </tr>
                                            {resultsArr}
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {postReady, handlePost})(Results);
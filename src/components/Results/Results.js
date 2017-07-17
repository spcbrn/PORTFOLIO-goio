import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postReady} from './../../ducks/mainReducer';
import {handlePost} from './../../services/axiosServices';
import {RenderResultsOneWay, RenderResultsRoundTrip} from './RenderResults';
// import {dataOneWayArray, dataRoundTripArray} from './../../dummyData';


class Results extends Component {


    componentDidUpdate(props) {
        if(this.props.queryReady.confirm === false) {
            this.props.postReady({confirm: true});
            return
        }
        console.log('update: ', this.props.queryResults);
    }


    render() {
        const parseTime = function(str) {
            let strArr = str.split('T')
            let newTimeArr = strArr[1].slice(0, 5).split(':');
            let finalTime = '';
            newTimeArr[0] < 12 ?
                finalTime = (newTimeArr[0] > 0 ? Number(newTimeArr[0]) : Number(newTimeArr[0] + 12)).toString() + ':' + newTimeArr[1].toString() + 'am' :
                finalTime = (newTimeArr[0] > 12 ? newTimeArr[0] - 12 : newTimeArr[0]).toString() + ':' + newTimeArr[1].toString() + 'pm';
            return strArr[0] + ' at ' + finalTime;
        }


        const resultsArr = this.props.queryResults.map((obj, i) => {
            if(obj.slice.length === 1){
                return (
                    <RenderResultsOneWay key={i}
                            price={obj.saleTotal}
                            origin={obj.slice[0].segment[0].leg[0].origin + ' - ' + parseTime(obj.slice[0].segment[0].leg[0].departureTime)}
                            layover={obj.slice[0].segment.length === 1 ? 'No' : obj.slice[0].segment[0].leg[0].destination}
                            destination={obj.slice[0].segment[obj.slice[0].segment.length-1].leg[0].destination + ' - ' + parseTime(obj.slice[0].segment[obj.slice[0].segment.length-1].leg[0].arrivalTime)}
                            passengers={this.props.postQuery.request.passengers.adultCount}
                    />
                )
            }
            else{
                return (
                    <RenderResultsRoundTrip key={i}
                            price={obj.saleTotal}
                            originOut={obj.slice[0].segment[0].leg[0].origin + ' - ' + parseTime(obj.slice[0].segment[0].leg[0].departureTime)}
                            originIn={obj.slice[1].segment[0].leg[0].origin + ' - ' + parseTime(obj.slice[1].segment[0].leg[0].departureTime)}
                            layoverOut={obj.slice[0].segment.length === 1 ? 'No' : obj.slice[0].segment[0].leg[0].destination}
                            layoverIn={obj.slice[1].segment.length === 1 ? 'No' : obj.slice[1].segment[0].leg[0].destination}
                            destinationOut={obj.slice[0].segment[obj.slice[0].segment.length-1].leg[0].destination + ' - ' + parseTime(obj.slice[0].segment[obj.slice[0].segment.length-1].leg[0].arrivalTime)}
                            destinationIn={obj.slice[1].segment[obj.slice[1].segment.length-1].leg[0].destination + ' - ' + parseTime(obj.slice[1].segment[obj.slice[1].segment.length-1].leg[0].arrivalTime)}
                            passengers={this.props.postQuery.request.passengers.adultCount}
                    />
                )
            }
        })

        return(
            <main className="results-wrapper-main">
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
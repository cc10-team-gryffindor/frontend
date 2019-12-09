import React from "react";
import { connect } from "react-redux";
import { Button, Paper } from "@material-ui/core";
import moment from "moment";

type myProps = {
  trips: any;
  currentTripIndex: number;
  onShowChat: any;
  onShowProfile: any;
  onPreviousTrip: any;
  onNextTrip: any;
};

class TripInfo extends React.Component<myProps, {}> {
  render() {
    console.log(this.props.trips);
    return (
      <div>
        <div className="TripInfo">
          <h1>Trip Details</h1>
          <p>
            Start Date:{" "}
            {moment(
              this.props.trips[this.props.currentTripIndex].startDate.toDate()
            ).format("MMMM Do YYYY")}
          </p>
          <p>
            End Date:{" "}
            {moment(
              this.props.trips[this.props.currentTripIndex].endDate.toDate()
            ).format("MMMM Do YYYY")}
          </p>
          <div>
            <div>
              Starting Location:
              {` ${
                this.props.trips[this.props.currentTripIndex].startLocation
              }`}
            </div>
          </div>
          <div>
            Waypoints:{" "}
            {this.props.trips[this.props.currentTripIndex].waypoints.map(
              (l: any, i: number) => {
                return <p key={i}>{l.location}</p>;
              }
            )}
          </div>
          <p>Budget: {this.props.trips[this.props.currentTripIndex].budget}</p>
          <p>Notes: </p>
          <p>Messages: </p>
          <div>
            Members:{" "}
            {this.props.trips[this.props.currentTripIndex].memberIds.map(
              (m: any, i: number) => {
                return (
                  <div>
                    <p key={i} onClick={() => this.props.onShowProfile(i)}>
                      memberIds: {m.memberIds}
                    </p>
                  </div>
                );
              }
            )}
          </div>
          <Button variant="contained" color="primary" size="large">
            JOIN!
          </Button>
          <div className="navButtons">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.props.onPreviousTrip}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.props.onNextTrip}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    trips: state.trips,
    currentTripIndex: state.currentTripIndex
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onShowChat: () =>
      dispatch({
        type: "SHOW_CHAT"
      }),
    onShowProfile: (index: number) =>
      dispatch({
        type: "SHOW_PROFILE",
        index
      }),
    onPreviousTrip: () =>
      dispatch({
        type: "PREVIOUS_TRIP"
      }),
    onNextTrip: () =>
      dispatch({
        type: "NEXT_TRIP"
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);

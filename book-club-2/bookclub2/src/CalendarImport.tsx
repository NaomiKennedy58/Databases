import React, {ReactNode, SyntheticEvent} from 'react';
import ApiCalendar from "react-google-calendar-api";

const config = {
    clientId: "509788437385-cd6ak62gp1o3pe5dbq8uru0o6e2uso43.apps.googleusercontent.com",
    apiKey: "AIzaSyAhKYr1Qk-YeXWJoxMRSgsoAOK46i50epE",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };
  
  const apiCalendar = new ApiCalendar(config);

  export default class DoubleButton extends React.Component {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      this.handleItemClick = this.handleItemClick.bind(this);
    }

    public handleItemClick(event: SyntheticEvent<any>, name: string): void {
      if (name === 'sign-in') {
        apiCalendar.handleAuthClick()
      } else if (name === 'sign-out') {
        apiCalendar.handleSignoutClick();
      }
    }

    render(): ReactNode {
      return (
          <>
            <button
                onClick={(e) => this.handleItemClick(e, 'sign-in')}
            >
              sign-in
            </button>
            <button
                onClick={(e) => this.handleItemClick(e, 'sign-out')}
            >
              sign-out
            </button>
          </>
        );
    }
}
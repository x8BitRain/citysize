import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:true
    };
  }

  componentDidMount() {
    let visited = localStorage["alreadyVisited"];
    if (visited) {
     this.setState({ display: false })
     //do not view Popup
    } else {
       //this is the first time
       localStorage["alreadyVisited"] = true;
       this.setState({ display: true});
    }
  }

  toggleDisplay = () => {
    this.setState({
      display: false
    });
  }

  drawModal = () => {
    return (
      <div className='modal'>
      <div id='close' onClick={this.toggleDisplay} />
      <h4>How it works:</h4>
      <ul>
        <li>Search for any location like a city, country or even a building.</li>
        <li>Select a location from the search list to add it to the map.</li>
        <li>Drag the outline around the map and compare it to other locations!</li>
        <li><a href='https://github.com/x8BitRain/citysize'>Read the FAQ on Github.</a></li>
      </ul>
      </div>
    );
  }

  render() {
    return (
    <React.Fragment>
      {(this.state.display) ? this.drawModal() : null}
    </React.Fragment>
    );
  }
}

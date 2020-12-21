// src/components/prospects/prospect_record.js
import NavBarContainer from '../nav/navbar_container';
import React from 'react';

class ProspectRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let prospect = {
      email: this.state.email
    };
    this.props.recordProspect(prospect)
        .then(() => {
          this.setState({
              email: "",
              errors: ""
            });
        });;
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  // Render the post errors if there are any
  renderErrors() {
    if ( this.props.errors.length > 0 ) {
      return (
        <div id="prospect-record-errors">{this.props.errors}</div>
      );
    } else if ( this.state.errors !== "" ) {
      return (
        <div>{this.state.errors}</div>
      )
    } else {
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input
                type="textarea"
                id="email"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Enter prospect's email..."
              />
            </div>
            <div>
              <input type="submit" value="Record Prospect" />
            </div>
          </div>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default ProspectRecord;
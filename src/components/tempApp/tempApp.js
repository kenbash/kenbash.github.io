import React, { Component, Fragment } from 'react';

class TempApp extends Component {
  constructor(props) {
    super(props);

    document.body.style.background = "white";

    this.fileReader = new FileReader();
    this.fileReader.onload = e => this.setState({ fileContents: e.target.result });

    this.state = {
      name: "",
      quantity: null,
      fileContents: ""
    }
  }

  _handleFileChange(e) {
    if (e.target.files && e.target.files.length) {
      this.fileReader.readAsText(e.target.files[0]);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const lines = this.state.fileContents.split(/\r\n|\n/);
    const name = `"${this.state.name}"`;
    let quantity = 0;

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(',');
      if (data[0] === name) {
        quantity += +data[3].substring(1, data[3].length - 1);
      }
    }

    this.setState({ quantity });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this._handleSubmit(e)}>
          <input type="file" onChange={e => this._handleFileChange(e)}/>
          <br/>
          <label htmlFor="nameInput">Name:&nbsp;</label>
          <input id="nameInput" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        {this.state.quantity != null && <p>Quantity: {this.state.quantity}</p>}
      </Fragment>
    );
  }
}

export default TempApp;

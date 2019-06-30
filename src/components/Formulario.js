import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
  state = {
    category: 'general'
  }

  handleChange = e => {
    //Set the state with the selected value from the select
    this.setState({
      category: e.target.value
    }, () => {
      //Make a new API call
      this.props.getArticlesFromApi(this.state.category);
    })

  }

  render() {
    return (

      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find news by category</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select
                onChange={this.handleChange}
              >
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

Formulario.propTypes = {
  getArticlesFromApi: PropTypes.func.isRequired
}

export default Formulario;
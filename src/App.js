import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getArticlesFromApi();
  }

  //Get articles from API default category is general
  getArticlesFromApi = async (category = 'general') => {
    //Make the API call
    const country = 'us';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4d331c7a85fc42d9b0b2f0f31f4592e8`;

    const response = await fetch(url);
    const data = await response.json();

    //Set the state with the articles from API
    this.setState({
      news: data.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header
          title='News API with React'
        />
        <div className="container white contenedor-noticias">

          <Formulario
            getArticlesFromApi={this.getArticlesFromApi}
          />
          <ListaNoticias
            news={this.state.news}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
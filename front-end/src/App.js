import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  getData() {
    setTimeout(() => {
      axios.get('http://localhost:5000').then(res => this.setState({ data: [...res.data.data] }));
    }, 5000);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div id="App">
        <div className="main-title">CoinMarketCap API</div>
        <div className="content-outer" >
          {this.state.data.map(data =>
            <div className="content-box" key={data.id}>
              <div>
                <div className="content-line-one">
                  <div className="coin-name"><img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${data.id}.png`} alt="" />{data.name}</div>
                  <p className="coin-symbol">({data.symbol})</p>
                  <p className="price-line"><span className="price-symbol">US$</span> <span className="coin-price">{data.quote.USD.price}</span></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;
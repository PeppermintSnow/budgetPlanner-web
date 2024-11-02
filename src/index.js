import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faCheck, faCoins, faCommentsDollar, faCreditCard, faCrow, faDeleteLeft, faFontAwesome, faMoneyBill, faMoneyBills, faMoneyCheckDollar, faPen, faPiggyBank, faReceipt, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faGithub, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const moneyBill = <FontAwesomeIcon icon={faMoneyBill} />
const moneyBills = <FontAwesomeIcon icon={faMoneyBills} />
const commentsDollar = <FontAwesomeIcon icon={faCommentsDollar} />
const crow = <FontAwesomeIcon icon={faCrow} />
const pen = <FontAwesomeIcon icon={faPen} />
const coins = <FontAwesomeIcon icon={faCoins} />
const creditCard = <FontAwesomeIcon icon={faCreditCard} />
const receipt = <FontAwesomeIcon icon={faReceipt} />
const moneyCheckDollar = <FontAwesomeIcon icon={faMoneyCheckDollar} />
const arrowsRotate = <FontAwesomeIcon icon={faArrowsRotate} />
const deleteLeft = <FontAwesomeIcon icon={faDeleteLeft} />
const check = <FontAwesomeIcon icon={faCheck} />
const piggyBank = <FontAwesomeIcon icon={faPiggyBank} />
const sackDollar = <FontAwesomeIcon icon={faSackDollar} />
const react = <FontAwesomeIcon icon={faReact} />
const github = <FontAwesomeIcon icon={faGithub} />
const bootstrap = <FontAwesomeIcon icon={faBootstrap} />
const sass = <FontAwesomeIcon icon={faSass} />
const fontAwesome = <FontAwesomeIcon icon={faFontAwesome} />

let entryList = [];

const Header = () => {
  return (
    <div id="header" className="container-fluid text-center p-5">
      <h1><span className="color-accent1">{commentsDollar}</span> Budget Planner <span className="color-accent1">{moneyBills}</span></h1>
      <p>by <a href="https://github.com/PeppermintSnow" id="github-link">@PeppermintSnow {crow}</a></p>
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cashInput: '',
      coinsInput: '',
      totalCash: 0,
      totalCoins: 0,
      price: '',
      description: '',
      useCash: true,
      entry: {},
      entryPrev: {},
      firstEntry: {}
    }
    this.handleCash = this.handleCash.bind(this);
    this.handleCoins = this.handleCoins.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCash(event) {
    this.setState({
      cashInput: event.target.value
    });
  }
  handleCoins(event) {
    this.setState({
      coinsInput: event.target.value,
    });
  }
  handlePrice(event) {
    this.setState({
      price: event.target.value
    });
  }
  handleDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleRadio() {
    const radio = document.querySelectorAll(".form-check-input");
    let checkedValue;
    for (let i = 0; i < 2; i++) {
      console.log(radio[i].value)
      if (radio[i].checked) {
        checkedValue = radio[i].value;
      }
    }
    if (checkedValue) {
      return checkedValue;
    } else {
      return 'cash';
    }
  }
  handleReset(event) {
    this.setState({
      cashInput: '',
      coinsInput: '',
      totalCash: 0,
      totalCoins: 0,
      price: '',
      description: '',
      useCash: true,
      entry: {}
    });
    entryList = [];
  }
  handleUndo(event) {
    const lastIndex = entryList.length != 0 ? entryList.pop() : null; 
    if (lastIndex) {
      if (entryList.length === 0) {
        this.setState({
          cashInput: this.state.firstEntry.cash ? this.state.firstEntry.cash : '' ,
          coinsInput: this.state.firstEntry.coins ? this.state.firstEntry.coins : '', 
        firstEntry: {
          cash: 0,
          coins: 0
          }
        })
      } else {
        this.setState({
          cashInput: lastIndex.cash ? lastIndex.cash : '',
          coinsInput: lastIndex.coins ? lastIndex.coins : '',
          description: lastIndex.description | lastIndex.description != '---' ? lastIndex.description : '',
          price: lastIndex.price ? lastIndex.price : '',
          totalCash: lastIndex.totalCash,
          totalCoins: lastIndex.totalCoins
        });
      }  
    } 
  }
  handleSubmit(event) {
    this.isFirstEntry();
    this.calculateTotal(this.handleRadio());
    const balance = this.calculateMoney(this.handleRadio());
    entryList.push({
      price: this.state.price ? this.state.price : 0,
      description: this.state.description ? this.state.description : "---",
      cash: balance.cash ? balance.cash : 0,
      coins: balance.coins ? balance.coins : 0,
      totalCash: this.state.totalCash,
      totalCoins: this.state.totalCoins
  });
    this.setState({
      cashInput: balance.cash ? balance.cash : 0,
      coinsInput: balance.coins ? balance.coins : 0,
      price: '',
      description: ''
    })
  }
  calculateMoney(paymentMethod) {
    let balance;
    if (paymentMethod === 'cash') {
      balance = this.state.cashInput - this.state.price;
      return { cash: balance, coins: this.state.coinsInput };
    } else {
      balance = this.state.coinsInput - this.state.price;
      return { cash: this.state.cashInput, coins: balance };
    }
  }
  calculateTotal(paymentMethod) {
    if (paymentMethod === 'cash') {
      this.setState({
        totalCash: Number(this.state.totalCash) + Number(this.state.price)
      })
    } else {
      this.setState({
        totalCoins: Number(this.state.totalCoins) + Number(this.state.price)
      })
    }
  }
  isFirstEntry() {
    console.log(entryList.length)
    if (entryList.length === 0) {
      console.log("First entry!")
      this.setState({
        firstEntry: {
          cash: this.state.cashInput,
          coins: this.state.coinsInput
        }
      })
    } else {
      return
    }
  }
  render() {
    return (
      <div id="form-container" className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <form id="form-input" className="container pt-3 mt-1 row text-center d-flex justify-content-center">
          <p className="col">{pen} Please fill in the input containers below to get started.</p>
          <div id="balance-container" className="row">
            <div className="col-sm input-group">
              <span className="input-group-text"><span className="text-input-icon">{moneyBill}</span>Cash</span>
              <input id="cash-input" type="number" className="form-control" value={this.state.cashInput} onChange={this.handleCash} placeholder="Enter cash balance" />
            </div>
            <div className="col-sm input-group">
              <span className="input-group-text"><span className="text-input-icon">{creditCard}</span>Card</span>
              <input id="coin-input" type="number" className="form-control" value={this.state.coinsInput} onChange={this.handleCoins} placeholder="Enter card balance" />
            </div>
          </div>
          <div id="price-container" className="row">
            <div className="col input-group">
              <span className="input-group-text"><span className="text-input-icon">{moneyCheckDollar}</span>Spent</span>
              <input id="price-input" type="number" className="form-control" value={this.state.price} onChange={this.handlePrice} placeholder="How much did you spend?" />
              <div className="input-group-text">
                <div className="form-check">
                  <input type="radio" class="form-check-input" id="radio-cash" name="price-type" value="cash" checked />
                  <label id="radio-cash-label" className="form-check-label" for="radio-cash">{moneyBill} Cash</label>
                </div>
                <div className="form-check">
                  <input type="radio" class="form-check-input" id="radio-coins" name="price-type" value="coins" />
                  <label id="radio-coins-label" className="form-check-label" for="radio-coins">{creditCard} Card</label>
                  </div>
              </div>
            </div>
          </div>
          <div id="description-container" className="row">
            <div className="col input-group">
              <span className="input-group-text"><span className="text-input-icon">{receipt}</span>Description</span>
              <input id="description-input" type="text" className="form-control" value={this.state.description} onChange={this.handleDescription} placeholder="What did you spend the money on?" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <button id="reset-btn" type="button" class="btn" onClick={this.handleReset}>{arrowsRotate} Reset</button>
            </div>
            <div class="col">
              <button id="undo-btn" type="button" class="btn" onClick={this.handleUndo}>{deleteLeft} Undo</button>
            </div>
            <div class="col">
            <button id="submit-btn" type="button" class="btn" onClick={this.handleSubmit}>{check} Submit</button>
            </div>
          </div>
        </form>

        <Summary 
          cash = {this.state.cashInput}
          coins = {this.state.coinsInput}
          totalCash = {this.state.totalCash}
          totalCoins = {this.state.totalCoins}
          firstEntry = {this.state.firstEntry}
        />
        <History 
          cash = {this.state.cashInput}
          coins = {this.state.coinsInput}
          description = {this.state.description}
          price = {this.state.price}
          entries = {entryList}
        />
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="summary-table-container" class="container m-5">
        <table id="summary-table" className="container">
          <tr>
            <th></th>
            <th></th>
            <th><span>{moneyBill} Cash</span></th>
            <th><span>{creditCard} Card</span></th>
          </tr>
          <tr>
            <th colspan="2"><span>{piggyBank} Initial Bal.</span></th>
            <td>{this.props.firstEntry.cash ? this.props.firstEntry.cash : "---"}</td>
            <td>{this.props.firstEntry.coins ? this.props.firstEntry.coins : "---"}</td>
          </tr>
          <tr>
            <th colspan="2"><span>{piggyBank} Current Bal.</span></th>
            <td>{this.props.cash ? this.props.cash : "---"}</td>
            <td>{this.props.coins ? this.props.coins : "---"}</td>
          </tr>
          <tr>
            <th colspan="2"><span>{sackDollar} Spent</span></th>
            <td>{this.props.totalCash ? this.props.totalCash : "---"}</td>
            <td>{this.props.totalCoins ? this.props.totalCoins : "---"}</td>
          </tr>
        </table>
      </div>
    );
  }
}

class History extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const entries = this.props.entries;
    return (
      <div id="history-table-container" class="container m-1">
        <table id="history-table" className="container">
          <tbody>
            <tr>
              <th><span>{moneyCheckDollar} Price</span></th>
              <th><span>{receipt} Description</span></th>
              <th><span>{piggyBank} Balance</span></th>
            </tr>
            {entries.map(entry => {
              return (
                <tr>
                  <td>{sackDollar} {entry.price}</td>
                  <td>{entry.description}</td>
                  <td>{moneyBill} {entry.cash} / {creditCard} {entry.coins} </td>
                </tr>
              )})
            }
            <tr>
              <td>{sackDollar} {this.props.price ? this.props.price : 0}</td>
              <td>{this.props.description ? this.props.description : "---"}</td>
              <td>{moneyBill} {this.props.cash ? this.props.cash : 0} / {creditCard} {this.props.coins ? this.props.coins : 0} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const Footer = () => {
  return (
    <div id="footer" className="container-fluid text-center mt-5 p-3">
      <p>Budget Planner by <a className="footer-link" href="https://github.com/PeppermintSnow">@PeppermintSnow {crow}</a></p>
      <p>Made with <a className="footer-link" href="https://react.dev">{react} React</a> | <a className="footer-link" href="https://getbootstrap.com/">{bootstrap} Bootstrap</a> | <a className="footer-link" href="https://sass-lang.com/">{sass} SASS</a></p>
      <p>Icons by <a className="footer-link" href="https://fontawesome.com/">{fontAwesome} FontAwesome</a> - <a className="footer-link" href="https://github.com/PeppermintSnow/budgetPlanner-web">{github} Code Repository</a></p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Form />
    <Footer />
  </div>
);
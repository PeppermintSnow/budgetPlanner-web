import React from 'react';
import icons from './Icons.js' 
import Summary from './Summary.js'
import History from './History.js'

let entryList = [];

export default class App extends React.Component {
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
      const lastIndex = entryList.length !== 0 ? entryList.pop() : null; 
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
            description: lastIndex.description | lastIndex.description !== '---' ? lastIndex.description : '',
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
            <p className="col">{icons.pen} Please fill in the input containers below to get started.</p>
            <div id="balance-container" className="row">
              <div className="col-sm input-group">
                <span className="input-group-text"><span className="text-input-icon">{icons.moneyBill}</span>Cash</span>
                <input id="cash-input" type="number" className="form-control" value={this.state.cashInput} onChange={this.handleCash} placeholder="Enter cash balance" />
              </div>
              <div className="col-sm input-group">
                <span className="input-group-text"><span className="text-input-icon">{icons.creditCard}</span>Card</span>
                <input id="coin-input" type="number" className="form-control" value={this.state.coinsInput} onChange={this.handleCoins} placeholder="Enter card balance" />
              </div>
            </div>
            <div id="price-container" className="row">
              <div className="col input-group">
                <span className="input-group-text"><span className="text-input-icon">{icons.moneyCheckDollar}</span>Spent</span>
                <input id="price-input" type="number" className="form-control" value={this.state.price} onChange={this.handlePrice} placeholder="How much did you spend?" />
                <div className="input-group-text">
                  <div className="form-check">
                    <input type="radio" class="form-check-input" id="radio-cash" name="price-type" value="cash" checked />
                    <label id="radio-cash-label" className="form-check-label" for="radio-cash">{icons.moneyBill} Cash</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" class="form-check-input" id="radio-coins" name="price-type" value="coins" />
                    <label id="radio-coins-label" className="form-check-label" for="radio-coins">{icons.creditCard} Card</label>
                    </div>
                </div>
              </div>
            </div>
            <div id="description-container" className="row">
              <div className="col input-group">
                <span className="input-group-text"><span className="text-input-icon">{icons.receipt}</span>Description</span>
                <input id="description-input" type="text" className="form-control" value={this.state.description} onChange={this.handleDescription} placeholder="What did you spend the money on?" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <button id="reset-btn" type="button" class="btn" onClick={this.handleReset}>{icons.arrowsRotate} Reset</button>
              </div>
              <div class="col">
                <button id="undo-btn" type="button" class="btn" onClick={this.handleUndo}>{icons.deleteLeft} Undo</button>
              </div>
              <div class="col">
              <button id="submit-btn" type="button" class="btn" onClick={this.handleSubmit}>{icons.check} Submit</button>
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
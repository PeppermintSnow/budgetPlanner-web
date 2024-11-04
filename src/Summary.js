import React from 'react';
import icons from './Icons.js'

export default class Summary extends React.Component {
    render() {
      return (
        <div id="summary-table-container" class="container m-5">
          <table id="summary-table" className="container">
            <tr>
              <th></th>
              <th></th>
              <th><span>{icons.moneyBill} Cash</span></th>
              <th><span>{icons.creditCard} Card</span></th>
            </tr>
            <tr>
              <th colspan="2"><span>{icons.piggyBank} Initial Bal.</span></th>
              <td>{this.props.firstEntry.cash ? this.props.firstEntry.cash : "---"}</td>
              <td>{this.props.firstEntry.coins ? this.props.firstEntry.coins : "---"}</td>
            </tr>
            <tr>
              <th colspan="2"><span>{icons.piggyBank} Current Bal.</span></th>
              <td>{this.props.cash ? this.props.cash : "---"}</td>
              <td>{this.props.coins ? this.props.coins : "---"}</td>
            </tr>
            <tr>
              <th colspan="2"><span>{icons.sackDollar} Spent</span></th>
              <td>{this.props.totalCash ? this.props.totalCash : "---"}</td>
              <td>{this.props.totalCoins ? this.props.totalCoins : "---"}</td>
            </tr>
          </table>
        </div>
      );
    }
  }
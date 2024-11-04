import React from 'react';
import icons from './Icons.js'

export default class History extends React.Component {
  render() {
    const entries = this.props.entries;
    return (
      <div id="history-table-container" class="container m-1">
        <table id="history-table" className="container">
          <tbody>
            <tr>
              <th><span>{icons.moneyCheckDollar} Price</span></th>
              <th><span>{icons.receipt} Description</span></th>
              <th><span>{icons.piggyBank} Balance</span></th>
            </tr>
            {entries.map(entry => {
              return (
                <tr>
                  <td>{icons.sackDollar} {entry.price}</td>
                  <td>{entry.description}</td>
                  <td>{icons.moneyBill} {entry.cash} / {icons.creditCard} {entry.coins} </td>
                </tr>
              )})
            }
            <tr>
              <td>{icons.sackDollar} {this.props.price ? this.props.price : 0}</td>
              <td>{this.props.description ? this.props.description : "---"}</td>
              <td>{icons.moneyBill} {this.props.cash ? this.props.cash : 0} / {icons.creditCard} {this.props.coins ? this.props.coins : 0} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
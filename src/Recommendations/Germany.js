import React, { Component } from 'react';
import { Card, CardTitle, CardHeader, CardBody } from 'reactstrap';

class Germany extends Component {
  render() {
    return (
      <div>
        <h3>Die Kombi für Deutschland</h3>
        <Card>
          <CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Gratis Bezahlen und Abheben in Europa</CardHeader>
          <CardBody>
            <img className="cardImg" src="http://i.imgur.com/gSXOf5o.png" alt="Barclaycard New Visa" />
            <CardTitle>Barclaycard New Visa</CardTitle>
            <ul className="fa-ul" style={{ display: 'inline-block' }}>
              <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€</strong> Jahresgebühr und <strong> 0€&nbsp; EUR-Abhebungen</strong></li>
              <li><i className="fa-li fa fa-check-square text-success"></i>Langes Zahlungsziel, hohes Limit erreichbar</li>
              <li><i className="fa-li fa fa-check-square text-info"></i>1.99% bei Zahlung in Fremdwährung</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> Gratis Punkte sammeln in Europa</CardHeader>
          <CardBody>
            <img className="cardImg" src="http://i.imgur.com/w2t85Jk.png" alt="American Express Payback" />
            <CardTitle>American Express Payback</CardTitle>
            <ul className="fa-ul" style={{ display: 'inline-block' }}>
              <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€ </strong> Jahresgebühr dauerhaft</li>
              <li><i className="fa-li fa fa-check-square text-success"></i><strong>1 Payback Punkt pro 2 Euro</strong></li>
              <li><i className="fa-li fa fa-check-square text-info"></i>2% bei Zahlung in Fremdwährung</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Germany;

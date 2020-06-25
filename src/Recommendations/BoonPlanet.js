import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Germany from './Germany';
import Worldwide from './Worldwide';
import { Card, CardTitle, CardHeader, CardBody, Button, Alert } from 'reactstrap';



class Recommended extends Component {
  render() {
    return (
      <Container>
                <Row>
          <Col  xs={{size: 6, offset: 3}}>


        <h2>Ersatz für boon.PLANET</h2>
        <p> Nach Anmeldung der Insolvez der Wirecard AG, der Holding der Wirecard Bank AG, die noch keine Insolvenz angemeldet hat, bleibt für Kunden von boon.PLANET die Frage,
          wo in der Zukunft ein Konto geführt wird. </p>
          <p>Die Einlagen sind bei boon.PLANET gesetzlich geschützt, die Zukunft des Kontos aber vollkommen unklar.</p> 
          <p>Wir suchen nach Banken mit folgenden Features:
          <ul>
            <li>Debitkarte (Mastercard oder Visa)</li>
            <li>Deutsche IBAN</li>
            <li>Einlagensicherung</li>
            <li>Keine Gebühren für Fremdwährung</li>
            <li>ATM kostengünstig</li>
          </ul>
          </p>

          <h2>Erster Kandidat: N26</h2>

      <Card>
          <CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Konto mit guter App und Debitkarte</CardHeader>
          <CardBody>
            <img className="cardImg" src="https://images.ctfassets.net/q33z48p65a6w/2DqC4xSMtayA6kmOo64I0E/18fd114ab3cf1ba654e5b4c203ebc461/n26-cards-mastercard-de.png?fit=thumb&fm=png&q=90&w=320" alt="Barclaycard Visa" />
            <CardTitle>N26 Konto</CardTitle>
            <ul className="fa-ul" style={{ display: 'inline-block' }}>
              <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen in Eurozone</strong></li>
              <li><i className="fa-li fa fa-check-square text-success"></i>Gute App, Debit MC</li>
              <li><i className="fa-li fa fa-check-square text-success"></i>Apple Pay und Google Pay</li>
              <li><i className="fa-li fa fa-check-square text-danger"></i>Mit Schufa</li>
            </ul>
          </CardBody>
          <Button color="success" target="_blank" rel="noopener noreferrer" href="https://n26.com/en-de/bank-account">Jetzt beantragen</Button>
        </Card>
        
        <p> Der offensichtliche Kandidat ist N26. Mit der Debit Mastercard kann weltweit kostenlos bezahlt werden, die Karte unterstützt wie boon.PLANET Offline-PIN, 201 Service Code und Wunschpin. </p>
        <p>  Bis zu 5 Abhebungen sind in Deutschland pro Monat kostenlos, im Ausland fallen 1.75% an. Die App liefert schnelle Pushs bei Zahlungen. </p>
        <p> Allerdings arbeitetet N26 mit der Schufa zusammen, was das Konto als Drittkonto wenig attraktiv macht </p>

          <h2>Moneyou Go</h2>

           <Card>
          <CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Konto mit App und ohne Schufa</CardHeader>
          <CardBody>
            <img className="cardImg" src="https://www.moneyou.de/-/media/MoneYou-DE/go/web/girokonto/20200512-DE-Card-Plain-90-2.png?h=627&w=1199&la=de-DE&hash=9833501B2B4BE5C99593502D78B863F913980B2C" alt="Barclaycard Visa" />
            <CardTitle>Moneyou Go</CardTitle>
            <ul className="fa-ul" style={{ display: 'inline-block' }}>
              <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen in Eurozone</strong></li>
              <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
              <li><i className="fa-li fa fa-check-square text-warning"></i>Okaye App, Debit MC</li>
              <li><i className="fa-li fa fa-minus-square text-danger"></i>Kein Push</li>
              <li><i className="fa-li fa fa-minus-square text-danger"></i>1.75% AEE</li>
            </ul>
          </CardBody>
          <Button color="success" target="_blank" rel="noopener noreferrer" href="https://www.moneyou.de/girokonto">Jetzt beantragen</Button>
        </Card>

        <p>Ohne Schufa ist Moneyou Go unterwegs. </p> <p>Das deutsche Angebot der ABN AMRO bietet ein schlichtes Konto per App mit Debit MasterCard. Die App sendet leider keine Push-Notifications.</p>
        <p>In der Eurozone sind 2 Abhebungen kostenlos, danach 2 Euro. Im Ausland fallen 1.75% am POS und am ATM an. </p>
        <p> Die Karte bietet Offline-PIN, allerdings nur einen 221 Service Code und anscheinend keinen Wunsch-PIN.
           Insgesamt ein akzeptables Produkt.
           </p>


  <h2>Bitwala</h2>
<Card>
<CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Konto mit App und ohne Schufa</CardHeader>
<CardBody>
 <img className="cardImg" src="https://www.bitwala.com/static/bankaccount_intext_card-1cdd5b353c6355bfebbb80bc3c4cfb37.png" alt="Barclaycard Visa" />
 <CardTitle>Bitwala</CardTitle>
 <ul className="fa-ul" style={{ display: 'inline-block' }}>
   <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen weltweit</strong></li>
   <li><i className="fa-li fa fa-check-square text-info"></i>Mäßige App, Debit MC</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
 </ul>
</CardBody>
<Button color="success" target="_blank" rel="noopener noreferrer" href="https://www.bitwala.com/bank-account/">Jetzt beantragen</Button>
</Card>

<p>Zusammen mit der solarisBank bietet die Cryptobörse Bitwala ein kostenloses Girokonto an. Abhebungen sind weltweit kostenlos, Gebühren fallen auch am POS keine an. </p><p>Die Debit MasterCard kann Offline-PIN, aber nur einen 221 Service Code.
  Die Kontoauszüge sind leider wenig aussagekräftig, als Empfänger steht nur "MasterCard" statt dem richtigen Händler.
  Bitwala arbeitet derzeit nicht mit der Schufa zusammen.
</p>

 <Alert color="success">
        <strong>15€ Bonus über Freunde-werben-Freunde</strong>
        <p>Über Freunde-werben-Freunde gibt es für beide 15€ Guthaben nach der Eröffnung. Nutze dazu den Link hier:</p>
        <Button color="primary" target="_blank" rel="noopener noreferrer" href="https://app.bitwala.com/r/y5B6uWZwMjI">Mit Bonus beantragen</Button>
      </Alert>

 <h2>Tomorrow</h2>


<Card>
<CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Konto mit App und ohne Schufa</CardHeader>
<CardBody>
 <img className="cardImg" src="https://www.tomorrow.one/img/new-visacard.png" alt="Barclaycard Visa" />
 <CardTitle>Tomorrow</CardTitle>
 <ul className="fa-ul" style={{ display: 'inline-block' }}>
   <li><i className="fa-li fa fa-check-square text-success"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen Eurozone</strong></li>
   <li><i className="fa-li fa fa-check-square text-info"></i>Mäßige App, Visa Debit</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Google Pay</li>
   <li><i className="fa-li fa fa-check-square text-danger"></i>1.5% Abhebungen Fremdwährung</li>

 </ul>
</CardBody>
<Button color="success" target="_blank" rel="noopener noreferrer" href="https://www.tomorrow.one/de-de/">Jetzt beantragen</Button>
</Card>

<p>Zusammen mit der solarisBank bietet Tomorrow ein Konto an, welches ohne AEE daherkommt. Wie immer bei der solarisBank mit 226 Service Code und Offline-PIN. </p>
<p>Als Wallet wird nur Google Pay unterstützt. 3 Abhebungen in Euro sind kostenlos, danach 2€. Für Fremdwährungabhebungen fallen 1.5% an.</p>
<p>Die App bietet einige Push-Notifications an. Insgesamt ein akzeptables Produkt</p>

 <h2>Vivid Money</h2>


<Card>
<CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> Konto mit App und ohne Schufa</CardHeader>
<CardBody>
 <img className="cardImg" src="https://website-static.vivid.money/static/images/acquisition/en/pockets-and-cards.png" alt="Barclaycard Visa" />
 <CardTitle>Vivid Money</CardTitle>
 <ul className="fa-ul" style={{ display: 'inline-block' }}>
   <li><i className="fa-li fa fa-check-square text-info"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen bis 200€ kostenlos</strong></li>
   <li><i className="fa-li fa fa-check-square text-info"></i>Mäßige App, Metal Visa Debit</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Google Pay</li>
   <li><i className="fa-li fa fa-check-square text-danger"></i>Abhebungen unter 50€ und nach 200€ teuer, Wechselkurs nicht transparent</li>

 </ul>
</CardBody>
<Button color="success" target="_blank" rel="noopener noreferrer" href="https://vivid.money/en-eu/compare/">Jetzt beantragen</Button>
</Card>

<p>Zusammen mit der solarisBank bietet Vivid ein Konto an, welches ohne AEE daherkommt. Wie immer bei der solarisBank mit 226 Service Code und Offline-PIN. </p>
<p>Als Wallet wird nur Google Pay unterstützt. 200€ in Abhebungen sind kostenlos, danach fallen 3%, mind. 1% an. Abhebungen unter 50€ schlagen immer mit 3%, mind 1€ zubuche. </p>
<p>Insgesamt ein akzeptables Produkt</p>


 <h2>Mit Abstrichen: Monese</h2>
  
 <Card>
<CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> E-Geld-Konto mit App und ohne Schufa</CardHeader>
<CardBody>
 <img className="cardImg" src="https://static.dev.monese.com/s/pricing/simple-pricing.png" alt="Barclaycard Visa" />
 <CardTitle>Monese</CardTitle>
 <ul className="fa-ul" style={{ display: 'inline-block' }}>
   <li><i className="fa-li fa fa-check-square text-info"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen bis 200€ kostenlos</strong></li>
   <li><i className="fa-li fa fa-check-square text-info"></i>Gute App, Debit MC</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
   <li><i className="fa-li fa fa-check-square text-success"></i>Google Pay und Apple Pay</li>
   <li><i className="fa-li fa fa-check-square text-danger"></i>4.95€ für physische Karte, nur E-Geld</li>
   <li><i className="fa-li fa fa-check-square text-danger"></i>belgische IBAN</li>
 </ul>
</CardBody>
<Button color="success" target="_blank" rel="noopener noreferrer" href="https://monese.com/eu/pricing/">Jetzt beantragen</Button>
</Card>
<p>Das britische E-Geld-Institut bietet mit ihrem Konto die üblichen Leistungen ganz okay an. Abhebungen sind bis 200€ kostenlos, danach 2%.</p>
<p>Als IBAN wird eine belgische angeboten. Die Karte kommt für 4.95€ mit einem 226 service code und Offline-PIN.</p>
<p>Die App kann für fast alles per Push benachrichtigen. Per Debitkarte kann das Konto in Echtzeit aufgeladen werden.</p>
<p>Bis zu 2000€ kann man in Fremdwärung ausgeben, danach fallen 2% an. Insgesamt ein rundes Produkt mit reduzierter Absicherung</p>


 <h2>Mit Abstrichen: Transferwise Borderless</h2>
  
  <Card>
 <CardHeader><i aria-hidden="true" className="fa fa-shopping-bag"></i> + <i aria-hidden="true" className="fa fa-money"></i> E-Geld-Konto mit App und ohne Schufa</CardHeader>
 <CardBody>
  <img className="cardImg" src="https://lienzo.s3.amazonaws.com/images/TransferWisecard4@2x.png" alt="Barclaycard Visa" />
  <CardTitle>Transferwise Borderless</CardTitle>
  <ul className="fa-ul" style={{ display: 'inline-block' }}>
    <li><i className="fa-li fa fa-check-square text-info"></i><strong>0€</strong> Kontoführung und <strong> 0€&nbsp; Abhebungen bis 200 Pfund kostenlos</strong></li>
    <li><i className="fa-li fa fa-check-square text-info"></i>Okaye App, Debit MC</li>
    <li><i className="fa-li fa fa-check-square text-success"></i>Ohne Schufa</li>
    <li><i className="fa-li fa fa-check-square text-success"></i>Google Pay und Apple Pay</li>
    <li><i className="fa-li fa fa-check-square text-danger"></i>Nur E-Geld</li>
    <li><i className="fa-li fa fa-check-square text-danger"></i>belgische IBAN</li>
  </ul>
 </CardBody>
 <Button color="success" target="_blank" rel="noopener noreferrer" href="https://transferwise.com/de/multi-currency-account/">Jetzt beantragen</Button>
 </Card>
 <p>Das britische E-Geld-Institut bietet mit ihrem Konto die üblichen Leistungen ganz okay an. Abhebungen sind bis 200 Pfund kostenlos, danach 2%.</p>
 <p>Als IBAN wird eine belgische angeboten. Die Karte kommt für mit einem 226 service code und Offline-PIN.</p>
 <p>Die App ist ein wenig unübersichtlich und bietet eher weniger Push an. Gegen Gebühr Debitkarte kann das Konto in Echtzeit aufgeladen werden.</p>
 <p>Bei Fremdwährungen fällt eine Gebühr von 0.3%-1% an, abhängig von der Währung. Absicherung nur E-Geld</p>
 
 

<h3>Die Liste wird koninuierlich erweitert. </h3>
</Col>
</Row>
      </Container>
    );
  }
}

export default Recommended;

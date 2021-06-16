import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/custom.scss'

const SchoolPage = () => (
  <Layout>
    <SEO title="Tennisskola" />
    <div className="container" style={{margin: '0 1.9rem'}}>
      <h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Träna tennis</h1>
        <p>Klubben anordnar tennisskola för barn och ungdomar samt för vuxna. Träningen leds av klubbens utbildade tränare. För att gå i tennisskola krävs medlemskap i föreningen.</p>
        <br/>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Våra tränare: </h3>
      
          <p>Michal Mlocinski</p>
          <p>Klaudia Mlocinska</p>
          <p>Linn Bergman</p>
          
        <br/>     
        <br/>     
      <h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Intresseanmälan tennisskola barn/ungdom</h1>
      <p>
        Fyll i formuläret nedan för att anmäla intresse för tennisskolan. Observera att man har en plats först när det har bekräftats med ett mail tillbaka. Då medlemskap behövs för tennisskolan innebär det också att man tecknar sig för ett sådant om man får en plats och inte redan innehar ett.
        Normalt sett löper terminen 16 veckor med start från vecka tre under vårterminen med avbrott för lov. Under höstterminen börjar vi i slutet av augusti/början på september. 
        Lediga platser brukar utannonseras ca en månad innan terminen börjar.
        För allmänna frågor kan man maila till: 
        <br/>
        <a href="mailto:tennisskolan@hindastennisklubb.net">tennisskolan@hindastennisklubb.net</a>.
      </p>
      <div className="contact-form" style={{margin: '2rem 0'}}>
          <form method="post" action="#">
            <label>
            <p>Name</p>
                <input type="text" name="name" id="name" />
            </label>
            <label>
            <p>Personnummer</p>
                <input type="text" name="personnummer" id="personnummer" />
            </label>
            <label>
            <p>Email</p>
                <input type="email" name="email" id="email" />
            </label>
            <label>
            <p>Tidigare erfarenhet av tennis</p>
                <input type="text" name="erfarenhet" id="erfarenhet" />
            </label>
            <label>
            <p>Övrigt</p>
            <textarea name="message" id="message" rows="5" />
            </label>
            <div className="form-btns">
                <button type="submit" class="button is-success" style={{margin: '1rem 0'}}>Send</button>
                <input type="reset" class="button is-danger" value="Clear" />
            </div>
          </form>
          <br/>     
        <br/> 
      </div>
    </div>
  </Layout>
)

export default SchoolPage
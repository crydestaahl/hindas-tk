import * as React from "react"
import Layout from "../components/layout"

const MembersPage = () => {
  return (    
    <Layout>
    <div style={{margin: '1rem 1.9rem'}}>
      <h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}
      >
        Medlemsskap
      </h1>
      <p>För att ansöka om medlemskap, vänligen fyll i formuläret nedan.
      <br/> 
      <br/>
      För medlemsfrågor maila: <a href="mailto:medlem@hindasttennisklubb.net">medlem@hindastennisklubb.net</a></p>
    
    <div className="contact-form" >
        <form 
          name="Medlemsskapsanmälan"
          method="POST" 
          action="/thanks-members"
          data-netlify="true"
        >
        <input type="hidden" name="form-name" value="Medlemsskapsanmälan" />
            <label>
            <p>För- och efternamn</p>
                <input type="text" name="name" id="name" />
            </label>
            <label>
            <p>Medlemstyp</p>
              <div className="radio">
                <p>Vuxen</p>
                <input type="radio" value="vuxen" name="medlemstyp" id="vuxen" />
                <p>Junior </p>
                <input type="radio" value="junior" name="medlemstyp" id="junior" /> 
                <p>Familj </p>           
                <input type="radio" value="familj" name="medlemstyp" id="familj" />
              </div>  
            </label>
            <label>
            <p>Email</p>
                <input type="email" name="email" id="email" />
            </label>
            <label>
            <p>Subject</p>
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
            <p>Message</p>
            <textarea name="message" id="message" rows="5" />
            </label>
            <div className="form-btns">
                <button type="submit" class="button is-success" style={{margin: '1rem 0px;'}}>Send</button>
                <input type="reset" value="Clear" class="button is-danger" />
            </div>
        </form>
    </div>
    </div>
    </Layout>
  )
}
export default MembersPage
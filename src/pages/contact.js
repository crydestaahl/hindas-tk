import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact</h1>
    <p>Welcome to contact page</p>
    <div className="contact-form">
        <form method="post" action="#">
        <label>
        <p>Name</p>
            <input type="text" name="name" id="name" />
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
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </div>
        </form>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage

import React, { Component ,useState} from "react";
import { useAlert } from 'react-alert'
// export default class Contact extends Component {
const Contact=()=>{
  const alert = useAlert()
  // constructor(props) {
  //   super(props);
  //   this.submitForm = this.submitForm.bind(this);
  //   this.state = {
  //     status: ""
  //   };
  // }
  const submitForm=(ev)=> {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert.success("Message Sent, I'll answer to you ASAP!")
      } else {
        alert.error('There was an error, try again later')
      }
    };
    xhr.send(data);
  }
  
    
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <form
            onSubmit={submitForm}
            action="https://formspree.io/xzbjbprb"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </div>
            <div>
             <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  
}
export default Contact;
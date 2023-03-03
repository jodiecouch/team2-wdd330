import ExternalServices from "./ExternalServices.mjs";
import { alertMessage } from "./utils.mjs";

export default class Admin {
    constructor(outputSelector) {
      this.mainElement  = document.querySelector(outputSelector);
      this.token = null;
      this.services = new ExternalServices();

    }

async login(creds, next) {
        // I built the login method with a callback: next. 
        // This makes it much more flexible...
        // there could be many different things the user wants to do after logging in...
        // this allows us that flexibility without having to write a bunch of login methods
        try {
          this.token = await this.services.loginRequest(creds);
          next()
        } 
        catch(err) {
          // remember this from before?
          alertMessage(err.message.message);
        }
      }   


showLogin() {
        // add the html for the login form
        this.mainElement.innerHTML = loginFormTemplate();
        // now that it is in the DOM we can add a listener for the login button
        document.querySelector("#loginButton").addEventListener("click", (e) => {
          const email = document.querySelector("#email").value;
          const password = document.querySelector("#password").value;
          this.login({ email, password }, this.showOrders.bind(this));
        });
    }


 }


function loginFormTemplate(){
        return `<fieldset class="login-form">
        <legend>Login</legend>
        <p>
          <label for="email">Email</label>
          <input type="text" placeholder="email" id="email" value="user1@email.com"/>
        </p>
        <p>
          <label for="password">Password</label>
          <input type="password" placeholder="password" id="password" />
        </p>
        <button type="submit" id="loginButton">Login</button>
      </fieldset>`;
}
      // test

function orderTemplate(){
        return `<h2>Current Orders</h2>
        <table id="orders">
        <thead>
        <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
        </thead>
        <tbody class="order-body"></tbody>
        </table>
        `;
}


    
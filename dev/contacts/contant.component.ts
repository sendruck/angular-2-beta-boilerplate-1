import {Component} from "angular2/core";

@Component({
  selector: "contact",
  template: `
          <div>
            <label for="first-name">First Name:</label>            
            <input [(ngModel)]="contact.firstName" type="text"/>
          </div>
          <div>
             <label for="last-name">Last Name:</label>
            <input [(ngModel)]="contact.lastName" type="text"/>
          </div>
          <div>
            <label for="phone">Phone Number:</label>            
            <input [(ngModel)]="contact.phone" type="text"/>
          </div>
          <div>
            <label for="email">E-Mail:</label>            
            <input [(ngModel)]="contact.email" type="text"/>
          </div>
          <div>
           
          </div>
`,
      inputs: ["contact"],
      styles: [`
          label {
               display: inline-block;
              width: 140px;
          }
          
          input {
              width: 250px;
          }
`]
})
export class ContactComponent {
    public contact = {};
}

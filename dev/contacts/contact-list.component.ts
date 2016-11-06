import {Component} from "angular2/core";
import {ContactComponent} from "./contant.component";

@Component({
    selector: "contact-list",
    template: `
       <ul>
              <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact === contact"> 
                {{contact.firstName}} {{contact.lastName}}
              </li>
          </ul>
          <contact [contact]="selectedContact"></contact>
`,
    directives: [ContactComponent]
})
 export class ContactListComponent {
  public contacts = [
    {firstName: "Sasha", lastName: "Yakovenko",
      phone: "234 234", email: "ohyrec@gmail.com"},
    {firstName: "Stas", lastName: "Palamarchuk",
      phone: "234 238", email: "palamar@gmail.com"},
    {firstName: "Bogdan", lastName: "Bogun",
      phone: "235 232", email: "bbogun@gmail.com"}];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }

}


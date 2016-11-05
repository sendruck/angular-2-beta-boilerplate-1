import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
          <h3 
          (click)="onSelect()"
          [class.clicked]="showDetail === true"
          >{{contact.firstName}}</h3>
          <input [(ngModel)]="contact.firstName" type="text"/>
          <div *ngIf="showDetail === true">
            Phone Number: {{contact.phone}} <br>
            E-Mail: {{contact.email}}
          </div>
`,
      styleUrls: ["../src/css/app.css"]
}


)
export class AppComponent {
    public contact = {firstName: "Sasha", lastName: "Yakovenko",
      phone: "234 234", email: "ohyrec@gmail.com"};

    public showDetail = false;

    onSelect() {
      this.showDetail = true;
    }

}

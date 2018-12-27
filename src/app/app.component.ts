import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    name = 'FFF';
    address = {
        province: '广东',
        city: '广州'
    }
}

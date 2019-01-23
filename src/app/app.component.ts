import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    message: string = '123';
    ngOnInit() {

    }

    onClick(e, v) {
        this.message = v;
    }
    
    onEnter(e, v) {
        this.message = v;
    }
}

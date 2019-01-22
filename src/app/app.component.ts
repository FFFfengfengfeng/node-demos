import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    ngOnInit() {

    }

    onClick(e, v) {
        console.log(e);
        console.log(v);
    }
    
    onEnter(e, v) {
        console.log(e);
        console.log(v);
    }
}

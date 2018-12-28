import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    name = 'FFF';
    list = [
                {
                    name: 'FFF',
                    sex: '男'
                },
                {
                    name: 'ZZZ',
                    sex: '女'
                }
            ];
    showName = true;

    // constructor() {
    //     this.name = 'FFF';
    //     this.list = [
    //         {
    //             name: 'FFF',
    //             sex: '男'
    //         },
    //         {
    //             name: 'ZZZ',
    //             sex: '女'
    //         }
    //     ];
    //     this.showName = false;
    // }
}

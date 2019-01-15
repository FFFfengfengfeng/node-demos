import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    name: string;
    list: Array<object>;
    skills: Array<string>;
    showName: boolean;
    toggleShow: Function;
    addSkill: Function;

    constructor() {
        this.name = 'FFF';
        this.list = [
            {
                name: 'FFF',
                sex: '男'
            },
            {
                name: 'ZZZ',
                sex: '女'
            }
        ];
        this.skills = ['音乐', '篮球'];
        this.showName = false;
        this.toggleShow = () => {
            this.showName = !this.showName;
        },
        this.addSkill = (skill: string)=> {
            const _this = this;

            _this.skills.push(skill);
        }
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor() { }

    messages: Array<{id: number, content: string}> = [
        {
            id: 0,
            content: '2345',
        },
        {
            id: 1,
            content: '2345',
        },
    ];

    update(item) {
        const _this = this;

        console.log(item);

        if (_this.messages[item.id]) {
            return _this.messages[item.id].content = item.content;
        } else {
            return _this.messages.push(item);
        }
    }
}

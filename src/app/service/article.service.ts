import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor() { }

    lists: Array<object> = [
        {
            title: '123',
            content: '2345',
            time: '2019-01-23'
        },
        {
            title: '123',
            content: '2345',
            time: '2019-01-23'
        },
    ]
}

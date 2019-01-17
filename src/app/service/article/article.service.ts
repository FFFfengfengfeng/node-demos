import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }from 'rxjs';

import { ArticleListComponent } from '../../article-list/article-list.component';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }

    getArticles(): Observable<ArticleListComponent[]> {
        return this.http.get<ArticleListComponent[]>('http://localhost:7001/article/list');
    }
}

import { Component, OnInit } from '@angular/core';
import { article } from '../interface/article';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
    list: any

    constructor(private http: HttpClient, private dz: DomSanitizer) {
        this.list = [];
    }

    ngOnInit() {
        this.http
            .get('http://localhost:7001/article/list')
            .subscribe(data => {
                console.log(typeof data);
                this.list = data;
            }, error => {
                console.log(error);
            });
    }

    transformHtml(html: string) {
        return this.dz.bypassSecurityTrustHtml(html);
    }
}

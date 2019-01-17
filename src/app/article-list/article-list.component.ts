import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from '../service/article/article.service'; 

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
    list: any

    constructor(private http: HttpClient, private dz: DomSanitizer, private articleService: ArticleService) {
        this.list = [];
    }

    ngOnInit() {
        this.articleService.getArticles()
            .subscribe(data => {
                this.list = data;
            });
    }

    transformHtml(html: string) {
        return this.dz.bypassSecurityTrustHtml(html);
    }
}

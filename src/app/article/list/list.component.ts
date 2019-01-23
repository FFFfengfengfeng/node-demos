import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
    selector: 'article-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less']
})
export class ArticleList implements OnInit {

    constructor(private articleService: ArticleService) { }

    ngOnInit() {
    }
}

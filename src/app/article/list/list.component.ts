import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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


    @Input() content: string;
    @Input() id: number;
    @Output() update = new EventEmitter<{id: number, content: string}>();

    onClick(id, content) {
        console.log({id: id, content: content});
        this.update.emit({id: id, content: content});
    }
}

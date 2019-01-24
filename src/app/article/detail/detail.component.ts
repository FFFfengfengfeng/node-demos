import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'article-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class ArticleDetail implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() message: string;
    @Output() update = new EventEmitter<{text: string}>();
}

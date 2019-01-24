import { Component } from '@angular/core';
import { ArticleService } from './service/article.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    // message: string = '123';
    content: string = '789';
    id: number = 1;
    constructor(private articleService: ArticleService) {

    }

    ngOnInit() {
        
    }

    onClick(e, v) {
        // this.message = v;
    }
    
    onEnter(e, v) {
        // this.message = v;
    }

    onUpdate(e) {
        this.articleService.update(e);
    }
}

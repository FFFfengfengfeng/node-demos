import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArticleList } from './article/list/list.component';
import { ArticleDetail } from './article/detail/detail.component';
import { GoodsList } from './goods/list/list.component';
import { GoodsDetail } from './goods/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleList,
        ArticleDetail,
        GoodsList,
        GoodsDetail
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

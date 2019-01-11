import { Component, OnInit } from '@angular/core';
import { goods } from '../interface/goods';

@Component({
    selector: 'app-goods-list',
    templateUrl: './goods-list.component.html',
    styleUrls: ['./goods-list.component.less']
})
export class GoodsListComponent implements OnInit {
    list: Array<goods>

    constructor() {
        this.list = [
            {
                title: '商品1',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
            {
                title: '商品2',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
            {
                title: '商品3',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
            {
                title: '商品4',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
            {
                title: '商品5',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
            {
                title: '商品6',
                intro: '商品简介',
                time: '2019/01/11',
                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547197740565&di=b5d7d7caae1aa1de698ca79d2aef6df8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa50f4bfbfbedab648eab1f7cf736afc378311eb4.jpg'
            },
        ];
    }

    ngOnInit() {
        
    }

}

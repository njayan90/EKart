import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  data = [
    {
      name : 'Redmi 8',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70',
    },
    {
      name : 'Redmi 8A',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70'
    },
    {
      name : 'Realme 5',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
    },
    {
      name : 'Redmi Note 7S',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jw5a2kw0/mobile/p/z/5/oppo-reno-10x-zoom-cph1919-original-imafgwaxgbmhjhzc.jpeg?q=70'
    },
    {
      name : 'Realme C2',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
    },
    {
      name : 'Redmi Note 7S',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jw5a2kw0/mobile/p/z/5/oppo-reno-10x-zoom-cph1919-original-imafgwaxgbmhjhzc.jpeg?q=70'
    },
    {
      name : 'Realme 5',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
    },
    {
      name : 'Redmi 8A',
      addedToCart : false,
      imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70'
    },
  ]

  getDataList(){
    return this.data
  }

  addToCart(i){
    this.data[i].addedToCart = true
  }

}

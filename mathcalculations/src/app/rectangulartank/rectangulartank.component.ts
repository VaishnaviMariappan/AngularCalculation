import { Component } from "@angular/core";

@Component({
    selector:'Rectangulartank-Volume',
    templateUrl:'./rectangulartank.components.html'
})
export class RectangulartankComponent{
    height:number;
    length:number;
    width:number;
    volume:number;
    constructor(){
        this.height=0;
        this.length=0;
        this.width=0;
        this.volume=this.height*this.length*this.width;
    }
    onCalculate()
    {
        this.volume=this.height*this.length*this.width;
    }
}
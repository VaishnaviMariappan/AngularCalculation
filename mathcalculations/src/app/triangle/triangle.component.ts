import { Component } from "@angular/core";

@Component({
    selector:'Triangle-Area',
    templateUrl:'./triangle.component.html'
})
export class TriangleComponent{
    height:number;
    base:number;
    area:number;
    constructor(){
        this.height=0;
        this.base=0;
        this.area = 1/2*this.height*this.base;
    }
    onCalculate()
    {
        this.area = 1/2*this.height* this.base;
    }
}
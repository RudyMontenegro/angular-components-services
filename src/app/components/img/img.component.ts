import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';


 @Input('img')  //  @Input('') dejar el nombre en changeImg 
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>' , this.img)
    // code // se ejecuta cada ves que cambia el valor que viene del padre al hijo -- solo en este input.
  }
 @Input() alt: string = '';

 @Output() loaded = new EventEmitter<string>();

 imageDefault = './assets/images/placeholder.png';
 //counter = 0;
 //counterFn: number | undefined;

  constructor(){
    //-- No async -- once time
    console.log('constructor', 'imgValue => ', this.img);
    this.img = 'asas'
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes inputs
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log('changes',changes);
    // se ejecuta si solo un hijo cambia, usar un if(changes) si solo queremos q se ejecute cuando un  hijo cambia o...
  }

  ngOnInit(): void {
    // before render
    // asyn - fetch -- once time
    console.log('ngOnInit', 'imgValue => ', this.img);
    //this.counterFn = window.setInterval(() => {
    //  this.counter += 1;
    //  console.log('run counter');
    //}, 1000)
  }
  ngAfterViewInit(){
    // after render
    // handler children
    console.log('ngAfterView', 'imgValue => ', this.img);
  }

  ngOnDestroy(){
    // delate
    console.log('ngOnDestroy')
    //window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}

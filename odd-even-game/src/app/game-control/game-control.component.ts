import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  
  @Output()increamentCounterEvent=new EventEmitter<{counter:number}>();
  
  counter:number=0; 
  constructor() { }

  ngOnInit() {
  }

  
  startIncrementNumber(){
    console.log("start counting");
    this.interval=setInterval(() => {
      this.counter=this.counter+1;
      this.increamentCounterEvent.emit({        
        counter:this.counter
        
      });
    }, 1000);
  }
  stopIncrement(){
    clearInterval(this.interval);
  }


}


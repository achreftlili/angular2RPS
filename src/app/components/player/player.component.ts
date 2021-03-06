import { Component,  Input, Output, EventEmitter} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'player',
  templateUrl: 'player.component.html' ,
  styleUrls: ['player.component.css']
})
export class PlayerComponent {
  @Input() playerColor:string;
  @Input() playerNumber:string;
  @Input() playerClass:string;
  @Output() randomizingDone = new EventEmitter();

  public value = "question";

  init() {
    this.value = "question";
  }
  setChoice(choice) {
    this.value = choice;
    this.randomizingDone.next({player :this.playerNumber,value:this.value});
  }
  startRondomize() {
		var choices = ["rock", "paper", "scissors"];
    var RandomizeCounter = 0;
    var Randomize_Max = 20;
		var interval = setInterval(
			() => {
        if ( RandomizeCounter < Randomize_Max ) {
					var randomIndex = Math.floor(Math.random() * 3);
					this.value = choices[randomIndex];
          RandomizeCounter++;
        }else{
          clearInterval(interval);
          this.randomizingDone.next({player :this.playerNumber,value:this.value});
        }
			},
			100
		);
	}
}

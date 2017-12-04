import { Component, OnInit,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() OnServerCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() OnBlueprintserverCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('newServerContent') newServersContent:ElementRef;
  newServerName = '';
  //newServerContent = '';

  serverName;
  serverContent;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement) {
    this.OnServerCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServersContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.OnBlueprintserverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServersContent.nativeElement.value
    });
  }
}

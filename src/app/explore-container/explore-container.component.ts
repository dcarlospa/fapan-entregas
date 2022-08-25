import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  i = 0;
  j=0;
  private url = "https://ionicframework.com/docs/components";
  
  constructor() { }

  ngOnInit() {}

  meuAlert(){
    console.log(++this.i, 'Clicou no botão')
  }

  meuAlertA(){
    console.log(++this.j, 'Clicou no Strong')
  }

}

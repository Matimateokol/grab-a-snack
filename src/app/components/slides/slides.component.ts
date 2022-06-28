import { NgModule, Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slideOpts = {
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

}

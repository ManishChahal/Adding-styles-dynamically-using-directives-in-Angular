import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  buttonController : boolean = false;
  openAnimatedFlyoutLol : boolean = false;

  ngOnInit() {
  }

  buttonPopUpOpener()
  {
    this.buttonController = true;
  }

  buttonPopUpCloser()
  {
    this.buttonController = false;
    document.getElementById('mainContents').style.webkitFilter = 'blur(0)';
    document.getElementById('mainContents').style.filter = 'blur(0)';
  }

  openAnimatedFlyout()
  {
    this.openAnimatedFlyoutLol = true;
  }

}

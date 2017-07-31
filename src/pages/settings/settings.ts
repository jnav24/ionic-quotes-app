import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onToggle(toggle: Toggle) {
  	console.log(toggle);
  }
}

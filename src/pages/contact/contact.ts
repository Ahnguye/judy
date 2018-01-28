import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }




  foodAlert() {
  let alert = this.alertCtrl.create({
    title: 'Nutrition',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

ShelterAlert() {
let alert = this.alertCtrl.create({
  title: 'Shelter',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}

LaborAlert() {
let alert = this.alertCtrl.create({
  title: 'Labor Rights',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}

ImmagrationAlert() {
let alert = this.alertCtrl.create({
  title: 'Immagration',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}

LGBTAlert() {
let alert = this.alertCtrl.create({
  title: 'LGBT',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}

HealthAlert() {
let alert = this.alertCtrl.create({
  title: 'Health',
  subTitle: '10% of battery remainingjkhdakjsbjfvldsv zbfdnjsclkdlk;fzjlxfj g;nldvsfm;,d;fmklllnvslcm;,ad;dl;s;mf lklnlcmd;x,scldmfdkvnzzzl fkmc,l;ddm',
  buttons: ['Dismiss']
});
alert.present();
}

AbuseAlert() {
let alert = this.alertCtrl.create({
  title: 'Abuse',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}

WomenAlert() {
let alert = this.alertCtrl.create({
  title: 'Women',
  subTitle: '10% of battery remaininjkzcksnndsknkjn ksndskjn ;KNAKJNDSKJ;CND;KSJDJCNK;SDNC;KDSANCKJ;JN;KDJNCK;n;j;kdn;NJK;SDg',
  buttons: ['Dismiss']
});
alert.present();
}

CarAlert() {
let alert = this.alertCtrl.create({
  title: 'Low battery',
  subTitle: '10% of battery remaining',
  buttons: ['Dismiss']
});
alert.present();
}
}

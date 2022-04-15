import { CorreioService } from './../../services/correio.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  codigo: string;
  correio: any = {};
  eventosCollection: any[] = [];

  constructor(private _correioService: CorreioService, private toastController: ToastController) {}

  search() {
    this._correioService.getObjeto(this.codigo).then((data: any) => {
      if(data === undefined || data.objetos[0].eventos.length === 0)
      {
        this.enviarToast('Objeto não encontrado');
      }

      this.correio = data;
      this.eventosCollection = this.correio.objetos[0].eventos;
    })
    .catch(() => {
      this.enviarToast('Objeto não encontrado');
    });
  }

  async enviarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      color: 'dark',
      duration: 5000,
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    });
    toast.present();
  }
}

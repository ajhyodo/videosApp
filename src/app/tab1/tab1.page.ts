import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Vídeos App';
  listaVideos: IFilme[] = [
    {
      nome: 'Dr. Estranho (2022)',
      lancamento: '04/05/2022',
      duracao: '2h 6m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/drestranho',
    },
    {
      nome: 'Uncharted: Fora do Mapa (2022)',
      lancamento: '12/02/2022',
      duracao: '1h 56m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg',
      generos: ['Ação', 'Aventura'],
      pagina: '/uncharted',
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            // console.log('Confirm Okay');
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}

import { Component } from '@angular/core';
import {Disciplina} from '../../shared/modelo/disciplina';
import {DISCIPLINA} from '../../shared/modelo/DISCIPLINA';

@Component({
  selector: 'app-listagem-disciplina',
  templateUrl: './listagem-disciplina.component.html',
  styleUrls: ['./listagem-disciplina.component.css']
})
export class ListagemDisciplinaComponent {

  disciplina = DISCIPLINA;
  excluir(disciplinaARemover: Disciplina): void {
    const indx = this.disciplina.findIndex(disciplina =>
      disciplina.cpf === disciplinaARemover.código);

    this.disciplina.splice(indx, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-crmcontent',
  templateUrl: './crmcontent.component.html',
  styleUrls: ['./crmcontent.component.scss']
})
export class CRMContentComponent implements OnInit{
  formModal:any
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );

  }

  openFormModal(){
    this.formModal.show();

  }
  constructor(private router: Router){
  }

  columns = [
    { id: 'Column 1', content: 'Content 1' },
    { id: 'Column 2', content: 'Content 2' },
    { id: 'Column 3', content: 'Content 3' }
  ];

  columnss = [
    { id: 'Column 11', content: 'Content 1' },
    { id: 'Column 22', content: 'Content 2' },
    { id: 'Column 33', content: 'Content 3' }
  ];
  columnsss = [
    { id: 'Column 111', content: 'Content 1' },
    { id: 'Column 222', content: 'Content 2' },
    { id: 'Column 333', content: 'Content 3' }
  ];

  clients=[this.columns,this.columnss, this.columnsss]

   // Fonction pour déplacer un élément en avant
   deplacerElementAvant(category:any,id:any) {
    // Sélectionnez l'élément que vous souhaitez déplacer (par exemple, le premier élément ici)
    const elementADeplacer = this.clients[category].find((element) => element?.id === id);

    if (elementADeplacer) {
      // Remove the found element from 'columns'
      const index = this.clients[category].indexOf(elementADeplacer);
      if (index > -1) {
        this.clients[category].splice(index, 1);
      }
  
      // Add the found element to 'columnss'
      this.clients[category+1].push(elementADeplacer);
      console.log(this.columnss);
    }

  }
 

  
   // Fonction pour déplacer un élément en avant
   deplacerElementArriere(category:any,id:any) {
    // Sélectionnez l'élément que vous souhaitez déplacer (par exemple, le premier élément ici)
    const elementADeplacer = this.clients[category].find((element) => element?.id === id);

    if (elementADeplacer) {
      // Remove the found element from 'columns'
      const index = this.clients[category].indexOf(elementADeplacer);
      if (index > -1) {
        this.clients[category].splice(index, 1);
      }
  
      // Add the found element to 'columnss'
      this.clients[category-1].push(elementADeplacer);
      console.log(this.columnss);
    }

  }
}

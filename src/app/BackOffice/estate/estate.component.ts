import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EstateDataSource, EstateItem } from './estate-datasource';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})
export class EstateComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EstateItem>;
 

  
  constructor(private sre : ServiceRealestateService) {
  }

  ngAfterViewInit(): void {
    /*this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;*/
  }

  estates :any[]| undefined; ; 
 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['id', 'type','price','surface','number_floor ','roomNumber'
 ,'nbr_appartment' ,'equiped','nbr_office','garden','pool','capacity','legal_status'];

  ngOnInit(): void {
   this.getAll(); 
 }

 dataSource: any;
  getAll(){
    this.sre.GetAll().subscribe((response: any )=> {
      this.estates = response;
      this.dataSource= new MatTableDataSource
    console.log(response)
    });
  }
}

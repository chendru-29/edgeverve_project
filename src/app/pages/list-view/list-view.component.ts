import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})


export class ListViewComponent implements OnInit,AfterViewInit  {

  showFiller :boolean = false;
  panelOpenState :boolean = false;
  constructor() { }


  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['check','document_type', 'language', 'domain', 'intents','entities','documents','assigned','tagged','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  language: string;
  check:boolean,document_type: number;
  domain: number;
  intents: string;
  entities: number;
  documents:number;
  assigned:number;
  tagged:number;
  status:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check:false,document_type: 1, language: 'Hydrogen', domain: 1.0079, intents: 'H',entities:0,documents:0,assigned:0,tagged:0,status:10},
  {check:false,document_type: 2, language: 'Helium', domain: 4.0026, intents: 'He',entities:22,documents:50,assigned:0,tagged:0,status:0},
  {check:false,document_type: 3, language: 'Lithium', domain: 6.941, intents: 'Li',entities:40,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 4, language: 'Beryllium', domain: 9.0122, intents: 'Be',entities:0,documents:60,assigned:0,tagged:0,status:0},
  {check:false,document_type: 5, language: 'Boron', domain: 10.811, intents: 'B',entities:70,documents:60,assigned:0,tagged:0,status:0},
  {check:false,document_type: 6, language: 'Carbon', domain: 12.0107, intents: 'C',entities:90,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 7, language: 'Nitrogen', domain: 14.0067, intents: 'N',entities:50,documents:60,assigned:0,tagged:0,status:0},
  {check:false,document_type: 8, language: 'Oxygen', domain: 15.9994, intents: 'O',entities:660,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 9, language: 'Fluorine', domain: 18.9984, intents: 'F',entities:60,documents:870,assigned:0,tagged:0,status:0},
  {check:false,document_type: 10, language: 'Neon', domain: 20.1797, intents: 'Ne',entities:90,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 11, language: 'Sodium', domain: 22.9897, intents: 'Na',entities:80,documents:100,assigned:0,tagged:0,status:20},
  {check:false,document_type: 12, language: 'Magnesium', domain: 24.305, intents: 'Mg',entities:30,documents:30,assigned:0,tagged:0,status:0},
  {check:false,document_type: 13, language: 'Aluminum', domain: 26.9815, intents: 'Al',entities:30,documents:40,assigned:0,tagged:0,status:40},
  {check:false,document_type: 14, language: 'Silicon', domain: 28.0855, intents: 'Si',entities:50,documents:50,assigned:0,tagged:0,status:0},
  {check:false,document_type: 15, language: 'Phosphorus', domain: 30.9738, intents: 'P',entities:70,documents:80,assigned:0,tagged:0,status:0},
  {check:false,document_type: 16, language: 'Sulfur', domain: 32.065, intents: 'S',entities:0,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 17, language: 'Chlorine', domain: 35.453, intents: 'Cl',entities:70,documents:90,assigned:0,tagged:0,status:0},
  {check:false,document_type: 18, language: 'Argon', domain: 39.948, intents: 'Ar',entities:50,documents:0,assigned:0,tagged:0,status:0},
  {check:false,document_type: 19, language: 'Potassium', domain: 39.0983, intents: 'K',entities:0,documents:90,assigned:0,tagged:0,status:0},
  {check:false,document_type: 20, language: 'Calcium', domain: 40.078, intents: 'Ca',entities:50,documents:0,assigned:0,tagged:0,status:0},
];






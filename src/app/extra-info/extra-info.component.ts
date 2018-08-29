import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MovieDetails} from '../models/movie-details';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExtraInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MovieDetails) { }

  ngOnInit() {
  }

  onCloseClick(){
    this.dialogRef.close();
  }

}

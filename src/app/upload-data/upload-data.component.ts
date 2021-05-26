import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {

  fileArr = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress: number = 0;

  constructor(
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      avatar: [null]
    })
  }

  ngOnInit() { }

  upload(e) {
    console.log(e);
    
    const fileListAsArray: File[] = Array.from(e);
    
    const file: File = fileListAsArray[0];
    const reader: FileReader = new FileReader();
    if (file) reader.readAsText(file);
    reader.onload = (e) => {
      const json: string = reader.result as string;
      const payload = JSON.parse(json);
      console.log(payload);
    }

  }

}

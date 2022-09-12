import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SubmitForm } from 'src/app/store/form.store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  formData = new FormGroup({
    name: new FormControl()
  });

  onSubmit() {
    console.log('submit')
    this.store.dispatch(new SubmitForm())
    //
  }
}

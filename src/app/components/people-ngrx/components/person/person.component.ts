import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input()
  public person: PersonModel;

  @Output()
  public onSave: EventEmitter<PersonModel>;

  public editForm: FormGroup;
  public isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.onSave = new EventEmitter<PersonModel>();
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      jobTitle: ['', [Validators.required]]
    });
  }

  public editPerson(): void {
    this.editForm.patchValue(this.person);
    this.isEditing = true;
  }

  public cancelEdit(): void {
    this.isEditing = false;
  }

  public savePerson(person: PersonModel): void {
    this.onSave.emit(person);
    this.isEditing = false;
  }
}

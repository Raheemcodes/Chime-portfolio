import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-backdoor',
  templateUrl: './backdoor.component.html',
  styleUrls: ['./backdoor.component.scss'],
})
export class BackdoorComponent implements OnInit {
  musicForm = this.sharedService.musicForm;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  get favoriteForm(): FormGroup {
    return <FormGroup>this.musicForm.get('favoriteForm');
  }

  get playlistFormArray() {
    return <FormArray<FormGroup>>this.musicForm.get('playlistFormArray');
  }

  onSubmit() {
    console.log(this.musicForm.value);
  }
}

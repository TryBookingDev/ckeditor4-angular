import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorComponent } from './ckeditor.component';

@NgModule({
	imports: [ FormsModule, CommonModule ],
	declarations: [ CKEditorComponent ],
	exports: [ CKEditorComponent ]
} )
export class CKEditorModule { }
import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { updatedHierarchyOrderData } from './data';
import {

  GridAllModule,
} from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GridAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public data: Object[] = [];
  public filterSettings?: Object;
  public toolbar?: string[];
  public editSettings?: Object;
  public orderidrules?: Object;
  public customeridrules?: Object;
  public freightrules?: Object;
  ngOnInit(): void {
     if (!isDevMode()) {
    // Production mode
    console.log('Production mode!');
  } else {
    console.log('Development mode!');
  }
    this.data = updatedHierarchyOrderData;
    this.filterSettings = {
      mode: 'Immediate',
      showFilterBarOperator: true,
      showFilterBarStatus: false,
      enableCaseSensitivity: false, // This is explicitly set to false
      operators: {},
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true, minLength: 5 };
    this.freightrules = { required: true, min: 0 };
  }
}

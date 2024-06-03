import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  columns: Table.IColumn[] = [
    {
      header: 'Room Name',
      property: 'roomName',
    },
    {
      header: 'Price',
      property: 'roomPrice',
    },
    {
      header: 'Discount',
      property: 'roomDiscount',
    },
    {
      header: 'Capacity',
      property: 'roomCapacity',
    },
    {
      header: 'Created By',
      property: 'createdBy',
    },
    {
      header: 'Active',
      property: 'isActive',
      isBoolean: true
    }
  ];
  operators: Table.IOperators[] = [
    {
      icon: 'edit_square',
      title: 'Edit',
    },
    {
      icon: 'visibility',
      title: 'View',
    },
    {
      icon: 'delete',
      title: 'Delete',
    },
  ];
}

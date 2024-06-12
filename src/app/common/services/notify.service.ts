import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

constructor() { }

Success(message:string){
  Swal.fire({
    text: message,
    icon: 'success',
    showConfirmButton: false,
    timer:1500
  })
 }

 Error(message:string){
  Swal.fire({
    text: message,
    icon: 'error',
    showConfirmButton: false,
    timer:1500
  })
 }

 ServerError(message:string){
  Swal.fire({
    text: message,
    icon: 'error',
    showConfirmButton: false,
    timer:5000
  })
 }

 listOfError(message:String[]){
   let error=(message:any[])=>{
    let data='';
    for (let i = 0; i < message.length; i++) {
      data+=`<p>${message[i]}</p>`
    }
    return data
   }
   Swal.fire({
    html: error(message),
    icon: 'error',
    showConfirmButton: false,
    timer:5000
  })

 }


Warning1(message: string, cancelButtonText: string) {
  Swal.fire({
    icon: 'warning',
    text: message,
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: cancelButtonText,
  })
}


  async Warning2(message: string, confirmButtonText: string, cancelButtonText: string) {
  const result = await Swal.fire({
    text: message,
    icon: 'warning',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    confirmButtonColor: '#434343',
  });
  return result.value;
}

  async Warning3(message: string, confirmButtonText: string) {
  const result = await Swal.fire({
    position: 'top-end',
    showConfirmButton: true,
    icon: 'warning',
    confirmButtonColor: '#434343',
    confirmButtonText: confirmButtonText,
    text: message,
  });
  return result.value;
}

}

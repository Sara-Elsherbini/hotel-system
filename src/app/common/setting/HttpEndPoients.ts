export class HttpEndPoints {
  public static Auth = {
   login:'admin/users/login',
   register:'admin/users',
   forgetPass:'admin/users/forgot-password',
   resetPass:'admin/users/reset-password'


  }
  public static Facilities={
    FacilitiesList:'admin/room-facilities',
    addFacilities:'admin/room-facilities',
    editFacilities:'admin/room-facilities'
  }
  public static Rooms={
    RoomsList:'admin/rooms',
    addRoom: 'admin/rooms',
    editRoom: 'admin/rooms',




  }

}

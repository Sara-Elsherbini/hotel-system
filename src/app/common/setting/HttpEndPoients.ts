export class HttpEndPoints {
  public static Auth = {
    login: 'admin/users/login',
    register: 'admin/users',
    forgetPass: 'admin/users/forgot-password',
    resetPass: 'admin/users/reset-password'


  }

  public static Facilities = {
    FacilitiesList: 'admin/room-facilities',
    addFacilities: 'admin/room-facilities',
    editFacilities: 'admin/room-facilities',
    FacilitiesDelete: 'admin/room-facilities/',
  }
  public static Rooms = {
    RoomsList: 'admin/rooms',
    addRoom: 'admin/rooms',
    editRoom: 'admin/rooms',
  }

  public static Ads = {
    AdsGeneral: 'admin/ads',
  }
  public static booking = {
    bookingList: 'admin/booking',
  }

  public static Users={
    usersList:'admin/users',
   
  }

}


export class HttpEndPoints {

  public static Auth = {
    general: 'admin/users',
    login: 'admin/users/login',
    register: 'admin/users',
    forgetPass: 'admin/users/forgot-password',
    resetPass: 'admin/users/reset-password'
  }

  public static Facilities = {
    FacilitiesList: 'admin/room-facilities',
    addFacilities: 'admin/room-facilities',
    editFacilities: 'admin/room-facilities',
    deleteFacilities: 'admin/room-facilities/',
  }
  public static Rooms = {
    RoomsList: 'admin/rooms',
    addRoom: 'admin/rooms',
    editRoom: 'admin/rooms',
    deleteRoom: 'admin/rooms/',

  }

  public static Ads = {
    AdsGeneral: 'admin/ads',
    deleteAds: 'admin/ads/',

  }
  public static booking = {
    bookingList: 'admin/booking',
    bookingdelete: 'admin/booking/',


  }


  public static Users = {
    usersList: 'admin/users',


  }
  public static Home = {
    Dashboard: 'admin/dashboard',

  }


  // public static AddUsers={
  //   addUser:'admin/users',


  // }
 public static User={
  home:{
   GetAllads:'portal/ads',
   Getallroom:'portal/rooms/available',
      GetRoomById:'portal/rooms'
  },
  fav:{
    favoriteRooms:'portal/favorite-rooms',
    deleteFavoriteRooms:'portal/favorite-rooms',
    addToFav:'portal/favorite-rooms',
  },
  }


 public static Review = {
  Default: "portal/room-reviews"
 }

 public static Comment = {
  Default: "portal/room-comments"
 }
 public static UserBooking = {
  Default: "portal/booking",
  GetForUser: "portal/booking/my",

 }
}


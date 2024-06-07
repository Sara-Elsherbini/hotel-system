export class RoutePaths {
  public static Auth = {
    Login: '/auth/login',
    Register: 'register',
    ResetPass: 'reset-pass',
    forgetPass: 'forget-pass'
  }

  public static User = {
    home: "home",
    explore: "explore",
    reviews: "/reviews",
    favorites: "/favorites",
    roomDetails: "/room/:id"
  }

  public static Dashboard = {
    Dashboard: 'dashboard'
  }

  public static Admin = {
    Facilities: {
      FacilitiesList: 'facilities',

    },
    Home: {
      HomeComponent: 'home'
    },
    Room: {
      RoomList: 'rooms',
      add: 'add',
      edit: 'edit/:id'
    },
    Ads: {
      AdsList: "ads",
    },

    Booking: {
      bookingList: "booking"
    },
    Users: {
      usersList: "users",
      ViewUsers: "users"
    }

  }
}

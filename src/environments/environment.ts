// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAnm_O51EBEhHRrZQrB4QlzA6OCoB-KHtY",
        authDomain: "gestion-de-dispositivos.firebaseapp.com",
        databaseURL:
            "https://gestion-de-dispositivos-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "gestion-de-dispositivos",
        storageBucket: "gestion-de-dispositivos.appspot.com",
        messagingSenderId: "188562560044",
        appId: "1:188562560044:web:acdca3efa6c67af9e0ed89",
        measurementId: "G-20H7XK0SK5",
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

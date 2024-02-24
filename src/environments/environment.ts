// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
    firebaseConfig :{
    apiKey: "AIzaSyDeLFqC6xrVqWGyiCMI3mMCzso4ykOThDs",
    authDomain: "bookswap-f6365.firebaseapp.com",
    projectId: "bookswap-f6365",
    storageBucket: "bookswap-f6365.appspot.com",
    messagingSenderId: "992570409324",
    appId: "1:992570409324:web:b5a37283a1afad8d287349",
    measurementId: "G-VBZSBQCR07"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

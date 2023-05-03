var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "personalblogs-5a82d",
      "private_key_id": "11bb1b148b9ee7acdc51dda8a07331c1d4ab85d4",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCKXFAq9brCgkuf\nQxX2fBnCi7jKbwS85xoVknG+dFBTLLTWCeKZBK1gYyrLJZuKO9bmD8oKjG7eXU1r\nusjgfhZ5hABj7JxXprFy54FN1s1PO00E1HJoRlYaSKyUQGmN3o9bUvHkdcMzmNXO\n7dBbbfLuv5ipb9OpghhD+qsiA6e/qbnyp/vYsBiyxl1tLceg6wIcG3h7x1LKGC8Q\nFMBIa38pNiEJyGGfRCbdCJSGCVnk6Z+7I5gTONFufLdeSbB4kGhtTIn+5GUiSbK9\ntHinMpzk5MGFesMBm5LOe3xLTvfDuTpEuduHwTQWyyEz97Wqu0iIXh17GM+gRNrT\nPfwwjLzPAgMBAAECggEAPbsiKYipYs8vXkdYLTkBZUNhlzAhNQcHJEjKZucOT43K\nwRR3/T2Q/UhBd5G369z27H5u7nXpoVyPhlk39rFK5bx3UB3pQ1IkKdgQYOJNh+Q1\nYMpIoS2AjQmPtjVm4t1BqMVBF2VTSloOStzf8WsE0HC7dB1ommBo4yub3vkyhthT\nIjzJwDupeFJNaUxI0hFhZOEamgIGOoD+nd8u5ZEunKHOTPg9Q//uwEB7qwQtd+9Z\n1iyYlB2McxmpKcKIwX+DaWbMO6F3zA3Hm2jDJ5eyeeGMXn3I0muiXxIHwiE1MWs+\nzNWlcSixr2/aPc5YvWwdeDV5rWCNr266gegU2b4NQQKBgQC+pfpbhQrQxNDmcG94\n256A8fRvWoBp9CT1aw3dA8JpLktBQTWMXBQUrgNjLpYJZtN7FXiElo4lv9+f77hI\ny8q6F+/XOy3iDIz23gIXi0OYZOBnPHmYE5XY2NnOxTLn5zjtnsK7DeEnIeu5pq8B\nGadCFSTSWE++73GshZP6duex/QKBgQC5yemL5p1ICORBKguLXuEr3rJII8IKIrjN\nF0h5dvMDOnDoMvqLVQCy/wyDQkylxDm1X6QVO1W0tjHSRX3XbNKGisi46CeHPTEK\nPUS1J77hmxZwRxg3mvwWvX16E8tPgXGorniuz1dyGDrdB/2iUrL+N6nDTSQFjefl\nYpVs8SltuwKBgQCyMeE3+bqKN+wp9525kU0tqPmXuzeb0R9aZJ2onwLv3N1qONEc\nSFRcn+l6ouiKERpKSV9ETpS+pAEZNK9DG3h5SDZdLmtMhf6cIBZEe17K6j71P4lH\no8bD0KyEn71dFLoZH/NTcz2nngT+mdWpaZj0I18vXGvtQ1E0uAYAbXNS4QKBgQCl\ndEdkq8/N4v1DeyokyC5HX1/uFsorNJjXLLECWwg4C8eZQi0WAHFK9xAxpM2Vopay\nC6aYseq1sLvVwsU7IFKsNtRit3zcV4Zg1AdoPSkkyXTGMMpEWuW9aqtgGFirSV/r\nFNWs+EGr/iANz5v0/ykgdHnez8gQmju2cIEaL/rxGQKBgE4i+VY0cV1/XDozrSIf\n6RrmrKNrWulVfDXdnSXReotVl5DCyp6sXHgSyeSfXur06puAHBbhEkcYKmg7QwzB\n9k8BwoRPAdBceUtzfo0NqjrtvTDBCMCHTxYCgOh2lmNBng+WHzAm//eOAxE8SXJT\njISAy9HyXGpQZU5CJDJcvVzU\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-i3cmd@personalblogs-5a82d.iam.gserviceaccount.com",
      "client_id": "114109427802093756303",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i3cmd%40personalblogs-5a82d.iam.gserviceaccount.com"
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();

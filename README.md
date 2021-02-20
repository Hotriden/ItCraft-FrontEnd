# ItCraftAngluarPart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

proxy.conf.json
{
  "/api/*": {
     "target":  {
       "host": "localhost",
       "protocol": "http:",
       "port": 80
     },
     "secure": false,
     "changeOrigin": true,
     "logLevel": "info"
  }
}

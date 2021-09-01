import AuthService from "./AuthService";

//Estas son las lineas que debes switchear cuando estes haciendo tus pruebas
const hostURL = "https://api.ccscontactcenter.com";
//const hostURL = 'http://localhost:8082'

export default class API_CCS {
  constructor() {
    this.Auth = new AuthService();
    this.fetch = this.fetch.bind(this);
  }

  async fetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (await this.Auth.loggedIn()) {
      headers["Authorization"] = "Bearer " + (await this.Auth.getToken());
    } else {
      window.location.href = "/login";
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }


  getCampaignAvatar(id) {
    return this.fetch(hostURL + "/v1/Campaigns/Avatar?id=" + id, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  insertarEncuesta(data){

    /*Esta función está bien, solamente que cuando hagas tus pruebas, debes de cambiar 
    la variable hostURL (Lineas 3 y 4 de este archivo), para apuntar a localhost y no a api.ccscontactcenter
    cuando ya este probado y funcionando en localhost, publicamos tu endpoint en producción (api.ccscontactcenter.com), pero ese es otro paso
    */



    return this.fetch(hostURL + "/v1/capacitacion/formularioEncuesta", {
      method: "POST",
       body: JSON.stringify(data),
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  guardaActividad(data){
    return this.fetch(hostURL + "/v1/capacitacion/Actividades", {
      method: "POST",
       body: JSON.stringify(data),
    }).then(res => {
      return Promise.resolve(res);
    });
  }


}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAdapterService {

  constructor(private _http: HttpClient) {}

  /**
   * Makes a GET request to the specified URL with optional parameters.
   *
   * @param {string} url - The URL to send the GET request to.
   * @param {HttpParams} [params] - Optional parameters to include in the request.
   * @returns {Promise<T>} - A promise that resolves with the response data of type T.
   */
  async get<T>(url: string, params?: HttpParams): Promise<T> {
      return firstValueFrom(
          this._http.get<T>(url, {
              params: params,
          })
      ).catch((err) => Promise.resolve(err));
  }

}

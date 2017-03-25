import {HttpInterceptorBackend} from "./http-interceptor-backend";
import {RequestOptions, Http} from "@angular/http";

export function httpFactory(httpInterceptorBackend: HttpInterceptorBackend, requestOptions: RequestOptions): Http {
  return new Http(httpInterceptorBackend, requestOptions);
}

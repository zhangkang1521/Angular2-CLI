import {ConnectionBackend, XHRBackend} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpInterceptorBackend implements ConnectionBackend {

  constructor(private xhrBackend: XHRBackend){}

  createConnection(request: any) {
    console.log('-------- before request --------');
    console.log(request);
    let result = this.xhrBackend.createConnection(request);
    result.response.subscribe(res => {
      console.log(res);
    });
    console.log('-------- after request --------');
    return result;
  }

}

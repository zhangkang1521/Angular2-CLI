import {Jsonp, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class WikipediaService {

  constructor(private jsonp:Jsonp) {}

  search(term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(wikiUrl, {search: params})
      .map(response => <string[]> response.json()[1]);
  }
}

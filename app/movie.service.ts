import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMoviesAsync() {
    return this.http
      .get('/movies.json')
      .map(rsp => rsp.json());
  }

  getMoviesSync() {
    return [{
        "poster_path":"http://image.tmdb.org/t/p/w150/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        "id":278,
        "title":"The Shawshank Redemption"
    }, {
        "poster_path":"http://image.tmdb.org/t/p/w150/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
        "id":244786,
        "title":"Whiplash"
    }, {
        "poster_path":"http://image.tmdb.org/t/p/w150/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
        "id":238,
        "title":"The Godfather"
    }, {
        "poster_path":"http://image.tmdb.org/t/p/w150/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        "id":157336,
        "title":"Interstellar"
    }]; 
  }
}

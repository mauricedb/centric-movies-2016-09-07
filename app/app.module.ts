import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule 
  ],
  declarations: [ 
    AppComponent, 
    MoviesComponent,
    MovieComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

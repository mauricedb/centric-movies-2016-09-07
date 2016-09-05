import { 
  Component, 
  OnInit, 
  Input 
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent 
  implements OnInit {

  @Input() movie: any;
  
  constructor() { }

  ngOnInit() {
  }

}

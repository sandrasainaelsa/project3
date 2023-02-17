import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artform',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent {
artform=data
  // ngOninit():void
  // {
    // this.artform=data
  // }
  constructor(private router:Router){}

  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single'])
  }
  
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: String;
  public emailUser: String;
  public photoUsuario: String; 

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      this.authService.getAuth().subscribe( auth =>{
        if(auth){
          this.isLogin = true;
          this.nombreUser = auth.displayName;
          this.emailUser = auth.email;
          this.photoUsuario = auth.photoURL;
        }else{
          this.isLogin = false;
        }
      }

      )
     
    });
  }

  onClickLogout(){
    this.authService.logout();
  }

}

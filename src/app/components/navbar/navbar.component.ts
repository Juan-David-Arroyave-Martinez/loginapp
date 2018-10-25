import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: String;
  public emailUser: String;
  public photoUsuario: String; 

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {

        if(auth){
          this.isLogin = true;
          this.nombreUser = auth.displayName;
          this.emailUser = auth.email;
          this.photoUsuario = auth.photoURL;
        }else{
          this.isLogin = false;
        }

     
    });
  }

  onClickLogout(){
    this.authService.logout();
  }

}

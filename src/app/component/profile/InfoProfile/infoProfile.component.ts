import { Component} from "@angular/core";
import {UserService} from "../../../service/userService";
import { UserModel} from "../../../model/user";
import {error} from "util";

@Component({
  selector: 'app-info-profile',
  templateUrl: './infoProfile.component.html',
  styleUrls: ['./infoProfile.component.css']
})

export class InfoProfileComponent {
   private username: string;
   private userModel:UserModel;
  private data: any;

  constructor()
  {
    this.userModel= JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.userModel);
  }

  //
  // constructor (private userSerivce: UserService){
  //   this.username = JSON.parse(localStorage.getItem("token")).username;
  //   this.userSerivce.getProfileByLogin(this.username).subscribe(
  //     data => {
  //       this.user = data;
  //     }, error => {
  //       console.log("error find user");
  //     }
  //   );
  // }

}

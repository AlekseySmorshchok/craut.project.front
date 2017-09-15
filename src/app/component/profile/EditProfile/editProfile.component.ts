import { Component} from "@angular/core";
import {UserService} from "../../../service/userService";
import { UserModel} from "../../../model/user";
import {ImageComponent} from "../../imageArea/image.component";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css'],
  providers: [ImageComponent]
})

export class EditProfileComponent {
  protected user: UserModel = new UserModel();
  protected confirmPassword: string;
  constructor (private userService: UserService,
               private imageComponent: ImageComponent) {
  }
  updateProfile(data: any) {
    this.userService.updateProfile(this.user).subscribe(data => {
      console.log(data);
    });
  }
  checkConfirmPassword(){}
}

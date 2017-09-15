import {Component, EventEmitter, Output} from "@angular/core";
import {CloudinaryImageComponent, CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {UserModel} from "../../model/user";

@Component({
  selector: 'app-cloudinary',
  templateUrl: './CloudinaryComponent.html',
  styleUrls:["./CloudinaryComponent.css"]
})
export class CloudinaryComponent{
  // cloudinaryImage: any;
  //
  // uploader: CloudinaryUploader = new CloudinaryUploader(
  //   new CloudinaryOptions({ cloudName: 'crowbanding', uploadPreset: 'f4k1c585' })
  // );
  //
  // constructor() {
  //   //Override onSuccessItem function to record cloudinary response data
  //   this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
  //     //response is the cloudinary response
  //     //see http://cloudinary.com/documentation/upload_images#upload_response
  //     this.cloudinaryImage = JSON.parse(response);
  //
  //     return {item, response, status, headers};
  //   };
  // }
  cloudinaryImage: any;
  @Output() upImg: EventEmitter<any> = new EventEmitter();
  @Output() upImgStep: EventEmitter<any> = new EventEmitter();
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'crowbanding', uploadPreset: 'f4k1c585' })
  );
  private data:any;
  constructor(){

    this.uploader.onAfterAddingFile = (item: any) => {
      this.uploader.uploadAll();
      return item;
    };
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.upImg.emit(JSON.parse(response).public_id);
      this.upImgStep.emit(JSON.parse(response).public_id);
      localStorage.setItem("image",JSON.parse(response).public_id);
      console.log('it public url: ' + JSON.parse(response).public_id);
      return {item, response, status, headers};
    };
  }
}

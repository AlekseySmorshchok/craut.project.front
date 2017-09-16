import { Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {Project} from "../model/project";
import {Http,Response} from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProjectService extends CoreService{
 private project:Project = new Project;
 constructor(private http: Http,
             private authHttp: AuthHttp){
   super();
 }
 sendProjectData(data: any){
   data.dwy=data.dwy.formatted
   console.log(data);
   return this.http.post(`${this.webService}sendData`, data).map((response: Response) => response);
 }
}

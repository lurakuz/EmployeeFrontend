import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDto } from "./model/user.model";

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    private baseURL = "http://localhost:8080/api/v1/registration";

    constructor(private httpClient: HttpClient) { }

    createUser(user: UserDto): Observable<Object>{
        return this.httpClient.post(this.baseURL, user)
    }
}
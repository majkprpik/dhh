import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
let counter = 0;

@Injectable()
export class UserService {
  private users = {
    nick: { name: "Nick Jones", picture: "assets/images/nick.png" },
    eva: { name: "Eva Moor", picture: "assets/images/eva.png" },
    jack: { name: "Jack Williams", picture: "assets/images/jack.png" },
    lee: { name: "Lee Wong", picture: "assets/images/lee.png" },
    alan: { name: "Alan Thompson", picture: "assets/images/alan.png" },
    kate: { name: "Kate Martinez", picture: "assets/images/kate.png" }
  };

  private userArray: any[];
  config = {
    heroesUrl: "api/heroes",
    textfile: "assets/textfile.txt"
  };
  constructor(private http: HttpClient, private authService: NbAuthService) {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }

  getCurrentUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmRlZmY0NjdmYzJkNTBmNmM1ZTYwNTEiLCJ1c2VybmFtZSI6InZlZHJhbkB2ZWRyYW4uY29tIiwicGFzc3dvcmQiOiJ2ZWRyYW4iLCJfX3YiOjAsImNyZWRpdHMiOjAsImlhdCI6MTU0MTQyOTc3N30.bXTDaw8RZA0yL3ByZPACqEnt_dBMhhfuEBEtSfLYdDg"
      })
    };
    return this.http.get("api/current_user", httpOptions);
  }
}

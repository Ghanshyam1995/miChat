import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class FriendService {

  constructor(private _http :Http) { }
  GetFriendSuggestion()
  {
    return this._http.get("/Users/FriendSuggestion").map(res=>res.json());
  }
}

import { Component, OnInit } from '@angular/core';
import { FriendService } from "app/friend.service";

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.css']
})
export class FindFriendComponent implements OnInit {
Users :any[];
  constructor(private friendService :FriendService) { }

  ngOnInit() {
      this.friendService.GetFriendSuggestion().subscribe(users=>{
             this.Users=users;
      })
  }

}

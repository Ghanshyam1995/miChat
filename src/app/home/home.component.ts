import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public search: boolean;
    public sidebarModeOpen: boolean;
    @Input() menuWidth;
    ngOnInit() {
        this.search = false;
        this.menuWidth = 60;
        this.sidebarModeOpen = false;
    }
    ToggleSearch(search: string): void {
        this.search == false ? this.search = true : this.search = false;
    }
    ToggleMenu(): void {
        this.menuWidth == 60 ? this.menuWidth = 250 : this.menuWidth = 60;
        if (this.menuWidth == 60)
            this.sidebarModeOpen = false;
        else
            this.sidebarModeOpen = true;
    }
    ToggleSidebar(event): void {
        if (this.sidebarModeOpen == false && event.type == "mouseleave")
            this.menuWidth = 60;
        else if (this.sidebarModeOpen == false && event.type == "mouseenter")
            this.menuWidth = 250;
    }

}

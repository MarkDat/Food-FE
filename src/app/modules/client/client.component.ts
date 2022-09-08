import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '@app/shared/services/app-info.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(public appInfo: AppInfoService) {}

  ngOnInit(): void {
  }

  isAuthenticated() {
    return true;
  }

}

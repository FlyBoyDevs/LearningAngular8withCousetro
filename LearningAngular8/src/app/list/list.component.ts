import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpHandlerService} from '../http-handler.service';
import {Brew} from '../brew.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Brew[];

  constructor(private httpHandler: HttpHandlerService) { }

  ngOnInit() {
    this.httpHandler.getBeer().subscribe(
      data => {
        this.brews = data;
      }
    );
  }

}

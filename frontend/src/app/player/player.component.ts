import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {VgApiService, VgEvents} from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit,OnChanges {
  @Input('video') public video: string = '../../assets/ep21.mp4'
  preload: string = 'auto';

  constructor(public api: VgApiService) {}

  ngOnInit(): void {

  }

  onPlayerReady(api: VgApiService) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.api.getDefaultMedia().currentTime = 0;
        }
    )
  }

  ngOnChanges(): void {

  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {
  @Input('series') series: string = ''
  public letter: string = ''

  constructor() { }

  ngOnInit(): void {
    this.letter = this.series[0]

  }

}

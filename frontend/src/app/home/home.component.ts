import { Component, OnInit } from '@angular/core';
import {EpisodesService} from '../Services/episodes.service'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public series: string[] = []
  public names: string[] = []

  constructor(private episodesService: EpisodesService, private router: Router) { }

  ngOnInit(): void {
    this.episodesService.getSeries().subscribe((series: any) => {
      this.series = series.series
      this.names = series.names
    })
  }

  navigate(series: string): void {
    localStorage.setItem('watch',series)
    this.router.navigateByUrl(`watch/${series}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../Services/episodes.service';
import { Router } from '@angular/router';

interface episode{
  path: string,
  name: string
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public episodes: episode[] = []
  public currEpisode: string = '../../assets/ep21.mp4'
  public currVideoName: string = ''
  public series: string = ''
  constructor(private episodesService: EpisodesService, private router: Router) { }

  ngOnInit(): void {
    let series = localStorage.getItem('watch')
    if(series !== null){
      this.series = series
      this.episodesService.getEpisodes(series).subscribe((episodes: any) => {
        for(let i=0;i<episodes.episodes.length;i++){
          this.episodes.push({
            path: episodes.episodes[i],
            name: episodes.names[i]
          })
        }
        
      })
      let episode: string = localStorage.getItem(series) || JSON.stringify(this.episodes[0])
      let obj = JSON.parse(episode)
      this.currEpisode = this.getPath(obj.name)
      this.currVideoName = obj.name
      
    }
  }

  selectEpisode(path: string,name: string): void {
    this.currEpisode = this.getPath(name)
    this.currVideoName = name
    localStorage.setItem(this.series,JSON.stringify({path:this.getPath(name),name:name}))
    window.location.reload()
  }

  getPath(episode: string): string {
    return `../../assets/series/${this.series}/${episode}`
  }

}

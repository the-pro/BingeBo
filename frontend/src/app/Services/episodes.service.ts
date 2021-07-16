import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private readonly hostServer = environment.hostServer
  private readonly hostEpisodes = this.hostServer + '/episodes'
  private readonly hostSeries = this.hostServer + '/series'

  constructor (private readonly http: HttpClient) { }

  getSeries (): any {
    return this.http.post(this.hostSeries, {}).pipe(map((response: any) => response), catchError((error: any) => { throw error }))
  }

  getEpisodes (series: string): any {
    return this.http.post(`${this.hostEpisodes}/${series}`, {
      series: series
    }).pipe(map((response: any) => response), catchError((error: any) => { throw error }))
  }
}

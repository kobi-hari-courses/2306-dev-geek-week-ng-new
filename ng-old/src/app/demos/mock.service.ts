import { Injectable } from '@angular/core';
import { Protocol } from './models/protocol.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  readonly caption = 'I am mock service';

  constructor() { }

  getUrl(protocol: Protocol): string {
    return protocol === 'http'
    ? 'http://www.yahoo.com'
    : 'I am not even a URL'

  }
}

import { Injectable } from '@angular/core';
import { Protocol } from './models/protocol.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  readonly caption = 'Hello I am configuration service';

  constructor() { }

  getUrl(protocol: Protocol): string {
    return protocol === 'http'
    ? 'http://inject-is-cool.com'
    : 'https://inject-is-awesome.net'

  }
}

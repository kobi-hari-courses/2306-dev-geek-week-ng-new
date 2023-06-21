import { Component, OnInit, inject } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { getConfigUrl, getConfigurer } from '../common/get-config';

@Component({
  selector: 'app-inject-demo',
  templateUrl: './inject-demo.component.html',
  styleUrls: ['./inject-demo.component.scss']
})
export class InjectDemoComponent implements OnInit {
  configurer = getConfigurer();
  url = this.configurer('http');

  constructor(){}

  ngOnInit() {
  }

  onChangeToHttps() {
    this.url = this.configurer('https');
  }

}

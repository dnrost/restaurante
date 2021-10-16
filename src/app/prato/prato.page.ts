import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.page.html',
  styleUrls: ['./prato.page.scss'],
})
export class PratoPage implements OnInit {
  public prato: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.prato = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

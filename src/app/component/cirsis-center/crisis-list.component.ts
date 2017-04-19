import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable }            from 'rxjs/Observable';
import {Crisis, CrisisService} from "./crisis.service";
import {Diamond} from "./diamond";
import {Triangle} from "./triangle";
import {ContactService} from "./contact.service";

let contactServiceFactory = (triangle: Triangle) => {
  return new ContactService(triangle);
}

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises | async"
        (click)="onSelect(crisis)"
        >
          <span class="badge">{{ crisis.id }}</span>
          {{ crisis.name }}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  providers: [
    {provide: Triangle, useClass: Triangle},
    {provide: Diamond, useExisting: Triangle},
    {provide: ContactService, useFactory: contactServiceFactory, deps:[ Triangle ]}
  ]
})

export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    protected service: CrisisService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected triangle: Triangle,
    protected diamond: Diamond,
    protected contactService: ContactService
  ) {}

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.triangle.draw();
    // this.triangle.stable();
    // this.diamond.draw();
    this.contactService.sayHello();
    // this.diamond.cut();
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        // matrix参数，传值给分段对应的Component
        // http://localhost:4201/crisis-center;foo=aa/1;foo=bb
        console.log('crisis list:' + params['foo']);
        let crises = this.service.getCrises();
        this.afterGetList();
        return crises;
      });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  protected afterGetList() {}
}

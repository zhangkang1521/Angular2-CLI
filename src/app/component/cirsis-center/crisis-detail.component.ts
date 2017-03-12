import {Component, OnInit, OnDestroy} from "@angular/core";
import {Crisis, CrisisService} from "./crisis.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'crisis-detail',
  template: `<div>id:{{crisis?.id}} {{crisis?.name}}</div>
             <div><button (click)="back()">back</button></div>
            `
})

export class CrisisDetailComponent implements OnInit, OnDestroy{

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router){}

  ngOnInit(): void {
    console.log('crisisDetail init');
    this.route.params.switchMap((params:Params) => {
      return this.crisisService.getCrisis(+params['id']);
    }).subscribe((crisis: Crisis) => {
      this.crisis = crisis;
    });

  }

  ngOnDestroy(): void {
    console.log('crisisDetail destroy');
  }

  back() {
    this.router.navigate(['../', { id: this.crisis.id, foo: 'foo' }], { relativeTo: this.route });
  }

}

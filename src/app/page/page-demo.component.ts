import { Component } from '@angular/core';

@Component({
  selector: 'page-demo',
  templateUrl: './page-demo.component.html'
})
export class PageDemoComponent {

  public totalItems: number = 210;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}

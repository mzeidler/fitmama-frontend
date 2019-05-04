import { MatPaginator, MatPaginatorIntl } from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
    constructor() {
      super();
      this.nextPageLabel = 'iduća mjerenja';
      this.previousPageLabel = 'prethodna mjerenja';
      this.itemsPerPageLabel = 'prikaži broj mjerenja';
      this.lastPageLabel = 'zadnja mjerenja';
      this.firstPageLabel = 'prva mjerenja';
    }
  }
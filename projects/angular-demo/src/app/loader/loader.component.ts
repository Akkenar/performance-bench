import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PendingInterceptorService } from './pending-interceptor.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private pendingInterceptor: PendingInterceptorService) {}

  ngOnInit() {
    this.isLoading = this.pendingInterceptor.pendingRequestsStatus$;
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  get optionsShoppe() {
		return {
		headers: new HttpHeaders({
		'Content-Type': 'application/json'
			})
		};
	}

  get shoppeBaseURL(): string {
		return 'https://gappapi.deliverynow.vn/';
	}

  getShoppe<T>(url: string): Observable<T> {
		return this.httpClient
			.get<T>(`${this.shoppeBaseURL}/${url}`, this.optionsShoppe)
			.pipe(catchError((error) => this.handleError(error)));
	}

	getBase<T>(url: string): Observable<T> {
		return this.httpClient
			.get<T>(`${url}`)
			.pipe(catchError((error) => this.handleError(error)));
	}

  private handleError(error: HttpErrorResponse) {
		return throwError("Err");
	}
}

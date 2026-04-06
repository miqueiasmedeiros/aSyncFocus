import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<string> {
    const form = new FormData();
    form.append('image', file);
    return this.http
      .post<{ url: string }>(`${environment.apiUrl}/uploads/image`, form)
      .pipe(map((res) => res.url));
  }
}

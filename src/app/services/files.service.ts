import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http.get('http://localhost:3000/files');
  }
  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((res) => {
        const blob = new Blob([res], { type });
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }
}

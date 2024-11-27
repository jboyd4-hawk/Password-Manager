import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credential} from '../models/Credential';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private httpClient: HttpClient) { }

  getCredentials(): Observable<Credential[]> {
    return this.httpClient.get<Credential[]>("http://localhost:8080/api/credentials");
  }

  deleteCredentials(credential: Credential): Observable<Credential[]> {
    return this.httpClient.delete<Credential[]>("http://localhost:8080/api/credentials/" + credential.id);
  }

  getCredentialById(id: string): Observable<Credential> {
    return this.httpClient.get<Credential>("http://localhost:8080/api/credentials/" + id);
  }

  updateCredentials(credential: Credential): Observable<Credential> {
    return this.httpClient.put<Credential>("http://localhost:8080/api/credentials/" + credential.id, credential);
  }

  createCredentials(credential: Credential): Observable<Credential> {
    return this.httpClient.post<Credential>("http://localhost:8080/api/credentials", credential);
  }
}

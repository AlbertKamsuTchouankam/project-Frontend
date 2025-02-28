import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';  // Importer le modèle Task

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/project'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  // Récupérer toutes les tâches par ID de projet
  getTasksByProjectId(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/${projectId}/task`);
  }
}

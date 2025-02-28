import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule ],
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   project: Project = {} as Project; // Projet qui sera affiché
  tasks: Task[] = [];

  constructor(private route: ActivatedRoute, private taskService: TaskService, private projectService: ProjectService) {}

  ngOnInit(): void {

    // Projekt wird durch seine ID geladen
    const projectId = +this.route.snapshot.paramMap.get('id')!;

    // Charger le projet
    this.projectService.getProjectById(projectId).subscribe(
      (project) => {
        this.project = project; // Assigner la réponse à la propriété project
        console.log("Project fetched: ", this.project); // Vérifier que le projet est récupéré correctement
      },
      (error) => {
        console.error("Error fetching project: ", error);
      }
    );

    this.route.params.subscribe(params => {
      this.taskService.getTasksByProjectId(projectId).subscribe(data => {
        this.tasks = data;

      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  project: Project = {} as Project;
  tasks: any[] = [];

  constructor(private projectService: ProjectService,  private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(id).subscribe(
      (projectData) => {
        this.project = projectData;
        this.tasks = projectData.tasks;
      }); // Tasks werden abgerufen

      this.projectService.getAllProjects().subscribe(data => {
        this.projects = data; //Alle projekte werden abgerufen
      });

    }}

import {Project} from './project.model';

export interface Task {
  id: number;
  title: string;
  project: Project;

}

import { Component, OnInit } from '@angular/core';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // this.projectService.getHeroes()
    //   .then(projects => this.projects = projects.slice(1, 5));
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks = [
    new Task(
      'Pywikibot',
      'Python library and collection of scripts that automate work on MediaWiki sites',
      'https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot',
      'wikidata_qid'
    ),
    new Task(
      'toolforge-authors',
      'This project is aimed at getting very basic author statistics for a specified page.',
      'https://toolsadmin.wikimedia.org/tools/id/authors',
      'openhub_id'
    ),
    new Task(
      'toolforge-farotbot',
      "IABot fixes link rot replacing dead links with archive links, but it takes years to fully process the entire corpus of millions of articles. Featured articles require more frequent checks. This bot interfaces with IABot's API to trigger it to run on featured lists and articles on a regular basis.",
      'https://toolsadmin.wikimedia.org/tools/id/farotbot',
      'repository'
    ),
  ];
  index: number
  currentTask: Task = this.tasks[0]

  constructor() {
    this.index = 0
    this.getNextTask();
  }

  getNextTask() {
    this.currentTask = this.tasks[this.index]
    this.index++
  }
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
// import { AgentService } from '../../services/agent/agent.service';
@Component({
  selector: 'ngx-agent',
  styleUrls: ['./agent.component.scss'],
  templateUrl: './agent.component.html',
})
export class AgentComponent implements OnInit {
  // private users = null;

  getUsers(): void {
    /* this.users = this.agentService.getCurrentUser().subscribe(agents => {
      this.users = agents.massage;
    }); */
  }
  constructor(
    // private agentService: AgentService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }
}

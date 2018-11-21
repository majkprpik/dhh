import { Component, OnInit } from '@angular/core';
// import { AgentService } from '../../services/agent/agent.service';
@Component({
  selector: 'ngx-shifts',
  template: `<router-outlet></router-outlet>`,
})
export class ShiftsComponent implements OnInit {
  // private users = null;

  getShifts(): void {
    /* this.users = this.agentService.getCurrentUser().subscribe(agents => {
      this.users = agents.massage;
    }); */
  }
  constructor(
    // private agentService: AgentService,
  ) { }

  ngOnInit() {
    this.getShifts();
  }
}


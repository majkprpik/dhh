import { Component, OnDestroy, OnInit } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators/takeWhile";
import { AgentService } from "../../services/agent/agent.service";
@Component({
  selector: "ngx-agent",
  styleUrls: ["./agent.component.scss"],
  templateUrl: "./agent.component.html"
})
export class AgentComponent implements OnInit {
  private users = null;

  getUsers(): void {
    this.users = this.agentService.getCurrentUser().subscribe(agents => {
      console.log(agents);
      this.users = agents.massage;
    });
  }
  constructor(
    private themeService: NbThemeService,
    private agentService: AgentService
  ) {}

  ngOnInit() {
    this.getUsers();
  }
}

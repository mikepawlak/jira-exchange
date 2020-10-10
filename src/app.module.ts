import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { JiraModule } from './jira/jira/jira.module';
import { JiraModule } from './jira/jira.module';
import { JiraController } from './jira/jira.controller';
import { JiraModule } from './jira/jira.module';

@Module({
  imports: [HealthModule, JiraModule],
  controllers: [AppController, JiraController],
  providers: [AppService],
})
export class AppModule {}

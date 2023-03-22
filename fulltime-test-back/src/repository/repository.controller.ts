import { Controller, Get } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {

    constructor (private readonly repositoryService:RepositoryService){}

    @Get('/commits')
    getCommits(){
        return this.repositoryService.getCommits()
    }
}

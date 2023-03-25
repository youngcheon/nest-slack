import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces() {}

    @Post()
    createWorkspace() {}

    @Get(':url/members')
    getAllMembersFromWorkspace() {}

    @Post(':url/members')
    inviteMembersToWorkspace() {}

    @Delete(':url/members')
    kickMemberFromWorkspace() {}

    @Get(':url/members/:id')
    getMemberInfoWorkspace() {}
}

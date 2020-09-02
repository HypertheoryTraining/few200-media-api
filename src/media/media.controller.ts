import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaCreate } from './models/media-create';

@Controller('media')
export class MediaController {


    constructor(private service: MediaService) { }

    @Delete(":id")
    async removeMedia(@Param() params) {
        await this.service.removeMedia(params.id);
        return;
    }

    @Get()
    async getAllMedia() {
        return ({
            data: await this.service.getAllMedia()
        })
    }

    @Post()
    async addMedia(@Body() media: MediaCreate) {
        const response = await this.service.addMedia(media);
        return response;
    }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaCreate } from './models/media-create';

@Controller('media')
export class MediaController {


    constructor(private service: MediaService) { }

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

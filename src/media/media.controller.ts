import { Controller, Get } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {


    constructor(private service: MediaService) { }

    @Get()
    async getAllMedia() {
        return ({
            data: await this.service.getAllMedia()
        })
    }
}

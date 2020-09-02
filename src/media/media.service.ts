import { Injectable } from '@nestjs/common';
import { MediaItem } from './models/media';

@Injectable()
export class MediaService {

    private data: MediaItem[] = [
        { id: '1', title: 'Jaws', format: 'Movie', recommendedBy: 'Sue' },
        { id: '2', title: 'High Weirdness', format: 'Book', recommendedBy: 'Jeff' }
    ]

    async getAllMedia() {
        return this.data;
    }
}

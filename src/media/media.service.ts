import { Injectable, BadRequestException } from '@nestjs/common';
import { MediaItem } from './models/media';
import { MediaCreate } from './models/media-create';
import * as cuid from 'cuid';
@Injectable()
export class MediaService {

    private data: MediaItem[] = [
        { id: '1', title: 'Jaws', format: 'Movie', recommendedBy: 'Sue' },
        { id: '2', title: 'High Weirdness', format: 'Book', recommendedBy: 'Jeff' }
    ]

    async getAllMedia() {
        return new Promise((res) => {
            setTimeout(() => {
                res(this.data);
            }, 3000)
        })
    }

    async addMedia(media: MediaCreate) {
        const newItem = ({ ...media, id: cuid() } as MediaItem);
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (newItem.title === 'Riverdale') {
                    rej(new BadRequestException());
                } else {

                    this.data.push(newItem);
                    res(newItem);
                }
            }, 4000);
        })
    }
}

import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Post } from '../entities/posts.entity';
import { Db } from 'mongodb';

@Injectable()
export class PostsService {
  constructor(
    @Inject('MONGO') private database: Db,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}
  //logica de rutas

  async findAll() {
    return this.postModel.find().exec();

    // const response = this.httpService.get(
    //   'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
    // );
    // const posts = await firstValueFrom(response);
    // return posts.data;
  }

  deleteOne(id: string) {
    return `delete ${id} post`;
  }
}

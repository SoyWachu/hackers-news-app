import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './posts/entities/posts.entity';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(
    private http: HttpService,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async getPostsFromAPI() {
    const response = this.http.get(
      'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
    );
    const posts = await firstValueFrom(response);
    return this.postModel.insertMany(posts.data.hits);
  }
}

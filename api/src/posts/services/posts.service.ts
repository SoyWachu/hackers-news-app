import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  findAll() {
    return this.postModel.find().exec();
  }

  async deleteOne(postId: string) {
    const result = await this.postModel.findByIdAndDelete(postId);
    if (!result) throw new NotFoundException();
  }
}

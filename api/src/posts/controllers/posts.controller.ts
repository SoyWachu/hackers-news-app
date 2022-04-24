import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.findAll();
  }

  @Delete(':id')
  deletePost(@Param('id') postId: string) {
    return this.postService.deleteOne(postId);
  }
}

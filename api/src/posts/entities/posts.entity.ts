import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  //estructura de los posts
  @Prop()
  story_title: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  created_at: string;

  @Prop()
  story_url: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

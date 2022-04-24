import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('GET REQUEST', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /POSTS', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('GET /POSTS EXPECTING ERROR', async () => {
    request(app.getHttpServer())
      .get(`/post`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return err;
        expect(res.body).toMatchObject({ posts: [] });
      });
  });
});

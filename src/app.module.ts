import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo-base/nest'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AnagramModule } from './anagram/anagram.module';

@Module({
  imports: [AnagramModule],
})
export class AppModule {}
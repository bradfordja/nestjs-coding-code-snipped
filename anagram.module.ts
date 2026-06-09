import { Module } from '@nestjs/common';
import { AnagramController } from './anagram.controller';
import { AnagramService } from './anagram.service';

@Module({
  controllers: [AnagramController],
  providers: [AnagramService],
})
export class AnagramModule {}
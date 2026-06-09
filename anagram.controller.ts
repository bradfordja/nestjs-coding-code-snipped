import { Body, Controller, Post } from '@nestjs/common';
import { AnagramService } from './anagram.service';

@Controller('anagrams')
export class AnagramController {

  constructor(
    private readonly anagramService: AnagramService,
  ) {}

  @Post('/group')
  group(@Body() body: { words: string[] }) {

    return this.anagramService.groupAnagrams(
      body.words,
    );
  }
}
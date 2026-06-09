import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

  groupAnagrams(strs: string[]): string[][] {

    if (!strs || strs.length === 0) {
      return [];
    }

    const map = new Map<string, string[]>();

    for (const word of strs) {
      // Sort characters to create grouping key
      const key = word
        .split('')
        .sort()
        .join('');
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)?.push(word);
    }

    return Array.from(map.values());
  }
}
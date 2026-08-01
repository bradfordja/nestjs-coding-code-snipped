import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: "John Smith", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com" },
  ];

  searchUsers(query: string) {
    if (!query?.trim()) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();

    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery)
    );
  }
}
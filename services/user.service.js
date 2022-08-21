export class UserService {
  async addUser(name, surname, date) {
    const users = await fetch("http://localhost:4000/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        name,
        surname,
        date,
      }),
    });

    return users;
  }
}

function getAdmin(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "admin") {
      admins.push(key);
    }
  }
  return admins;
}
const users = new Map();
users.set("admin", "admin");
users.set("projectOwner", "admin");
users.set("tester", "dev");
users.set("dev", "dev");
console.log(getAdmin(users));

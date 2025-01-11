let users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'David', age: 40, active: false }
];

function getActiveUsers(users) {
  return _.filter(users, { active: true });
}

function getSortedUsersByAge(users) {
  return _.sortBy(users, 'age');
}

function getUserNames(users) {
  return _.map(users, 'name');
}

function getUserById(users, id) {
  return _.find(users, { id }) || null;
}

function addUser(users, newUser) {
  return [...users, newUser];
}

function removeUserById(users, id) {
  return _.reject(users, { id });
}

function updateUser(users, updatedUser) {
  return _.map(users, (user) => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user));
}

console.log('Active users:', getActiveUsers(users));
console.log('Sorted by age:', getSortedUsersByAge(users));
console.log('User names:', getUserNames(users));
console.log('User by ID (id=3):', getUserById(users, 3));
console.log('Add new user:', addUser(users, { id: 5, name: 'Vladyslav', age: 21, active: true }));
console.log('Remove user by ID (id=2):', removeUserById(users, 2));
console.log('Update user (id=3):', updateUser(users, { id: 3, name: 'Charlie Updated', age: 36, active: false }));

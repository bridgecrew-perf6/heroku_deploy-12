interface UserTypes {
  id: number,
  firstName: string,
  lastName:string,
  age: number
}

interface UserRepoTypes {
  saveUser: (user: UserTypes) => Promise<UserTypes>;
  findUsers: () => Promise<UserTypes[]>
}

export {
  UserTypes,
  UserRepoTypes,
}

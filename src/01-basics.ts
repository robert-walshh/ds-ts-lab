import {Friend, Colleague, ColleagueHistory} from './myTypes'

const friend1: Friend = {
  name: "Rory McNicholas",
  phone: "087-12345",
  age: 21,
};

const friend2: Friend = {
  name: "Mariah Jackson",
  phone: "086--12445",
  age: 20,
};

export const friends: Friend[] = [friend1, friend2];

// console.log(friends[1]);

//   -------------------

const colleague1: Colleague = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

// console.log(colleagues.current[0]);


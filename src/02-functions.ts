import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}`
}

function allOlder(list: Friend[]) : string[] {
     return list.map(f => {
	f.age += 1
	return `${f.name} is now ${f.age}`
      })
}

console.log(older(friends[0]))
console.log(allOlder(friends))

function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(c: Colleague[], name: string, department: string, email: string) {
   let maxExtension = 0;
   for (let i = 0; i < c.length; i++) {
	if (c[i].contact.extension > maxExtension) maxExtension = c[i].contact.extension; 
   }

   const newColleague: Colleague = {
    name,
    department,
    contact: {email, extension: maxExtension + 1},
   };
   c.push(newColleague);
}


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


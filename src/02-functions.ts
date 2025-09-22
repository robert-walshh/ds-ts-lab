import {Friend, Colleague, EmailContact} from './myTypes'
import {friends, colleagues} from './01-basics'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

function allOlder(list: Friend[]) {
    return list.map(f => {
        f.age += 1
        return `${f.name} is now ${f.age}`
    })
}

console.log(older(friends[0]))
console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({name: ce.name, email: ce.contact.email}));
    return fullResult.slice(0, end)
}

// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension), 3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length), 1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(
    friends: Friend[],
    sorter: (friend: Friend) => boolean
) {
    const filtered = friends.filter(sorter)
    return filtered.map(fr => fr.name)
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Ro')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(
    friend: Friend,
    interest: string
): string[] {
    if (!friend.interests) {
        friend.interests = [];
    }

    friend.interests.push(interest);
    return friend.interests
}

console.log(addInterest(friends[0], 'Politics'))


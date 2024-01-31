// Count the number of properties.
const students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// Output:4
let count=0;
const everyone=Object.keys(students);
console.log(everyone);
for(const student of everyone)
{
    count++;
}
console.log(count);
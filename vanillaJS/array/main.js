let group01 = ['taro', 'hanako', 'sakichi'];
const group02 = [...group01];

let group11 = [
  {
    nickname: 'taro',
    age: 19,
  },
  {
    nickname: 'hanako',
    age: 21,
  },
  {
    nickname: 'sakichi',
    age: 29,
  },
];
const group12 = [...group11];

console.log('=== 1 ===');
console.log(group01);
console.log(group02);

console.log('=== 2 ===');
group01[1] = 'jiro';
console.log(group01);
console.log(group02);

console.log('=== 3 ===');
console.log(group11);
console.log(group12);

console.log('=== 4 ===');
group11[1].age = 89;
console.log(group11);
console.log(group12);

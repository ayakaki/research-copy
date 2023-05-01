let user01 = {
  accountName: 'taro',
  age: 19,
  pet: {
    nickName: 'John',
    age: 1,
  },
  favoriteFoods: ['りんご', 'お好み焼き'],
};
console.log('=== 1 ===');
console.log(user01);

console.log('=== 2 ===');
const user02 = { ...user01 };
user01.age = 49;
console.log(user01);
console.log(user02);

console.log('=== 3 ===');
user01.pet.nickName = 'lucky';
console.log(user01);
console.log(user02);

console.log('=== 4 ===');
user01.favoriteFoods[1] = 'すいか';
console.log(user01);
console.log(user02);

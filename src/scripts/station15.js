async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const time = hoge => new Promise(resolve => setTimeout(() => resolve(), hoge));
  const result = await userList.map(test);
  await time(3000);
  return await result
}

function test(userList) {
  userList.full_name = userList.family_name + " " + userList.first_name;
  console.log(userList);
  return userList;
}


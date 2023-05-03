import { NextPage } from 'next';
import { useState } from 'react';

const ObjectPage: NextPage = () => {
  let srcObj = {
    accountName: 'taro',
    age: 19,
    pet: {
      nickName: 'John',
      age: 1,
    },
    favoriteFoods: ['りんご', 'お好み焼き'],
  };

  let spreadCopyObj = { ...srcObj };
  let simpleCopyObj = srcObj;

  // 再描画用
  const [counter, setCounter] = useState(0);
  const [spreadCopyState, setSpreadCopyState] = useState({ ...srcObj });
  const [simpleCopyState, setSimpleCopyState] = useState(srcObj);

  const changeSrcObj = () => {
    srcObj.accountName = 'hanako';
    srcObj.favoriteFoods[1] = 'すいか';
  };

  const handleClick = () => {
    setCounter(counter + 1);
    console.log('再描画ボタン押下');
  };

  return (
    <>
      <button onClick={handleClick}>再描画</button>
      <h2>元のオブジェクト</h2>
      <p>srcObj.accountName: {srcObj.accountName}</p>
      <p>srcObj.favoriteFoods[1]: {srcObj.favoriteFoods[1]}</p>
      <h2>オブジェクト（スプレッド演算子を用いての代入）</h2>
      <p>spreadCopyObj.accountName: {spreadCopyObj.accountName}</p>
      <p>spreadCopyObj.favoriteFoods[1]: {spreadCopyObj.favoriteFoods[1]}</p>
      <h2>オブジェクト（シンプルな代入）</h2>
      <p>simpleCopyObj.accountName: {simpleCopyObj.accountName}</p>
      <p>simpleCopyObj.favoriteFoods[1]: {simpleCopyObj.favoriteFoods[1]}</p>
      <h2>ステート（スプレッド演算子を用いての代入）</h2>
      <p>spreadCopyState.accountName: {spreadCopyState.accountName}</p>
      <p>
        spreadCopyState.favoriteFoods[1]: {spreadCopyState.favoriteFoods[1]}
      </p>
      <h2>ステート（シンプルな代入）</h2>
      <p>simpleCopyState.accountName: {simpleCopyState.accountName}</p>
      <p>
        simpleCopyState.favoriteFoods[1]: {simpleCopyState.favoriteFoods[1]}
      </p>
      <button onClick={changeSrcObj}>オブジェクト代入</button>
    </>
  );
};

export default ObjectPage;

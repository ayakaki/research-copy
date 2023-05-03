import { NextPage } from 'next';
import { useState } from 'react';

const ObjectPage: NextPage = () => {
  const [counter, setCounter] = useState(0);
  const [srcState, setSrcState] = useState({
    accountName: 'taro',
    age: 19,
    pet: {
      nickName: 'John',
      age: 1,
    },
    favoriteFoods: ['りんご', 'お好み焼き'],
  });

  const [spreadCopyState, setSpreadCopyState] = useState({ ...srcState });
  const [simpleCopyState, setSimpleCopyState] = useState(srcState);

  const changeSrcState = () => {
    setSrcState((prevState) => {
      return {
        ...prevState,
        accountName: prevState.accountName + ' yamada',
        favoriteFoods: [
          prevState.favoriteFoods[0],
          '棒棒鶏', // favoriteFoods[1] を更新
          ...prevState.favoriteFoods.slice(2),
        ],
      };
    });
  };

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        再描画
      </button>
      <h2>元のステート</h2>
      <p>srcState.accountName: {srcState.accountName}</p>
      <p>srcState.favoriteFoods[1]: {srcState.favoriteFoods[1]}</p>
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
      <button onClick={changeSrcState}>ステート変更</button>
    </>
  );
};

export default ObjectPage;

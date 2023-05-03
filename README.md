# research-copy-in-ts-js

ステートやオブジェクトのコピーが発生した際、コピー元とコピー先がどのように作用するのかを調査した。<br>
※参考情報として React.js を使わない場合の挙動もまとめた。<br>
　 →vanillaJS フォルダを参照（各フォルダの README に調査結果あり）

## RESULT

### ソースのステートを変更した場合

[ソースコード](https://github.com/ayakaki/research-copy-in-react/blob/main/research-app/pages/change-object/index.tsx)

- 再レンダリングした際に、変更後のステートはが変化する
  - オブジェクトの変更では再レンダリングは走らないため、別途走らせないと変更しない
- 際レンダリングした場合でも、コピー元のオブジェクトをコピーしたオブジェクトは変化しない
- 際レンダリングした際、ソースとなるオブジェクトのメモリ番号が変わるため、際レンダリングしても、ステートの値は元には戻らない（仮説）

![change_object](https://user-images.githubusercontent.com/65984887/235812845-0131cd7f-cbbc-44ce-9cdb-9d26221fae52.gif)

### ソースのオブジェクトを変更した場合

[ソースコード](https://github.com/ayakaki/research-copy-in-react/blob/main/research-app/pages/change-state/index.tsx)

- 再レンダリングしても、コピー先のステートは変化しない

![change_state](https://user-images.githubusercontent.com/65984887/235812999-bb857265-ef9a-482d-9ae8-88fde807d042.gif)

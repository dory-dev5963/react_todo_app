# 開発メモ

[参考動画](https://www.youtube.com/watch?v=nRCNL9T3J98&t=98s&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

## 準備
1. node.jsをインストール
2. npx create-react-app プロジェクト名 でreactの雛形を作成
3. npm start でローカル環境型が立ち上がったことを確認することができる
4. npm install uuid でキーのランダム発行、利用により重複を避ける実装を行う。

## 開発効率
1. xxxx.jsx でコンポーネントを作成する際、
    1. rafce　入力 + tab 補完で関数コンポーネントの雛形を生成可能
    2. tab補完できない場合は、vscの拡張で、「VS Code ES7+ React/Redux/React-Native/JS snippets」を入れる

## 知識
-フックス:状態が変わる変数を格納、管理、監視するために用いる概念
 1. useState:変数を監視管理するためのフックス。App.jsで以下のように宣言する  

    const [todos, setTodo] = useState();  

    useStateフックスを用いることで、上記ではtodosオブジェクトが更新されたら、再レンダリングされる。初期値として  

    const [todos, setTodo] = useState(["Todo1", "Todo2"]);  
    
    のように引数を渡し、todosに格納できる  
2. useRef:文字列など要素を取得することができるフックス。
3. filter関数　条件にあうものだけを取り出す。　　
    例：todos.filter((todo) => !todo.completed).length}  
    todo.completedがfalseなものがtrueなため、取り出される



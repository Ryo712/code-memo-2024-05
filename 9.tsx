//Card コンポーネントのレンダリング部分
<Card
    id={task.id}
    title={task.title}
    description={task.description}
    status={task.status}
    onCheckboxChange={() => handleCheckboxChange(task.id)}
    checked={task.status === '3'} //ステータスが 3 の場合にチェックされた状態とする
/>
// /readではチェックボックスが入った状態でデータ表示する
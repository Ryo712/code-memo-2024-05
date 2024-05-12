<Card
    id={task.id}
    title={task.title}
    description={task.description}
    status={task.status}
    checked={Number(task.status) === 3} //値を数値型に変換しその結果が数値の3と等しいかどうかを比較
/>
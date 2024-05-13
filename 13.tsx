import React from 'react';
import Card from './Card'; // Cardコンポーネントのインポート

const CardLayout = ({ cards }) => {
  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          status={card.status}
          // 必要なプロパティやコールバック関数を渡す
        />
      ))}
    </div>
  );
};

export default CardLayout;
//カードの配置等の処理をCard.tsxと別にcomponents内で作る
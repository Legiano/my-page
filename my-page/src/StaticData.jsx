import React from "react";

const StaticData = () => {
  const data = {
    name: 'Legiano Lucio Rodrigues',
    age: 35,
    ability: 'Minhas habilidades são: HTML, CSS, JavaScript, MySQl, PHP basico',
    git: 'https://github.com/Legiano',
  }

  return (
    <div>
      <h2>Dados do Legiano</h2>
      <p><strong>{data.name}</strong></p>
      <p><strong>Idade {data.age}</strong></p>
      <p><strong>{data.ability}</strong></p>
      <p><strong>{data.git}</strong></p>
    </div>
  );
}

export default StaticData;

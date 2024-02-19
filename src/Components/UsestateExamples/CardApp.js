// 3. **Component Composition**:
//    Design a reusable component called `Card` that accepts props for title, content,
//    and optional actions. Then, create a `Dashboard` component that utilizes multiple `Card`
//    components to display various sections of information.

import React from "react";

const Card = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const Dashboard = ({ sections }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {sections.map((section, index) => (
        <Card
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default Dashboard;

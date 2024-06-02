import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  name: string;
  content: string;
}

const ListExamples: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/get_items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">示例列表</h1>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ListExamples;
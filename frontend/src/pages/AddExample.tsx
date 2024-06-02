import React, { useState } from 'react';
import axios from 'axios';

const AddExample: React.FC = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/add_item', { name, content });
      alert('Item added successfully');
      setName('');
      setContent('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">新增示例</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-left mb-2">解读</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full border border-gray-300 rounded p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left mb-2">数据</label>
            <textarea
              placeholder="Placeholder"
              className="w-full border border-gray-300 rounded p-2 h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center space-x-4">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded shadow">
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExample;
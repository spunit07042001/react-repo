import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../features/paste/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // Update paste if pasteId exists
      dispatch(updateToPastes(paste));
    } else {
      // Create a new paste if no pasteId exists
      dispatch(addToPastes(paste));
    }
    // Clear inputs and search params after creation/update
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='p-2 rounded-2xl place-content-evenly w-[66%] pl-5'
          type="text"
          placeholder='Enter your title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className='p-2 rounded-2xl place-content-evenly'>
          { pasteId ? "Update My Paste" : "Create My Paste" }
        </button>
      </div>
      <div>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={value}
          placeholder='Enter contents here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

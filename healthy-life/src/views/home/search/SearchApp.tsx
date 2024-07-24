import React, { ChangeEvent, useRef, useState } from 'react'
import Search from './Search';
import SearchList from './SearchList';
import '../../../style/home/Search.css'

export interface Searchs {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function SearchApp() {
  const [searchs, setSearchs] = useState<Searchs[]>([]);
  const [searchsInput, setSearchInput] = useState({
    title: ""})

    const nextId = useRef(1);

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;

      setSearchInput({
        ...searchsInput,
        [name]: value
      })
    }

    const handleCreate = () => {
      const newSearch = {
        id: nextId.current,
        title: searchsInput.title,
        isCompleted: false
      }
      setSearchs(searchs.concat(newSearch));

      setSearchInput({
        title: ""
      })

      nextId.current += 1;
    };

    const handleToggle = (id: number) => {
      setSearchs(
        searchs.map((search) =>
          search.id === id ? {...search , isCompleted: !search.isCompleted} : search)
      )
    }
    
    const handleRemove = (id: number) => {
      setSearchs(searchs.filter((search)=> search.id !== id));
    }

  return (
    <div>
      <Search 
        search={searchsInput}
        onChange={handleInputChange}
        onCreat={handleCreate}
      />

      <SearchList 
        searchs={searchs}
        onRemove={handleRemove}
        onToggle={handleToggle}
      />
    </div>
  )
}

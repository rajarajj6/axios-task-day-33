import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header';
import Edit from './table/edit';
import Input from './table/input';
import Table from './table/table';
import View from './table/view';

function Components() {
  return (
    <div>
      <Header />
      <div className='mainbody'>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/addinput' element={<Input />} />
          <Route path={`/view/:id`} element={<View />} />
          <Route path={`/edit/:id`} element={<Edit />} />
        </Routes>
      </div>
    </div>
  )
}

export default Components;
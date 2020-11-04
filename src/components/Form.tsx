import React from 'react';
type Props = {
  handleSearchFilter: (e: any) => void;
}

const Form = ({ handleSearchFilter }: Props) => {
  return (
    <form onSubmit={handleSearchFilter}>
      <input type="text" placeholder="Search by name..." />
    </form>
  )
}

export default Form;
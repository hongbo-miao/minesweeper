import React from 'react';

export default function Loading(props) {
  if (props.error) {
    return (
      <div className="my-tip">Oops, your connection seems off... Refresh to try again.</div>
    );
  }

  return null;
}

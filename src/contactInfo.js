import React from 'react';

export default function (props) {
  const links = props.linkList.map((link, idx) => {
    const circle = idx < props.linkList.length - 1 ? ' &#9679; ' : '';
    return (
      <>
        <a href={link[1]}>{link[0]}</a><span dangerouslySetInnerHTML={{ __html: circle }} />
      </>
    )
  })
  const contacts = props.contactList.map((contact) => (
    <div className="row" key={contact[0]}>
      <div className="col-12 text-right">
        <a href={contact[1]}>{contact[0]}</a>
      </div>
    </div>
  ));
  return <>
    {contacts}
    <div className="row">
      <div className="col-12 text-right small">
          {links}
      </div>
    </div>
  </>
}
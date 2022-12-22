import React from "react";
import "./nameCard.css";

const NameCard = ({ name }) => {

    let namechipUrl ="https://www.namecheap.com/domains/registration/results/?domain="
    
	return (
        <a className="name-link"
            href={`${namechipUrl}${name}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="card">{name}</div>
        </a>
   )
};

export { NameCard };

import './styles/root.css';
import './styles/navbar.css';
import './styles/button.css';
import './styles/input.css';

import React, { Fragment } from 'react';


export function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={`btn btn-${props.style || 'default'}`}
        >
            {props.text}
        </button>
    )
}

export function Input(props) {
    return (
        <input
            type={`${props.type || 'text'}`}
            className=''
        />
    )
}

export function Textarea(props) {
    return (
        <textarea
            type={`${props.type || 'text'}`}
            className=''
        >
        </textarea>
    )
}

export function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-right">
                {props.children}
            </div>
        </div>
    )
}

export function NavItem(props) {
    return (
        <a
            href={props.link || '/'}
            target={props.blankTarget ? '_BLANK' : ''}
            onClick={props.onClick}
        >
            {props.text}
        </a>
    )
}
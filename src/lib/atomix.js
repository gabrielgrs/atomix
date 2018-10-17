import './styles/root.css';
import './styles/navbar.css';
import './styles/button.css';
import './styles/input.css';
import './styles/card.css';

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
            <img className='navbar-icon' href={props.link || '/'} src={props.icon} />
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

export function Select(props) {
    return (
        <select>
            <option> - </option>
            {props.children}
        </select>
    )
}

export function SelectOption(props) {
    return (
        <option value={props.value}> {props.text}</option>
    )
}

export function Card(props) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={props.img} />
            </div>
            <div className='card-title'>
                {props.title}
            </div>
            <div className='card-subtitle'>
                {props.subtitle}
            </div>

            <div className='card-content'>
                {props.content}
            </div>
            <div className='card-footer'>
                {props.footer}
            </div>
        </div>
    )
}
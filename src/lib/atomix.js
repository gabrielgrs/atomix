import './styles/root.css'
import './styles/navbar.css'
import './styles/button.css'
import './styles/input.css'
import './styles/card.css'
import './styles/table.css'
import './styles/footer.css'
import './styles/modal.css'

import React, { Fragment } from 'react'

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
    <input type={`${props.type || 'text'}`} placeholder={props.placeholder} />
  )
}

export function Textarea(props) {
  return (
    <textarea
      type={`${props.type || 'text'}`}
      placeholder={props.placeholder}
    ></textarea>
  )
}

export function Navbar(props) {
  return (
    <div className="navbar">
      <a>
        <img
          className="navbar-icon"
          href={props.link || '/'}
          src={props.icon}
        />
      </a>
      <a className="navbar-brand">{props.brand}</a>
      <div className="navbar-content">{props.children}</div>
    </div>
  )
}

export function NavItem(props) {
  return (
    <a
      href={props.link || '/'}
      target={props.blankTarget ? '_BLANK' : ''}
      onClick={props.onClick}
      className="navbar-link"
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
    <option key={Math.random()} value={props.value}>
      {' '}
      {props.text}
    </option>
  )
}

export function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>

      <div className="card-content">{props.content}</div>
      <div className="card-footer">{props.footer}</div>
    </div>
  )
}

export function Table(props) {
  return (
    <table>
      <thead>
        <tr className="table-head">
          {props.headers.map((item) => (
            <th key={Math.random()}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
}

export function TableRow(props) {
  return (
    <Fragment>
      <tr className="table-row">
        {props.values.map((item) => (
          <td key={Math.random()}>{item}</td>
        ))}
      </tr>
    </Fragment>
  )
}

export function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>{props.firstContent}</div>
        <div>{props.secondContent}</div>
      </div>
      {props.children}
    </div>
  )
}

export function FooterBottom(props) {
  return <div className="footer-bottom">{props.content}</div>
}

export function Modal(props) {
  if (!props.name) {
    console.error(`Tag "name" is required to modal work correctly`)
    return <Fragment></Fragment>
  } else {
    return (
      <Fragment>
        <a className={`modal-btn`} href={`#${props.name}`}>
          {props.text}
        </a>

        <div id={props.name} className="overlay">
          <div className="modal">
            <h2>{props.title}</h2>
            <a className="close" href="#">
              ×
            </a>
            <div className="content">{props.content}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

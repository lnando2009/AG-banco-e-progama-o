import { useState } from 'react'
import './App.css'
import logoGta from './assets/logoPostgres.svg'
import { Joystick, Gamepad2, GamepadDirectional } from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoGta} alt="" />
        </section>

        <footer>
          <small>@2026 ag2cti.com</small>
          <div id="social">
          
          </div>
        </footer>
      </main>
    </>
  )
}

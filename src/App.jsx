import { useState } from 'react'
import './App.css'
import logoGta from './assets/logoPostgres.svg'
import { Apple } from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoGta} alt="" />
        </section>

        <footer>
          <div id="social" >
            <h1> Coisas Boas</h1>
            <p> O PostgreSQL é um banco de dados confiável, rápido e gratuito, com suporte a consultas complexas e grande variedade de tipos de dados. Ele se destaca pela segurança, estabilidade e capacidade de lidar com aplicações grandes, além de ser altamente extensível e mantido por uma comunidade ativa.
            </p>

          
          </div>
          <div id="social">
            <h1> Como Funciona</h1>
            <p> O PostgreSQL armazena dados em tabelas e executa comandos SQL enviados pela aplicação. Ele processa essas consultas de forma otimizada, garante que os dados permaneçam corretos e seguros, e usa memória e índices para responder rapidamente.</p>
          </div>
          <div id="social">
            <h1> Quem Usa</h1>
            <p> O PostgreSQL é usado por muitas empresas e organizações grandes que precisam de um banco de dados confiável e escalável, como Netflix, Spotify, Instagram e Apple, além de governos, universidades e startups em geral.</p>
            <Apple id='maca'/>
            </div>
        </footer>

      </main>
    </>
  )
}

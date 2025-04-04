import React from 'react';
import './index.css';
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-2 bg-gradient-to-r from-[#f7ebd5] to-[#ffd289] max-w-8xl mx-auto relative">
        <div className="flex items-center mr-1">
          <img src="../public/imagens/logo.png" alt="Logo" className="h-25 mr-6" />
          <span className="font-bold">Meu Caramelo</span>
        </div>

        {/* Menu de navegação */}
        <nav
          className={`lg:flex gap-8 justify-center w-full ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:gap-10 absolute top-full left-0 p-2 lg:p-0 lg:static transition-all duration-300`}
        >
          <a href="#home" className="cursor-pointer hover:text-[#275930] font-semibold text-xl">
            Home
          </a>
          <a href="#sobre" className="cursor-pointer hover:text-[#275930] font-semibold text-xl">
            Sobre
          </a>
          <a href="#adote" className="cursor-pointer hover:text-[#275930] font-semibold text-xl">
            Adote
          </a>
          <a href="#ajuda" className="cursor-pointer hover:text-[#275930] font-semibold text-xl">
            Ajuda
          </a>
          <a href="#contato" className="cursor-pointer hover:text-[#275930] font-semibold text-xl">
            Contato
          </a>
        </nav>

        {/* Menu de hambúrguer para telas pequenas */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>  


          </button>
        </div>
      </header>


      {/* Home Section */}
      <section
          id="home"
          className="relative h-[1000px] bg-cover bg-center flex items-center justify-start px-4"
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/ti/vetor-gratis/p1/46583693-conjunto-do-feliz-animal-os-proprietarios-com-caes-colecao-do-personagens-jogando-abracando-abraco-com-quadrupede-animal-amigos-pessoas-andar-com-animais-de-estimacao-dentro-cidade-parque-colori-plano-ilustracao-vetor.jpg)"
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row w-full md:w-[600px] lg:w-[700px] xl:w-[800px] my-6 bg-gray-50 shadow-sm border border-slate-400 rounded-lg min-h-[400px]">
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <img
                src="../public/imagens/logo.png"
                alt="card-image"
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
            <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                Bem-vindo ao Meu Caramelo
              </h4>
              <p className="mb-8 text-slate-600 leading-normal font-light">
                Nossa missão é promover a adoção responsável de animais, proporcionando a eles um lar cheio de amor e carinho. Aqui, buscamos conectar pessoas com seus futuros amigos peludos, garantindo um ambiente saudável e seguro para nossos animais. Junte-se a nós e faça a diferença na vida de um animal!
              </p>
              <div>
              <a
                  href="#adote"
                  className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
                >
                  Adote
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </section>







      {/* Sobre Section */}
      <section id="sobre" className="bg-[#8FBF73] text-white py-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-30">
          {/* Imagem à esquerda */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1331985239/pt/vetorial/people-with-pets.jpg?s=612x612&w=0&k=20&c=DWljK2ybJDX-W4a-chpWR90Zt5ZL07Lt0dxeSwCjHDg="
              alt="Sobre"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Texto à direita */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl mb-12">Sobre Nós</h2>
            <p className="text-2xl">
              Na Meu Caramelo, acreditamos que todo animal merece amor, carinho e um lar seguro. Nossa missão é resgatar, cuidar e encontrar famílias amorosas para cães e gatos que precisam de uma segunda chance.
              Somos uma ONG dedicada à adoção responsável, garantindo que cada pet receba os cuidados necessários antes de encontrar seu novo lar. Trabalhamos com resgates, tratamentos veterinários e conscientização sobre a importância da adoção e dos cuidados com os animais.
              Adotar é um ato de amor! Venha conhecer nossos bichinhos e transforme a vida deles – e a sua! ❤️🐾
            </p>
          </div>
        </div>
      </section>

      {/* Adote Section */}
      <section id="adote" className="py-20 bg-[#fff8e1] flex justify-center px-6">
  <div className="w-full max-w-screen-xl">
    <h2 className="text-4xl text-center mb-10 font-semibold">Adote um Pet</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {[
        { nome: "Mia", img: "/imagens/Gato1.jpeg", desc: "Carinhosa e cheia de energia, a Mia está pronta para encontrar um lar amoroso!" },
        { nome: "Luna", img: "/imagens/Gato2.jpg", desc: "Luna adora carinho e se dá bem com outros animais. Adote essa fofura!" },
        { nome: "Thor", img: "/imagens/Cachorro4.jpg", desc: "Brincalhão e leal, Thor será um grande amigo para sua família!" },
        { nome: "Max", img: " /imagens/Cachorro3.jpeg", desc: "Max é um cachorro dócil que só quer amor e atenção. Leve ele para casa!" },
        { nome: "Bella", img: "/imagens/Cachorro2.jpg", desc: "Bella é uma cachorrinha esperta e amorosa, pronta para te fazer companhia." },
        { nome: "Toby", img: "/imagens/Cachorro1.jpg", desc: "Toby é um cãozinho divertido que vai alegrar seu lar. Adote!" }
      ].map((pet, index) => (
        <div 
          key={index} 
          className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-100 transition-transform duration-300 hover:scale-115"
        >
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={pet.img} alt={pet.nome} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">{pet.nome}</h6>
            <p className="text-slate-600 leading-normal font-light">{pet.desc}</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-[#ff9800] py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-[#e68900]" type="button">
              Adotar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Ajuda Section */}
      <section  id="ajuda" className="py-35 bg-gradient-to-r from-[#7dde9a] to-[#2f9330] text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Ajuda</h2>
          <p className="text-3xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Tem dúvidas sobre adoção, doações ou como apoiar nossa causa? Nossa equipe está pronta para te ajudar!  
            <br /><br />
            Entre em contato conosco e saiba como fazer a diferença na vida de um pet resgatado. 💛🐾
          </p>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-[#fff8e1]">
        <h2 className="text-4xl text-center mb-10">Contato</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Sua mensagem"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-[#ffcc00] text-white font-bold rounded-lg hover:bg-[#e6b800]"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
        <footer className="bg-gradient-to-r from-[#f7eacf] to-[#ea9307] py-10 text-black">
              <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Logo Grande à Esquerda */}
                <div className="flex items-center mb-4 md:mb-0">
                  <img src="/public/imagens/logo.png" alt="Logo Meu Caramelo" className="h-24 md:h-20 mr-8" /> {/* Logo responsiva */}
                  <span className="text-3xl font-bold">Meu Caramelo</span>
                </div>
                
                {/* Navegação no Centro */}
                <nav className="flex flex-wrap justify-center gap-8 mt-4">
                  <a href="#home" className="cursor-pointer hover:text-[#275930] text-lg">Home</a>
                  <a href="#sobre" className="cursor-pointer hover:text-[#275930] text-lg">Sobre</a>
                  <a href="#adote" className="cursor-pointer hover:text-[#275930] text-lg">Adote</a>
                  <a href="#ajuda" className="cursor-pointer hover:text-[#275930] text-lg">Ajuda</a>
                  <a href="#contato" className="cursor-pointer hover:text-[#275930] text-lg">Contato</a>
                </nav>
              </div>
              
              {/* Copyright no final */}
              <div className="mt-6 text-sm text-black text-center">
                <p>&copy; 2025 Meu Caramelo. Todos os direitos reservados.</p>
              </div>
        </footer>

    </div>
  );
}

export default App;

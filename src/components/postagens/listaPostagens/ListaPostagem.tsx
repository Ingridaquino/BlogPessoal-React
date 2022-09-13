import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ListaPostagem.css";
import Postagem from "../../../models/Postagem";
import { busca, post } from "../../../services/Services";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

import CardPost from "../cardPostagem/CardPost";

import { toast } from 'react-toastify';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([]);

    //substituiu o useLocalStorage
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );


  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      navigate("/login");
    }
  }, [token]);

  async function getPostagem() {
    await busca("/postagens", setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPostagem();
  }, [postagem.length]);

  return (
    <>
      {postagem.map((posts) => (
        <CardPost objetoPost={posts} />
      ))}
    </>
  );
}

export default ListaPostagem;

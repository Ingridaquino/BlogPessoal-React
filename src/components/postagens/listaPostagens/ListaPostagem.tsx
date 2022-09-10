import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ListaPostagem.css";
import Postagem from "../../../models/Postagem";
import { busca, post } from "../../../services/Services";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

import CardPost from "../cardPostagem/CardPost";

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([]);

    //substituiu o useLocalStorage
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );


  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
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

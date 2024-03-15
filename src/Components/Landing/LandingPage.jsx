import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

import Logo from "../assets/Logo.png";
import { VerPedido } from "../BtnBag/BtnBag";

import { useDispatch, useSelector } from "react-redux";
import {
  asyncAllProducts,
  asyncCategorias,
  asyncComercio,
} from "../redux/slice";
import Spinner from "../assets/Spinner/Spinner";
import Horarios from "../BtnNavidad/Horarios";

export default function LandingPage(url) {
  const dispatch = useDispatch();
  const { categorias } = useSelector((state) => state.alldata);
  useEffect(() => {
    const fetchData = () => {
      console.log("Effect is running LandingPage");
      dispatch(asyncCategorias());
    };

    // Ejecutar la función inmediatamente al montar el componente
    fetchData();

    // Configurar la repetición cada 15 minutos
    const intervalId = setInterval(fetchData, 15 * 60 * 1000); // 15 minutos en milisegundos

    // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const categoriasConProductos = categorias?.filter(
    (categoria) => categoria.attributes?.articulos?.data?.length > 0
  );
  const id = url.location.pathname.slice(1, 3);
  return (
    <div className="animate__animated  animate__zoomIn">
      {categorias.length === 0 ? <Spinner imageUrl={Logo} /> : null}
      <div className="naviLanding titCasa ">
        <div className="logoL">
          <NavLink to={`/${id}`}>
            <img src={Logo} alt="" width="150px" />
          </NavLink>
        </div>
        <div className="navi2">
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
          <Horarios />
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
        </div>
      </div>

      <div className="conteinerLB2  ">
        <div className="rowsCardL">
          {categoriasConProductos?.map((categoria) => (
            <NavLink
              className="navLink"
              to={
                url.location.pathname === "/"
                  ? `/${categoria.attributes?.name}`
                  : `${url.location.pathname}/${categoria.attributes?.name}`
              }
            >
              <div className="titInicio">
                <img
                  src={categoria?.attributes?.picture?.data || Logo}
                  alt="fotito"
                />
                <p>{categoria?.attributes?.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="navi2">
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
        <p className="naviTit3"> Seguinos en </p>
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
      </div>
      <VerPedido id={url.location.pathname.slice(1, 3)} />
    </div>
  );
}

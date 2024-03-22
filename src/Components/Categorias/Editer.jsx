import React, { useEffect } from "react";
import "./Categorias.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../assets/Spinner/Spinner.jsx";
import Logo from "../assets/Logo.png";
import { CardsEdite } from "../Cards/CardsEdit.jsx";

const API = process.env.REACT_APP_API_STRAPI;

export const Editer = () => {

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.alldata);

  const soloEsteComercio = allProduct.filter(
    (e) => e.attributes?.comercio?.data.id === 1
  );

  const Productos = soloEsteComercio?.filter(
    (e) => e.attributes?.categorias?.data.id === 2
  );

  const subCategoriaFilters = Productos?.reduce((acc, product) => {
    const subCategoriaId = product.attributes?.sub_categoria?.data?.id;

    if (subCategoriaId) {
      if (!acc[subCategoriaId]) {
        acc[subCategoriaId] = [];
      }
      acc[subCategoriaId].push(product);
    }

    return acc;
  }, []);

  // Puedes acceder a cada Xn dinámicamente
  const dynamicVariables = Object.keys(subCategoriaFilters).map((key) => {
    return subCategoriaFilters[key];
  });

  const subCategoriasTrue = subCategoriaFilters.filter((e) => e[0]);

  return (
    <div className="containerEdit">
  
      <div className="sectioner">
        {subCategoriasTrue.length < 1 ? (
          <div className="sectioner">
            {subCategoriasTrue.map((product, index) =>
              product[0] ? (
                <a
                  key={index}
                  href={`#${product[0].attributes.sub_categoria.data.id}`}
                >
                  {product[0]?.attributes.sub_categoria.data.attributes.name}
                </a>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      <div className="conteinerLC ">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          {subCategoriasTrue?.map((product) =>
            product[0] ? (
              <div
                id={product[0]?.attributes?.sub_categoria?.data?.id}
                key={product[0]?.attributes?.sub_categoria?.data?.id}
                style={{ paddingTop: "6rem" }}
              >
                {product[0]?.attributes?.sub_categoria?.data?.attributes
                  ?.picture?.data?.attributes?.url ? (
                  <img
                    src={
                      `${API}${product[0]?.attributes?.sub_categoria?.data?.attributes?.picture?.data?.attributes?.url}` ||
                      Logo
                    }
                    alt={
                      "img - " +
                      product[0]?.attributes?.sub_categoria?.data?.attributes
                        ?.name
                    }
                    id={product[0]?.attributes?.sub_categoria?.data?.id}
                    className="ImgSubCat"
                  />
                ) : null}
                <CardsEdite products={soloEsteComercio} />
              </div>
            ) : null
          )}
        </div>
        {soloEsteComercio.length === 0 ? <Spinner imageUrl={Logo} /> : null}
      </div>
    </div>
  );
};

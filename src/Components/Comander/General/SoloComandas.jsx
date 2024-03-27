// const SoloComandas = () => {
//     const dispatch = useDispatch();
//     const { comandas, comandasTrue, comandasFalse } = useSelector(
//       (state) => state.alldata
//     );
//     const [loadingComandas, setLoadingComandas] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para almacenar la fecha seleccionada

//     useEffect(() => {
//       // Función para obtener la fecha actual en formato "aaaa-mm-dd"
//       function obtenerFechaActualEnFormato() {
//         const fechaActual = new Date();
//         const dia = String(fechaActual.getDate()).padStart(2, "0");
//         const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
//         const anio = fechaActual.getFullYear();
//         return `${anio}-${mes}-${dia}`;
//       }

//       // Obtener referencia al input de fecha
//       const fechaInput = document.getElementById("fechaInput");

//       // Establecer el valor inicial del input de fecha con la fecha actual en formato "aaaa-mm-dd"
//       fechaInput.value = obtenerFechaActualEnFormato();

//       // Actualizar el valor del campo de texto cada vez que cambie la fecha seleccionada
//       fechaInput.addEventListener("input", function () {
//         const selectedDateString = this.value; // Obtener la fecha seleccionada en formato "aaaa-mm-dd"
//         const selectedDate = new Date(selectedDateString); // Convertir la cadena a objeto de fecha
//         setSelectedDate(selectedDate); // Actualizar el estado de la fecha seleccionada
//       });
//     }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez después del montaje inicial del componente

//   // Función para filtrar las comandas por la fecha seleccionada
// function filtrarComandasPorFecha(comand, fechaSeleccionada) {
//   const dia = String(fechaSeleccionada.getDate()).padStart(2, "0");
//   const mes = String(fechaSeleccionada.getMonth() + 1).padStart(2, "0");
//   const anio = fechaSeleccionada.getFullYear();
//   const fechaSeleccionadaFormato = `${anio}-${mes}-${dia}`;

//   return comand.filter((comanda) => {
//     const fechaComandaFormato = comanda.attributes.createdAt.slice(0, 10); // Extraer solo la parte de la fecha (yyyy-mm-dd) del atributo createdAt
//     return fechaComandaFormato === fechaSeleccionadaFormato;
//   });
// }

//     // Filtrar las comandas por la fecha seleccionada
//     const comandasFiltradas = filtrarComandasPorFecha(comandas, selectedDate);
//     const comandasFiltradasTrue = filtrarComandasPorFecha(comandasTrue, selectedDate);
//     const comandasFiltradasFalse = filtrarComandasPorFecha(comandasFalse, selectedDate);

//   const HandleEntrega = async (comanda) => {
//     // Actualiza el estado de carga para la comanda correspondiente
//     setLoadingComandas((prevLoadingComandas) => [
//       ...prevLoadingComandas,
//       comanda.attributes.id,
//     ]);

//     try {
//       await dispatch(asyncPedidoRealizado(comanda));
//     } finally {
//       // Elimina la comanda del estado de carga una vez que la operación se ha completado
//       setLoadingComandas((prevLoadingComandas) =>
//         prevLoadingComandas.filter((id) => id !== comanda.attributes.id)
//       );
//     }
//   };

//   return (
//     <div>
//       {" "}
//       <h2 className="titleEditor">Comandas en Tiempo Real</h2>
//     <input type="date" id="fechaInput"/>

//       <h3 className="titleEditor">Total de pedidos {comandas.length}</h3>
//       <h3 style={{ color: "white" }}>
//         Pedidos realizados {comandasFiltradasTrue.length} | Pedido sin entregar{" "}
//         {comandasFiltradasFalse.length}
//       </h3>
//       <div className="contComandas">
//         <div>
//           {comandasFalse.map((comanda) => (
//             <li key={comanda.attributes.id} className="comanda-item">
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="customer-name">
//                   Nombre del Cliente:
//                 </label>
//                 <span className="comanda-value">{comanda.attributes.name}</span>
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="phone">
//                   Teléfono:
//                 </label>
//                 <span className="comanda-value">
//                   {comanda.attributes.Phone}
//                 </span>
//                 {comanda.attributes.domicilio ? (
//                   <>
//                     <label className="comanda-label" htmlFor="phone">
//                       Direccion:
//                     </label>
//                     <span className="comanda-value">
//                       {comanda.attributes.domicilio}
//                     </span>
//                   </>
//                 ) : (
//                   <label className="comanda-label" htmlFor="phone">
//                     -- Take Way
//                   </label>
//                 )}
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="pedido">
//                   Pedido:
//                 </label>
//                 <div className="pedido-items">
//                   {comanda.attributes.pedido.split(",").map((item, index) => (
//                     <div key={index} className="pedido-item">
//                       {item.trim()}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="pedido-total">
//                   Total:
//                 </label>
//                 <span className="comanda-value">
//                   ${comanda.attributes.total_pedido}
//                 </span>
//               </div>
//               <div className="comanda-details" backgroundColor="green">
//                 {loadingComandas.includes(comanda.attributes.id) ? (
//                   <div className="spinner">Cargando...</div>
//                 ) : (
//                   <button
//                     className="BtnComander2"
//                     onClick={() => HandleEntrega(comanda)}
//                   >
//                     <b>Pendiente</b>
//                   </button>
//                 )}
//               </div>
//               <label className="comanda-label" htmlFor="customer-name">
//                 {comanda.attributes.createdAt}
//               </label>
//             </li>
//           ))}
//         </div>
//         <div>
//           {comandasTrue.map((comanda) => (
//             <li key={comanda.attributes.id} className="comanda-item">
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="customer-name">
//                   Nombre del Cliente:
//                 </label>
//                 <span className="comanda-value">{comanda.attributes.name}</span>
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="phone">
//                   Teléfono:
//                 </label>
//                 <span className="comanda-value">
//                   {comanda.attributes.Phone}
//                 </span>
//                 {comanda.attributes.domicilio ? (
//                   <>
//                     <label className="comanda-label" htmlFor="phone">
//                       Direccion:
//                     </label>
//                     <span className="comanda-value">
//                       {comanda.attributes.domicilio}
//                     </span>
//                   </>
//                 ) : (
//                   <label className="comanda-label" htmlFor="phone">
//                     -- Take Way
//                   </label>
//                 )}
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="pedido">
//                   Pedido:
//                 </label>
//                 <div className="pedido-items">
//                   {comanda.attributes.pedido.split(",").map((item, index) => (
//                     <div key={index} className="pedido-item">
//                       {item.trim()}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="comanda-details">
//                 <label className="comanda-label" htmlFor="pedido-total">
//                   Total:
//                 </label>
//                 <span className="comanda-value">
//                   ${comanda.attributes.total_pedido}
//                 </span>
//               </div>
//               <div className="comanda-details" backgroundColor="green">
//                 {loadingComandas.includes(comanda.attributes.id) ? (
//                   <div className="spinner">Cargando...</div>
//                 ) : (
//                   <button
//                     className="BtnComander"
//                     onClick={() => HandleEntrega(comanda)}
//                   >
//                     <b>Cancelar entrega</b>
//                   </button>
//                 )}
//               </div>
//               <label className="comanda-label" htmlFor="customer-name">
//                 {comanda.attributes.createdAt}
//               </label>
//             </li>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comander.css";
import { asyncPedidoRealizado } from "../../redux/slice";

const SoloComandas = () => {
  const dispatch = useDispatch();
  const { comandas, comandasTrue, comandasFalse } = useSelector(
    (state) => state.alldata
  );
  const [loadingComandas, setLoadingComandas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para almacenar la fecha seleccionada

  useEffect(() => {
    // Función para obtener la fecha actual en formato "aaaa-mm-dd"
    function obtenerFechaActualEnFormato() {
      const fechaActual = new Date();
      const dia = String(fechaActual.getDate()).padStart(2, "0");
      const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
      const anio = fechaActual.getFullYear();
      return `${anio}-${mes}-${dia}`;
    }

    // Obtener referencia al input de fecha
    const fechaInput = document.getElementById("fechaInput");

    // Establecer el valor inicial del input de fecha con la fecha actual en formato "aaaa-mm-dd"
    fechaInput.value = obtenerFechaActualEnFormato();

    // Actualizar el valor del campo de texto cada vez que cambie la fecha seleccionada
    fechaInput.addEventListener("input", function () {
      const selectedDateString = this.value; // Obtener la fecha seleccionada en formato "aaaa-mm-dd"
      const selectedDate = new Date(selectedDateString); // Convertir la cadena a objeto de fecha
      setSelectedDate(selectedDate); // Actualizar el estado de la fecha seleccionada
    });
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez después del montaje inicial del componente

  // Función para convertir una fecha a una cadena con formato "yyyy-mm-dd"
  function formatDateToYYYYMMDD(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Función para filtrar las comandas por la fecha seleccionada
  function filtrarComandasPorFecha(comand, fechaSeleccionada) {
    // Convertir la fecha seleccionada al huso horario UTC
    const fechaSeleccionadaUTC = new Date(
      fechaSeleccionada.getTime() + fechaSeleccionada.getTimezoneOffset() * 60000
    );
    const fechaSeleccionadaFormato = formatDateToYYYYMMDD(fechaSeleccionadaUTC);

    return comand.filter((comanda) => {
      // Convertir la fecha de la comanda al huso horario UTC
      const fechaComandaUTC = new Date(comanda.attributes.createdAt);
      const fechaComandaFormato = formatDateToYYYYMMDD(fechaComandaUTC);

      return fechaComandaFormato === fechaSeleccionadaFormato;
    });
  }

  // Filtrar las comandas por la fecha seleccionada
  const comandasFiltradas = filtrarComandasPorFecha(comandas, selectedDate);
  const comandasFiltradasTrue = filtrarComandasPorFecha(
    comandasTrue,
    selectedDate
  );
  const comandasFiltradasFalse = filtrarComandasPorFecha(
    comandasFalse,
    selectedDate
  );

  const HandleEntrega = async (comanda) => {
    // Actualiza el estado de carga para la comanda correspondiente
    setLoadingComandas((prevLoadingComandas) => [
      ...prevLoadingComandas,
      comanda.attributes.id,
    ]);

    try {
      await dispatch(asyncPedidoRealizado(comanda));
    } finally {
      // Elimina la comanda del estado de carga una vez que la operación se ha completado
      setLoadingComandas((prevLoadingComandas) =>
        prevLoadingComandas.filter((id) => id !== comanda.attributes.id)
      );
    }
  };

  return (
    <div>
      <h2 className="titleEditor">Comandas en Tiempo Real</h2>
      <input type="date" id="fechaInput" />

      <h3 className="titleEditor">Total de pedidos {comandas.length}</h3>
      <h3 style={{ color: "white" }}>
        Pedidos realizados {comandasFiltradasTrue.length} | Pedido sin entregar{" "}
        {comandasFiltradasFalse.length}
      </h3>
      <div className="contComandas">
        <div>
          {comandasFiltradasFalse.map((comanda) => (
            <li key={comanda.attributes.id} className="comanda-item">
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="customer-name">
                  Nombre del Cliente:
                </label>
                <span className="comanda-value">{comanda.attributes.name}</span>
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="phone">
                  Teléfono:
                </label>
                <span className="comanda-value">
                  {comanda.attributes.Phone}
                </span>
                {comanda.attributes.domicilio ? (
                  <>
                    <label className="comanda-label" htmlFor="phone">
                      Direccion:
                    </label>
                    <span className="comanda-value">
                      {comanda.attributes.domicilio}
                    </span>
                  </>
                ) : (
                  <label className="comanda-label" htmlFor="phone">
                    -- Take Way
                  </label>
                )}
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="pedido">
                  Pedido:
                </label>
                <div className="pedido-items">
                  {comanda.attributes.pedido.split(",").map((item, index) => (
                    <div key={index} className="pedido-item">
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="pedido-total">
                  Total:
                </label>
                <span className="comanda-value">
                  ${comanda.attributes.total_pedido}
                </span>
              </div>
              <div className="comanda-details" backgroundColor="green">
                {loadingComandas.includes(comanda.attributes.id) ? (
                  <div className="spinner">Cargando...</div>
                ) : (
                  <button
                    className="BtnComander2"
                    onClick={() => HandleEntrega(comanda)}
                  >
                    <b>Pendiente</b>
                  </button>
                )}
              </div>
              <label className="comanda-label" htmlFor="customer-name">
                {comanda.attributes.createdAt}
              </label>
            </li>
          ))}
        </div>
        <div>
          {comandasFiltradasTrue.map((comanda) => (
            <li key={comanda.attributes.id} className="comanda-item">
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="customer-name">
                  Nombre del Cliente:
                </label>
                <span className="comanda-value">{comanda.attributes.name}</span>
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="phone">
                  Teléfono:
                </label>
                <span className="comanda-value">
                  {comanda.attributes.Phone}
                </span>
                {comanda.attributes.domicilio ? (
                  <>
                    <label className="comanda-label" htmlFor="phone">
                      Direccion:
                    </label>
                    <span className="comanda-value">
                      {comanda.attributes.domicilio}
                    </span>
                  </>
                ) : (
                  <label className="comanda-label" htmlFor="phone">
                    -- Take Way
                  </label>
                )}
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="pedido">
                  Pedido:
                </label>
                <div className="pedido-items">
                  {comanda.attributes.pedido.split(",").map((item, index) => (
                    <div key={index} className="pedido-item">
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>
              <div className="comanda-details">
                <label className="comanda-label" htmlFor="pedido-total">
                  Total:
                </label>
                <span className="comanda-value">
                  ${comanda.attributes.total_pedido}
                </span>
              </div>
              <div className="comanda-details" backgroundColor="green">
                {loadingComandas.includes(comanda.attributes.id) ? (
                  <div className="spinner">Cargando...</div>
                ) : (
                  <button
                    className="BtnComander"
                    onClick={() => HandleEntrega(comanda)}
                  >
                    <b>Cancelar entrega</b>
                  </button>
                )}
              </div>
              <label className="comanda-label" htmlFor="customer-name">
                {comanda.attributes.createdAt}
              </label>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoloComandas;

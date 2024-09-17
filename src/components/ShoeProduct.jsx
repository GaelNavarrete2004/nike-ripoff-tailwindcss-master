import { useState } from "react";
import { buyShoesEssential2, sizes, colors } from "../constants"; // Aquí defines tus productos, colores y tallas.

const ShoeProduct = () => {
  const [selectedShoe, setSelectedShoe] = useState(buyShoesEssential2[0]); // Imagen del zapato seleccionado
  const [selectedSize, setSelectedSize] = useState(null); // Talla seleccionada

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 p-6">
      {/* Parte izquierda: Imágenes del zapato */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col absolute mt-[100px] ml-18 sm:gap-6 gap-4 justify-center  sm:left-[10%] max-sm:px-6">
          {buyShoesEssential2.map((shoe, index) => (
            <img
              key={index}
              src={shoe.thumbnail}
              alt={shoe.name}
              className={`w-20 h-20 cursor-pointer rounded-md border ${
                selectedShoe === shoe ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedShoe(shoe)}
            />
          ))}
        </div>
        <img
          src={selectedShoe.image}
          alt={selectedShoe.name}
          className="w-[500px] mt-20 h-auto rounded-lg"
        />
      </div>

      {/* Parte derecha: Información del zapato */}
      <div className="mt-12 flex flex-col gap-6">
        <h2 className="text-4xl font-semibold">{selectedShoe.name}</h2>
        <p className="text-xl text-gray-500">${selectedShoe.price}</p>

        {/* Colores */}
        <div className="flex items-center gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full ${color.bgClass} ${
                selectedShoe.color === color.name ? "ring-2 ring-black" : ""
              }`}
              onClick={() => setSelectedShoe({ ...selectedShoe, color: color.name })}
            />
          ))}
        </div>

        {/* Tallas */}
        <div className="">
          <p className="text-lg font-semibold">Selecciona tu talla:</p>
          <div className="mt-5 grid grid-cols-4 gap-4">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`p-2 border rounded-md ${
                  selectedSize === size ? "bg-black text-white" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Botón Agregar a la bolsa */}
        <button className="bg-black text-white py-5 px-6 rounded-full hover:bg-gray-800 font-bold font-montserrat">
          Agregar a la bolsa de compra
        </button>
      </div>
    </div>
  );
};

export default ShoeProduct;

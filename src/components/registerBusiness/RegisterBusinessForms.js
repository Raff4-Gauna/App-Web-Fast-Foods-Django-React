import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { registerBusinessActions } from 'redux/actions/registerBusinessAct';

const RegisterBusinessForms = ({registerBusinessActions}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name_local: '',
    type_busine: 'restaurante', // Puedes establecer un valor predeterminado
    category_restaurante: '',
    category_kiosco: '',
    category_minimercado: '',
    category_supermercado: '',
    contact_methods: 'telefono', // Puedes establecer un valor predeterminado
    phone_local: '',
    address_business: '',
    owner: '',
    asset: true, // Puedes establecer un valor predeterminado
  });

  const { name_local, 
    type_busine, 
    category_restaurante, 
    category_kiosco, 
    category_minimercado, 
    category_supermercado, 
    contact_methods, 
    phone_local, 
    address_business, 
    owner, 
    asset } = formData;

  const onChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });
 

    const onSubmit = (e) => {
      e.preventDefault();
      registerBusinessActions(formData); // Pasar formData directamente
    };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registro de Negocio</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name_local">Nombre del negocio</label>
          <input 
          id="name_local" 
          name="name_local" 
          value={name_local} 
          onChange={(e) => onChange(e)}
          className="w-full p-2 border rounded"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="type_busine">Tipo de negocio</label>
          <select id="type_busine" name="type_busine" value={type_busine} onSubmit={(e) => onSubmit(e)} className="w-full p-2 border rounded">
            <option value="restaurante">Restaurante</option>
            <option value="kiosco">Kiosco</option>
            <option value="minimercado">Minimercado</option>
            <option value="supermercado">Supermercado</option>
            <option value="otros">Otros</option>
          </select>
        </div> */}

        {/* Agrega los demás campos aquí */}

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Registrar Negocio</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  registerBusinessActions,
})(RegisterBusinessForms);

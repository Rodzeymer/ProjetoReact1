import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./App.css";

const initialState = { name: "", email: "", CPF: "" };

function App() {
  const [formValues, setFormValues] = useState(initialState);

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.parse()

    axios
      .post("https://crudcrud.com/api/0da4336fee6a49feb53d9bc0aba3e06f", data)
      .then((response) => {
        history.push("/");
      });

    console.log("Submetido", data);
  };

  console.log("formValues", formValues);

  return (
    <div className="App">
      <h1>Cadastro de Usuário</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <label>Nome: </label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome completo"
          onChange={handleInputChange}
          value={formValues.name || ""}
          required
        />

        <br />

        <label>Data de nascimento: </label>
        <input
          type="date"
          name="birthday"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          required
        />

        <br />

        <label>Gênero: </label>
        <select name="genero" required>
          <option value=" "> </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Trans">Trans</option>
          <option value="Não-Binário">Não-Binário</option>
        </select>

        <br />

        <label>E-mail: </label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          onChange={handleInputChange}
          value={formValues.email || ""}
          required
        />

        <br />

        <label>"CPF: (Apenas números)"</label>
        <input
          type="text"
          name="CPF"
          placeholder="Digite seu CPF"
          onChange={handleInputChange}
          value={formValues.CPF || ""}
          required
        />

        <br />

        <label>"Data inicial: "</label>
        <input
          type="date"
          name="inicial"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          required
        />

        <br />

        <label>"Time: "</label>
        <select name="time">
          <option value=" "> </option>
          <option value="Mobile">Mobile</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Nulo">Nulo</option>
        </select>

        <br />

        <input className="enviar" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;

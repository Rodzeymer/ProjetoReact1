import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          "Nome: "
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
          />
        </label>
      </form>
      <form>
        <label>
          "Data de nascimento: "
          <input
            type="date"
            name="birthday"
            required
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          />
        </label>
      </form>
      <form>
        <label>
          "Gênero: "
          <select name="gender">
            <option value=" "> </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Trans">Trans</option>
            <option value="Não-Binário">Não-Binário</option>
          </select>
        </label>
      </form>
      <form>
        <label>
          "E-mail: "
          <input type="email" name="e-mail" placeholder="Digite seu E-mail" />
        </label>
      </form>
      <form>
        <label>
          "CPF: (Apenas números)"
          <input type="number" ame="CPF" placeholder="Digite seu CPF " />
        </label>
      </form>
      <form>
        <label>
          "Data inicial: "
          <input
            type="date"
            name="inicial"
            required
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          />
        </label>
      </form>
      <form>
        <label>
          "Time: "
          <select name="time">
            <option value=" "> </option>
            <option value="Mobile">Mobile</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Nulo">Nulo</option>
          </select>
        </label>
      </form>

      <input type="submit" value="Enviar" />
    </div>
  );
}

export default App;

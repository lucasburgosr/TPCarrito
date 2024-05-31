import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log("Nombre de Usuario:", nombreUsuario);
      console.log("Clave:", clave);

      const params = new URLSearchParams();
      params.append("nombreUsuario", nombreUsuario);
      params.append("clave", clave);

      console.log("Parametros:", params.toString());

      const response = await axios.post("http://localhost:8080/login", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Respuesta del servidor:", response.data);

      localStorage.setItem("usuario", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.error("Error en la autenticación:", error);

      // Manejo del error asegurando que es de tipo AxiosError
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          setError(error.response.data); // Mostrar el mensaje de error del servidor
        } else {
          setError("Usuario y/o Clave incorrectos, vuelva a intentar");
        }
      } else {
        setError("Se produjo un error inesperado. Vuelva a intentarlo.");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Clave:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-primary">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const { setAuth } = useOutletContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, data)
        .then((res) => {
          setAuth(res.data);
          navigate("/");
        });
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.res?.data?.message || "An error occurred");
    }
  };
  return (
    <div>
      <div>
        <p>Connecte toi</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Adresse mail"
              {...register("email", { required: "L'e-mail est obligatoire" })}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: "Le mot de passe est obligatoire",
              })}
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </div>

          <div>
            <button type="submit">Connexion</button>
          </div>
        </form>
      </div>

      <div>
        <span>Tu n'as pas de compte? Inscris toi.</span>

        <button type="button" onClick={() => navigate("/inscription")}>
          Inscription
        </button>
      </div>
    </div>
  );
}

export default Login;

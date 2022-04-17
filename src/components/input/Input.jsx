import "./form.scss";

const Input = ({ handleChange, handleSubmit, login, email, count }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="login">
        Login :{" "}
        <input
          type="text"
          name="login"
          required
          value={login}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email :{" "}
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <span>
        {" "}
        Render Count : {count}
        <button type="submit" className="btn submit_btn">
          Submit
        </button>
      </span>
    </form>
  );
};

export default Input;

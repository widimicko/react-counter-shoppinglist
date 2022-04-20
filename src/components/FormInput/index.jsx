import "./style.css";

const FormInput = ({ handleFormSubmit, value, onChange }) => {
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        onChange={onChange}
        value={value}
        className="input"
        placeholder="List"
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default FormInput;

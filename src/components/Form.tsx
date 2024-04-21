import {
  ChangeEvent,
  FormEvent,
  HTMLInputTypeAttribute,
  useState,
} from "react";

interface Props {
  onSearch: (value: string) => void;
}

const Form = ({ onSearch }: Props) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(input);
  };
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onSearch(input);
  };
  const [input, setInput] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Name
        </label>
        <input
          id="item"
          type="text"
          className="form-control"
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

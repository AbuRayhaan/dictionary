import '../scss/Form.css';

const Form = () => {
  return (
    <section className="form-section">
      <form>
        <input type="text" placeholder="Search Here" />
        <button type="submit">SEARCH</button>
      </form>
    </section>
  );
}

export default Form;
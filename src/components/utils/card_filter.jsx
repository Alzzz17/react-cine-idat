export function CardFilter({ id, title, question, options }) {
  return (
    <div className="card-filter">
      <label htmlFor={id}>{title}</label>
      {options ? (
        <select id={id} className="form-select text-center">
          <option>{question}</option>
          {options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      ) : (
        <input type="text" id={id} placeholder={question} className="form-control text-center" />
      )}
    </div>
  );
}
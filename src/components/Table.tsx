import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types';
import findCurrencie from '../helpers/findCurrencie';
import calculateExpense from '../helpers/calculateExpense';
import { updateWallet } from '../redux/actions';
import './Table.css';

function Table() {
  const { expenses } = useSelector((state: State) => state.wallet);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(updateWallet(newExpenses));
  };

  return (
    <div className="container-table">
      <table>
        <thead className="thead">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{findCurrencie(expense).name}</td>
                <td>{Number(findCurrencie(expense).ask).toFixed(2)}</td>
                <td>{calculateExpense(expense)}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => handleDelete(expense.id) }
                    className="btn-delet"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

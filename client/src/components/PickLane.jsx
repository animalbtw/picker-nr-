import * as React from 'react';
import st from '../assets/styles/PickLane.module.css'

function PickLane({chosenHero}) {
  const [radiant, setRadiant] = React.useState([])
  const [dire, setDire] = React.useState([])

  const radiantHandlePush = () => {

  }

  const direHandlePush = () => {

  }

  const resetHandle = () => {

  }

  console.log(radiant)
  return (
    <div>
      <table className={st.table}>
        <thead>
        <tr>
          <td>Radiant</td>
          <td>Dire</td>
        </tr>
        </thead>
        <tbody>

        <tr className={st.table_row}>
          <td className={st.table_buttonElement}>
            <button
              onClick={radiantHandlePush}
              className={`${st.table_element_button} ${st.radiant}`}>
              Add
            </button>
          </td>
          <td className={st.table_buttonElement}>
            <button
              onClick={direHandlePush}
              className={`${st.table_element_button} ${st.dire}`}>
              Add
            </button>
          </td>
        </tr>
        <tr className={st.table_row}>
          <td className={st.table_buttonElement}>
            <button
              onClick={resetHandle}
              className={st.table_element_buttonReset}>
              Reset
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PickLane;
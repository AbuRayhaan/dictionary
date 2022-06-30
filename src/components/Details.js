import { AiFillSound } from 'react-icons/ai';
import '../scss/Detail.css';

const Detail = () => {
    return (
      <section className="details-section">
        <h2>Programming</h2>

        <hr />

        <div className="phonics">
          <p>/ˈpɹəʊɡɹəmɪŋ/</p>
          <AiFillSound className="icon"/>
        </div>

        <ul className='meaning'>
          <p className='definition'>Definitions: </p>
          <li>
            To enter a program or other instructions into (a computer or other electronic device) to instruct it to do a particular task.
            <p>Example: He programmed the DVR to record his favorite show.</p>
          </li>
          <li>
            To develop (software) by writing program code.
            <p>Example: I programmed a small game as a demonstration.</p>
          </li>
          <li>
            To put together the schedule of an event.
            <p>Example: Mary will program Tuesday’s festivities.</p>
          </li>
          <li>
            To cause to automatically behave in a particular way.
            <p>Example: The lab rat was programmed to press the lever when the bell rang.</p>
          </li>
        </ul>
      </section>
    );
}

export default Detail;
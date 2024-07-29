import { Container } from "./styles";
import { Button } from "../Button/index";
import { useState, useEffect } from "react";
import moment from "moment";


export function Input() {
  const [email, setEmail] = useState("");
  const [coments, setComents] = useState("");
  const [comentPublic, setComentPublic] = useState([]);
  const now = moment()
  const addComments = () => {
    const id = Math.floor(Math.random() * 10000);
    const newComment = { id, email, coments };
   
    setComentPublic((prevState) => {
      const newState = [...prevState, newComment];
      localStorage.setItem("@comments", JSON.stringify(newState));
      return newState;
    });
  };
  
  const removeComments = (id) => {
    setComentPublic((prevState) => {
      const newState = prevState.filter((comentPubli) => comentPubli.id !== id);
      localStorage.setItem("@comments", JSON.stringify(newState));
      return newState;
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    addComments();
  }

  useEffect(() => {
    const saved = localStorage.getItem("@comments");
    if (saved) {
      setComentPublic(JSON.parse(saved));
    }
  }, []);

  return (
    <Container>
      <div>
        <form action="">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <section>
            <label htmlFor="comments">Comentários</label>
            <textarea
              id="comments"
              value={coments}
              onChange={(e) => setComents(e.target.value)}
            />
          </section>
          <Button onClick={handleSubmit}>Enviar comentário</Button>

          <div>
            {comentPublic.length > 0 ? (
              comentPublic.map((comentPubli) => (
                <div key={comentPubli.id}>
                  <h5>
                    Data atual: {now.format("DD/MM/YYYY")} 
                    <br />
                    Hora Atual:{now.format("HH:mm:ss")}</h5>
                  <br />
                  <h2>{comentPubli.email}</h2>
                  <br />
                  <h3>{comentPubli.coments}</h3>
                  <button onClick={() => removeComments(comentPubli.id)}>Remover</button>
                  <br />
                  <hr />
                  <br />
                </div>
              ))
            ) : (
              <h3>Nenhum comentário encontrado</h3>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
}

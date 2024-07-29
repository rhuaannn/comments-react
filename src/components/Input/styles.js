import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: white;

 

  > div {
    display: flex;
    height: 95vh;
    width: 35.5rem;
    color: white;
    background: #79717a;
    border: none;
    border-radius: 8px;
    box-shadow: 10px 10px 5px 0px rgba(222, 221, 219, 1);

    > form {
      margin: 0 auto;
      margin-top: 1.5rem;
      cursor:pointer;
     >hr{
      margin-top:35px;
     }

      > label {
        display: flex;
        font-size: 1rem;
      }
      > input {
        display: flex;
        height: 1.8rem;
        width: 15rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-family: arial;

      }
      > section {
        margin-top: 3.5rem;
        height: 7rem;
        width: 15rem;
        font-size: 1rem;

        > textarea {
          height: 9rem;
          width: 15rem;
          font-size: 1rem;
          font-family: arial;
        }
      }
     
    }
  }
`;

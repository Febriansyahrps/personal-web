import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { topAnimation } from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

const EmailForm = () => {
  const [sendText, setSendText] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const getTextHandler = (e) => {
    setSendText({ ...sendText, [e.target.name]: e.target.value });
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      color: "#121212",
      background: "#fafafa",
      icon: "question",
      iconColor: "#022F95",
      title: "Send Message",
      text: "Did you fill in the message correctly ?",
      confirmButtonText: "Send Message",
      confirmButtonColor: "#022F95",
      cancelButtonColor: "#C7141A",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        send(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          sendText,
          `${process.env.REACT_APP_USER_ID}`
        )
          .then((response) => {
            Swal.fire(`${response.text}`, "Your message is sent!", "success");
            setSendText({
              from_name: "",
              from_email: "",
              message: "",
            });
          })
          .catch((err) => {
            Swal.fire("Opps...Sorry", `Failed..., ${err}`, "error");
          });
      }
    });
  };

  return (
    <FormContainer variants={topAnimation}>
      <form onSubmit={sendEmailHandler}>
        <FormSection>
          <AddressSection>
            <h3>Let’s Talk !</h3>
            <h4>Your Name</h4>
            <input
              type="text"
              name="from_name"
              placeholder="Input Your Name"
              value={sendText.from_name}
              onChange={getTextHandler}
              required
            />
            <h4>Your Email</h4>
            <input
              type="email"
              name="from_email"
              placeholder="Input Your Email"
              value={sendText.from_email}
              onChange={getTextHandler}
              required
            />
            <BigScreenButton>
              <button>
                <h4>Send Email</h4>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </BigScreenButton>
          </AddressSection>
          <MessageSection>
            <h4>Message</h4>
            <textarea
              name="message"
              placeholder="Input Your Message"
              value={sendText.message}
              onChange={getTextHandler}
              required
            ></textarea>
          </MessageSection>
        </FormSection>
        <SmallScreenButton>
          <button>
            <h4>Send Email</h4>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </SmallScreenButton>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled(motion.div)`
  background: #022f95;
  margin: 0 0 0 25px;
  box-shadow: -25px -25px #00efee;
  border-radius: 5px;
  padding: 30px;
  @media screen and (max-width: 900px) {
    margin: 0 0 0 20px;
    box-shadow: -20px -20px #00efee;
  }
  @media screen and (max-width: 680px) {
    margin: 0 0 0 15px;
    box-shadow: -15px -15px #00efee;
  }
  @media screen and (max-width: 550px) {
    padding: 10px;
  }
  h3 {
    color: #fafafa;
  }
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    color: #fafafa;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0 0 0;
    text-decoration: none;
    background: #00efee;
    width: 200px;
    height: 75px;
    border-radius: 75px;
    border: none;
    transition: all ease 0.25s;
    h4 {
      font-weight: bold;
      transition: all ease 0.25s;
      margin: 0;
      color: #022f95;
    }
    svg {
      font-size: 16px;
      margin: 0 0 0 5px;
      color: #022f95;
    }
    &:hover {
      background: #40fdfd;
      h4 {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 900px) {
      width: 175px;
      height: 60px;
      &:hover {
        h4 {
          font-size: 20px;
        }
      }
    }
    @media screen and (max-width: 680px) {
      width: 150px;
      height: 50px;
      &:hover {
        h4 {
          font-size: 18px;
        }
      }
    }
    @media screen and (max-width: 550px) {
      &:hover {
        h4 {
          font-size: 16px;
        }
      }
    }
  }
`;
const FormSection = styled(motion.div)`
  display: flex;
  margin: 25px 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const AddressSection = styled(motion.div)`
  width: 35%;
  h3 {
    margin: 0 0 25px 0;
  }
  h4 {
    margin: 20px 0 5px 0;
  }
  input {
    background: #fafafa;
    color: #121212;
    font-family: "Nunito Sans", sans-serif;
    width: 100%;
    height: 50px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 0 10px;
    @media screen and (max-width: 680px) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const MessageSection = styled(motion.div)`
  width: 65%;
  margin: 0 0 0 25px;
  h4 {
    margin: 0 0 5px 0;
  }
  textarea {
    background: #fafafa;
    color: #121212;
    resize: none;
    font-family: "Nunito Sans", sans-serif;
    width: 100%;
    height: 300px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px;
    @media screen and (max-width: 680px) {
      font-size: 14px;
      height: 200px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
    h4 {
      margin: 20px 0 5px 0;
    }
  }
`;
const BigScreenButton = styled(motion.div)`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const SmallScreenButton = styled(motion.div)`
  margin: 0 0 25px 0;
  @media screen and (min-width: 901px) {
    display: none;
  }
`;
export default EmailForm;

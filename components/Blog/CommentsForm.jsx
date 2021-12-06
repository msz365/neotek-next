import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { submitComment } from "../../services";

const CommentContainer = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 15px;
  margin: 20px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
    margin: 10px 5px;
  }
`;

const CommentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 5px;
  justify-content: center;

  flex-direction: column;
  width: 90%;
  @media screen and (max-width: 480px) {
    width: auto;
  }
`;

const CommentHeading = styled.h4`
margin-bottom: 24px;
font-size: 1rem;
line-height: 1.1;
font-weight: 600;
color: #ffffff;
border-bottom-width: 1px;
@media screen and (max-width: 480px) {
  font-size: 1rem;
}
  }
`;
const CommentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
const CommentCheckSection = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
`;
const CommentText = styled.textarea`
  border: none;
  background: #f2f3f7;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s ease-in-out;
  width: 100%;
  background: transparent;
  margin-bottom: 20px;
  padding: 10px;
  color: #ffffff;
  &::placeholder {
    color: #ffffff;
  }
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    background: rgba(255, 255, 255, 0.1);
  }
`;
const CommentName = styled.input`
  border: none;
  background: none;
  margin-bottom: 20px;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s ease-in-out;
  width: 100%;
  background: transparent;
  padding: 10px;

  color: #ffffff;
  &::placeholder {
    color: #ffffff;
  }
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    background: rgba(255, 255, 255, 0.1);
  }
`;
const CommentCheck = styled.input`
  border: none;
  background: none;
  margin-bottom: 20px;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s ease-in-out;

  background: transparent;

  color: #ffffff;
  &::placeholder {
    color: #ffffff;
  }
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid white;
  }
`;
const BtnSubmit = styled.button`
  border-radius: 50px;
  background: #333333;
  white-space: nowrap;
  padding: 14px 100px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #650004;
    border: 1px solid #650004;
  }
  @media screen and (max-width: 480px) {
    margin: 10px;
    padding: 14px 50px;
  }
`;
const Message = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: #ffffff;
`;
const CheckLabel = styled.label`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: #ffffff;
  margin-left: 5px;
`;

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentHeading>Write a comment</CommentHeading>{" "}
        <CommentSection>
          <CommentText
            rows="4"
            value={formData.comment}
            placeholder="Your Comment"
            name="comment"
            onChange={onInputChange}
          />{" "}
          <CommentName
            placeholder="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onInputChange}
          />{" "}
          <CommentName
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
          />{" "}
          <CommentCheckSection>
            <CommentCheck
              checked={formData.storeData}
              type="checkbox"
              id="storeData"
              name="storeData"
              onChange={onInputChange}
            />
            <CheckLabel>
              Save my name and email for the next time I comment.
            </CheckLabel>
          </CommentCheckSection>
          {error && <Message>All fields are required.</Message>}
          <BtnSubmit type="button" onClick={handlePostSubmission}>
            Submit
          </BtnSubmit>
          {showSuccessMessage && (
            <Message>Comment submitted for review </Message>
          )}
        </CommentSection>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default CommentsForm;

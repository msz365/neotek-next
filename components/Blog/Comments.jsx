import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import parse from "html-react-parser";
import { getComments } from "../../services";

const CommentContiner = styled.div`
  box-shadow: 0px 10px 33px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 15px 35px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 5px;
    margin: 10px 5px;
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
const CommentWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const CommentName = styled.p`
  margin-bottom: 15px;
  font-size: 0.7rem;
  line-height: 24px;
  font-weight: 600;
  text-align: justify;
  text-justify: inter-word;
  color: #ffffff;
`;
const CommentText = styled.p`
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 400;
  padding: 0 5px;
  text-align: justify;
  text-justify: inter-word;
`;
const CommentDate = styled.span`
  margin-bottom: 15px;
  font-size: 0.6rem;
  line-height: 10px;
  text-align: justify;
  text-justify: inter-word;
  color: #ffffff;
`;

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <CommentContiner>
          <CommentHeading>
            {comments.length} {"   "} Comments{" "}
          </CommentHeading>
          {comments.map((comment) => (
            <CommentWrapper key={comment.createdAt}>
              <CommentName>
                {comment.name}
                <CommentDate>
                  {"  "}on{"  "}{" "}
                  {moment(comment.createdAt).format("MMM, DD, YYYY")}
                </CommentDate>
              </CommentName>
              <CommentText>{parse(comment.comment)}</CommentText>
            </CommentWrapper>
          ))}
        </CommentContiner>
      )}
    </>
  );
};

export default Comments;

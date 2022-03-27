import { css } from "@emotion/react";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const DeleteButton = ({ handleDelete, ...otherProps }) => {
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 1.3rem;
  `;

  return (
    <button
      onClick={() => {
        setLoading(true);
        handleDelete();
      }}
      className="btn btn-danger"
      {...otherProps}
    >
      {loading ? (
        <ClipLoader color="#fff" loading={loading} css={override} size={20} />
      ) : (
        " Delete"
      )}
    </button>
  );
};

export default DeleteButton;
